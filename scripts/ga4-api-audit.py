#!/usr/bin/env python3
"""GA4 API audit for Quietforge — mirrors analytics-mcp closure plan.

Requires:
  GOOGLE_APPLICATION_CREDENTIALS=C:/Users/FlexGrafik/.config/quietforge-ga-sa.json
  SA must have Viewer on property 543331587 (Quietforge)

Run: python scripts/ga4-api-audit.py
"""

from __future__ import annotations

import json
import os
import sys
from pathlib import Path

PROPERTY_ID = "543331587"
CREDENTIALS = Path(
    os.environ.get(
        "GOOGLE_APPLICATION_CREDENTIALS",
        r"C:\Users\FlexGrafik\.config\quietforge-ga-sa.json",
    )
)

CANON_EVENTS = [
    "cta_book_map_click",
    "cta_whatsapp_click",
    "sample_map_download",
    "wizard_demo_click",
    "case_study_open",
    "pricing_view",
    "book_discovery_view",
    "intake_submit",
    "book_payment_start",
    "book_payment_complete",
]

DATE_RANGE_28D = [{"start_date": "28daysAgo", "end_date": "yesterday", "name": "Last28d"}]
DATE_RANGE_7D = [{"start_date": "7daysAgo", "end_date": "yesterday", "name": "Last7d"}]


def require_credentials() -> None:
    if not CREDENTIALS.is_file():
        print(
            json.dumps(
                {
                    "error": "credentials_missing",
                    "path": str(CREDENTIALS),
                    "fix": "Run scripts/setup-ga-mcp-credentials.ps1",
                },
                indent=2,
            )
        )
        sys.exit(1)
    data = json.loads(CREDENTIALS.read_text(encoding="utf-8"))
    if data.get("type") != "service_account":
        print(json.dumps({"error": "invalid_credentials_type", "expected": "service_account"}))
        sys.exit(1)
    print(f"credentials_ok: {data.get('client_email', 'unknown')}")


def client():
    from google.analytics.data_v1beta import BetaAnalyticsDataClient

    return BetaAnalyticsDataClient()


def run_report(
    c,
    dimensions: list[str],
    metrics: list[str],
    date_ranges: list[dict],
    dimension_filter: dict | None = None,
    limit: int = 50,
) -> dict:
    from google.analytics.data_v1beta.types import (
        DateRange,
        Dimension,
        Filter,
        FilterExpression,
        Metric,
        RunReportRequest,
    )

    def to_filter(expr: dict | None) -> FilterExpression | None:
        if not expr:
            return None
        if "filter" in expr:
            f = expr["filter"]
            if "in_list_filter" in f:
                ilf = f["in_list_filter"]
                return FilterExpression(
                    filter=Filter(
                        field_name=f["field_name"],
                        in_list_filter=Filter.InListFilter(
                            values=ilf.get("values", []),
                            case_sensitive=ilf.get("case_sensitive", True),
                        ),
                    )
                )
            sf = f.get("string_filter", {})
            return FilterExpression(
                filter=Filter(
                    field_name=f["field_name"],
                    string_filter=Filter.StringFilter(
                        match_type=sf.get("match_type", 2),
                        value=sf["value"],
                        case_sensitive=sf.get("case_sensitive", False),
                    ),
                )
            )
        if "in_list_filter" in expr:
            f = expr["in_list_filter"]
            return FilterExpression(
                filter=Filter(
                    field_name=expr.get("field_name") or expr.get("filter", {}).get("field_name", "eventName"),
                    in_list_filter=Filter.InListFilter(
                        values=f.get("values", []),
                        case_sensitive=f.get("case_sensitive", True),
                    ),
                )
            )
        if "and_group" in expr:
            return FilterExpression(
                and_group=FilterExpression.AndGroup(
                    expressions=[to_filter(e) for e in expr["and_group"]["expressions"]]
                )
            )
        if "or_group" in expr:
            inner = expr["or_group"]["expressions"]
            if inner and "filter" in inner[0]:
                field = inner[0]["filter"]["field_name"]
                values = [e["filter"]["string_filter"]["value"] for e in inner]
                return FilterExpression(
                    filter=Filter(
                        field_name=field,
                        in_list_filter=Filter.InListFilter(values=values, case_sensitive=False),
                    )
                )
        return None

    req = RunReportRequest(
        property=f"properties/{PROPERTY_ID}",
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        date_ranges=[DateRange(**dr) for dr in date_ranges],
        limit=limit,
    )
    if dimension_filter:
        filt = to_filter(dimension_filter)
        if filt:
            req.dimension_filter = filt

    resp = c.run_report(req)
    rows = []
    for row in resp.rows:
        rows.append(
            {
                "dimensions": [dv.value for dv in row.dimension_values],
                "metrics": [mv.value for mv in row.metric_values],
            }
        )
    return {"row_count": len(rows), "rows": rows}


