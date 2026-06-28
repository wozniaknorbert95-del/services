# Set Vercel Preview GA env (run once from repo root)
# Production + Development already have G-LY0E7MW0HF per `vercel env ls`.
# Preview requires branch target when Vercel Git integration is strict.

$measurementId = "G-LY0E7MW0HF"
$name = "NEXT_PUBLIC_GA_MEASUREMENT_ID"

Write-Host "Attempting Preview env for all preview deployments..."
vercel env add $name preview --value $measurementId --yes --force 2>&1

if ($LASTEXITCODE -ne 0) {
  Write-Host @"

If CLI requires a Git branch, set in Vercel Dashboard:
  Project flexgrafik-services -> Settings -> Environment Variables
  Name: $name
  Value: $measurementId
  Environment: Preview (All Preview Deployments)

"@ -ForegroundColor Yellow
}

Write-Host "Current env:"
vercel env ls
