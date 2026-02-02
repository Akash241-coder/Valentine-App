$envFile = ".env"
$outputFile = "scripts/env.js"

$content = Get-Content $envFile
$lines = @()

foreach ($line in $content) {
    if ($line -match "=") {
        $parts = $line.Split("=")
        $key = $parts[0].Trim()
        $value = $parts[1].Trim()
        $lines += "  $($key): `"$value`""
    }
}

$js = "window.ENV = {`n" + ($lines -join ",`n") + "`n};"
$js | Out-File -Encoding utf8 $outputFile

Write-Host "✅ env.js generated successfully!"
