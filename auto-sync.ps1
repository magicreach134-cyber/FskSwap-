# PowerShell Script: auto-sync.ps1
# Automatically pulls latest changes from GitHub when new commits are available

$RepoPath = "C:\Users\YourName\FskSwap"
cd $RepoPath

Write-Host "🔄 Checking for updates from GitHub..."

# Fetch updates
git fetch

# Check if local is behind
$behind = git rev-list HEAD..origin/main --count

if ($behind -gt 0) {
    Write-Host "⬇️  $behind new commits found. Pulling updates..."
    git pull origin main
    Write-Host "✅ Repository updated successfully."

    # Optional: rebuild project
    npm install
    npm run build
    Write-Host "⚙️ App rebuilt successfully."
} else {
    Write-Host "✅ Already up to date."
}