def run_realtime(c) -> dict:
    from google.analytics.data_v1beta.types import (
        Dimension,
        Metric,
        RunRealtimeReportRequest,
    )

    resp = c.run_realtime_report(
        RunRealtimeReportRequest(
            property=f"properties/{PROPERTY_ID}",
            dimensions=[Dimension(name="eventName")],
            metrics=[Metric(name="eventCount")],
            limit=30,
        )
    )
    rows = []
    for row in resp.rows:
        rows.append(
            {
                "eventName": row.dimension_values[0].value,
                "eventCount": row.metric_values[0].value,
            }
        )
    return {"row_count": len(rows), "rows": rows}


def run_funnel() -> dict:
    """Canon funnel via Data API v1alpha (v1beta lacks Funnel types)."""
    try:
        from google.analytics.data_v1alpha import AlphaAnalyticsDataClient
        from google.analytics.data_v1alpha.types import (
            DateRange,
            Funnel,
            FunnelEventFilter,
            FunnelFilterExpression,
            FunnelFilterExpressionList,
            FunnelStep,
            RunFunnelReportRequest,
        )

        def event_step(name: str, event_name: str) -> FunnelStep:
            return FunnelStep(
                name=name,
                filter_expression=FunnelFilterExpression(
                    funnel_event_filter=FunnelEventFilter(event_name=event_name)
                ),
            )

        def or_event_step(name: str, event_names: list[str]) -> FunnelStep:
            return FunnelStep(
                name=name,
                filter_expression=FunnelFilterExpression(
                    or_group=FunnelFilterExpressionList(
                        expressions=[
                            FunnelFilterExpression(
                                funnel_event_filter=FunnelEventFilter(event_name=e)
                            )
                            for e in event_names
                        ]
                    )
                ),
            )

        alpha = AlphaAnalyticsDataClient()
        resp = alpha.run_funnel_report(
            RunFunnelReportRequest(
                property=f"properties/{PROPERTY_ID}",
                date_ranges=[DateRange(start_date="7daysAgo", end_date="today")],
                funnel=Funnel(
                    steps=[
                        event_step("book_discovery_view", "book_discovery_view"),
                        event_step("cta_book_map_click", "cta_book_map_click"),
                        or_event_step("pricing_or_case", ["pricing_view", "case_study_open"]),
                        event_step("intake_submit", "intake_submit"),
                    ]
                ),
            )
        )

        steps = []
        if resp.funnel_table and resp.funnel_table.rows:
            for row in resp.funnel_table.rows:
                steps.append(
                    {
                        "step": row.dimension_values[0].value if row.dimension_values else "",
                        "active_users": row.metric_values[0].value if row.metric_values else "0",
                        "completion_rate": row.metric_values[1].value if len(row.metric_values) > 1 else "",
                    }
                )
        return {"row_count": len(steps), "steps": steps}
    except Exception as exc:
        return {"error": str(exc), "row_count": 0, "steps": []}


