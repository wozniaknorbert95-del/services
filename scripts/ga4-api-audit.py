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


def run_funnel(c) -> dict:
    try:
        from google.analytics.data_v1beta.types import (
            DateRange,
            Funnel,
            FunnelEventFilter,
            FunnelFieldFilter,
            FunnelFilterExpression,
            FunnelStep,
            RunFunnelReportRequest,
            StringFilter,
        )

        def event_step(name: str, event_name: str) -> FunnelStep:
            return FunnelStep(
                name=name,
                filter_expression=FunnelFilterExpression(
                    funnel_event_filter=FunnelEventFilter(event_name=event_name)
                ),
            )

        def page_view_home() -> FunnelStep:
            return FunnelStep(
                name="Home page_view",
                filter_expression=FunnelFilterExpression(
                    and_group=FunnelFilterExpression.AndGroup(
                        expressions=[
                            FunnelFilterExpression(
                                funnel_event_filter=FunnelEventFilter(event_name="page_view")
                            ),
                            FunnelFilterExpression(
                                funnel_field_filter=FunnelFieldFilter(
                                    field_name="pageLocation",
                                    string_filter=StringFilter(
                                        match_type=StringFilter.MatchType.CONTAINS,
                                        value="quietforge.flexgrafik.nl/",
                                        case_sensitive=False,
                                    ),
                                )
                            ),
                        ]
                    )
                ),
            )

        def pricing_or_case() -> FunnelStep:
            return FunnelStep(
                name="pricing_view OR case_study_open",
                filter_expression=FunnelFilterExpression(
                    or_group=FunnelFilterExpression.OrGroup(
                        expressions=[
                            FunnelFilterExpression(
                                funnel_event_filter=FunnelEventFilter(event_name="pricing_view")
                            ),
                            FunnelFilterExpression(
                                funnel_event_filter=FunnelEventFilter(event_name="case_study_open")
                            ),
                        ]
                    )
                ),
            )

        resp = c.run_funnel_report(
            RunFunnelReportRequest(
                property=f"properties/{PROPERTY_ID}",
                date_ranges=[DateRange(start_date="28daysAgo", end_date="yesterday")],
                funnel=Funnel(
                    steps=[
                        page_view_home(),
                        pricing_or_case(),
                        event_step("cta_book_map_click", "cta_book_map_click"),
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
        return {"steps": steps}
    except Exception as exc:
        return {"error": str(exc), "steps": []}


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


def main() -> None:
    require_credentials()
    c = client()

    report = {
        "property_id": PROPERTY_ID,
        "custom_dimensions": get_custom_dims(c),
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
        "realtime": run_realtime(c),
        "funnel_28d": run_funnel(c),
        "weekly_7d": run_report(
            c,
            ["sessionSourceMedium"],
            ["sessions", "activeUsers"],
            DATE_RANGE_7D,
            limit=15,
        ),
    }

    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
