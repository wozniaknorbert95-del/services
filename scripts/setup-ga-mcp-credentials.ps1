# GA4 MCP — service account setup (OAuth blocked; use Chrome + GCP)
# Output: C:\Users\FlexGrafik\.config\quietforge-ga-sa.json

$ErrorActionPreference = "Stop"
$target = "C:\Users\FlexGrafik\.config\quietforge-ga-sa.json"
$configDir = Split-Path $target -Parent

if (-not (Test-Path $configDir)) {
  New-Item -ItemType Directory -Path $configDir -Force | Out-Null
}

if (Test-Path $target) {
  Write-Host "OK: credentials already at $target"
  exit 0
}

# Auto-install from latest GCP key in Downloads
$downloads = Join-Path $env:USERPROFILE "Downloads"
if (Test-Path $downloads) {
  $candidates = Get-ChildItem $downloads -Filter "*.json" -ErrorAction SilentlyContinue |
    Where-Object { $_.Length -lt 12KB } |
    Sort-Object LastWriteTime -Descending
  foreach ($file in $candidates) {
    try {
      $j = Get-Content $file.FullName -Raw | ConvertFrom-Json
      if ($j.type -eq "service_account" -and $j.client_email -match "gserviceaccount") {
        Copy-Item $file.FullName $target -Force
        Write-Host "OK: installed credentials from $($file.Name) -> $target"
        Write-Host "SA email: $($j.client_email) - add Viewer on GA4 property 543331587 (Quietforge) if not done."
        exit 0
      }
    } catch { }
  }
}

Write-Host @"

GA4 MCP needs a Google service account JSON at:
  $target

In Chrome (logged in as FlexGrafik Google account):

  1. Service account + JSON key:
     https://console.cloud.google.com/iam-admin/serviceaccounts
     -> Create: quietforge-ga-reader
     -> Keys -> Add key -> JSON -> save file

  2. GA4 Viewer access (property 543331587 Quietforge):
     https://analytics.google.com/analytics/web/#/a337818458p543331587/admin/property/access-management
     -> Add user -> paste SA email (…@….iam.gserviceaccount.com) -> Viewer

  3. Move downloaded JSON to:
     $target

Opening both URLs in default browser...
"@

Start-Process "https://console.cloud.google.com/iam-admin/serviceaccounts"
Start-Process "https://analytics.google.com/analytics/web/#/a337818458p543331587/admin/property/access-management"

Write-Host "Waiting for JSON at target path (Ctrl+C to cancel)..."
while (-not (Test-Path $target)) {
  Start-Sleep -Seconds 2
}

Write-Host "OK: credentials detected. Restart Cursor MCP."
