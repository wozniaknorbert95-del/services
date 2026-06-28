# Set Vercel Preview GA env (run once from repo root)
# Production + Development already have G-LY0E7MW0HF per `vercel env ls`.
# Preview requires branch target when Vercel Git integration is strict.

$measurementId = "G-LY0E7MW0HF"
$name = "NEXT_PUBLIC_GA_MEASUREMENT_ID"

$dashboardUrl = "https://vercel.com/wozniaknorbert95-dels-projects/flexgrafik-services/settings/environment-variables"

Write-Host "Attempting Preview env for all preview deployments..."
vercel env add $name preview --value $measurementId --yes --force 2>&1

if ($LASTEXITCODE -ne 0) {
  Write-Host @"

CLI blocked (git_branch_required). Set in Vercel Dashboard (30s):
  $dashboardUrl

  Name: $name
  Value: $measurementId
  Environment: Preview (All Preview Deployments)

"@ -ForegroundColor Yellow
}

Write-Host "Current env:"
vercel env ls