def get_key_events() -> list[str]:
    from google.analytics.admin_v1beta import AnalyticsAdminServiceClient

    admin = AnalyticsAdminServiceClient()
    parent = f"properties/{PROPERTY_ID}"
    names: list[str] = []
    try:
        for ev in admin.list_conversion_events(parent=parent):
            names.append(ev.event_name)
    except Exception as exc:
        names.append(f"admin_api_unavailable: {exc}")
    return names


def get_custom_dims(c) -> list[str]:
    from google.analytics.admin_v1beta import AnalyticsAdminServiceClient

    admin = AnalyticsAdminServiceClient()
    parent = f"properties/{PROPERTY_ID}"
    names = []
    try:
        for dim in admin.list_custom_dimensions(parent=parent):
            names.append(f"{dim.parameter_name} ({dim.display_name})")
    except Exception as exc:  # Admin API may lag after GCP enable
        names.append(f"admin_api_unavailable: {exc}")
    return names


def run_realtime_with_retry(c, *, attempts: int = 6, delay_s: float = 4.0) -> dict:
    """Realtime can lag 10–30s after collect hits; retry when used post-smoke."""
    import time

    last: dict = {"row_count": 0, "rows": []}
    for attempt in range(1, attempts + 1):
        last = run_realtime(c)
        if last["row_count"] > 0:
            last["retry_attempt"] = attempt
            return last
        if attempt < attempts:
            time.sleep(delay_s)
    last["retry_attempt"] = attempts
    return last


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser(description="GA4 Quietforge API audit")
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit 1 if realtime has zero rows after smoke (retries for API lag)",
    )
    parser.add_argument(
        "--output",
        type=str,
        default="",
        help="Write JSON report to file path",
    )
    args = parser.parse_args()

    require_credentials()
    c = client()

    report = {
        "property_id": PROPERTY_ID,
        "custom_dimensions": get_custom_dims(c),
        "key_events": get_key_events(),
        "traffic_28d": run_report(
            c,
            ["sessionSourceMedium"],
            ["sessions", "activeUsers"],
            DATE_RANGE_28D,
            limit=20,
        ),
        "landing_28d": run_report(
            c,
            ["landingPage"],
            ["sessions", "activeUsers"],
            DATE_RANGE_28D,
            limit=10,
        ),
        "canon_events_28d": run_report(
            c,
            ["eventName"],
            ["eventCount"],
            DATE_RANGE_28D,
            dimension_filter={
                "filter": {
                    "field_name": "eventName",
                    "in_list_filter": {"values": CANON_EVENTS, "case_sensitive": True},
                }
            },
            limit=20,
        ),
        "location_breakdown_28d": run_report(
            c,
            ["eventName", "customEvent:location"],
            ["eventCount"],
            DATE_RANGE_28D,
            dimension_filter={
                "filter": {
                    "field_name": "eventName",
                    "string_filter": {"match_type": 2, "value": "cta_book_map_click", "case_sensitive": True},
                }
            },
            limit=25,
        ),
        "realtime": run_realtime_with_retry(c) if args.strict else run_realtime(c),
        "funnel_7d": run_funnel(),
        "weekly_7d": run_report(
            c,
            ["sessionSourceMedium"],
            ["sessions", "activeUsers"],
            DATE_RANGE_7D,
            limit=15,
        ),
    }

    if args.output:
        Path(args.output).write_text(json.dumps(report, indent=2), encoding="utf-8")
        print(f"wrote: {args.output}")

    print(json.dumps(report, indent=2))

    if args.strict and report["realtime"]["row_count"] == 0:
        print("FAIL: realtime row_count is 0 — run ga4-prod-smoke first", file=sys.stderr)
        sys.exit(1)

    if report["funnel_7d"].get("error"):
        print(f"WARN: funnel report error: {report['funnel_7d']['error']}", file=sys.stderr)


if __name__ == "__main__":
    main()
