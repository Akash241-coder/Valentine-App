$envFile = ".env"
$outputFile = "scripts/env.js"

$content = Get-Content $envFile
$js = "window.ENV = {`n"

foreach ($line in $content) {
    if ($line -match "=") {
        $parts = $line.Split("=")
        $key = $parts[0].Trim()
        $value = $parts[1].Trim()
        $js += "  $key: `"$value`",`n"
    }
}

$js += "};"
$js | Out-File -Encoding utf8 $outputFile

Write-Host "✅ env.js generated!"
