[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$memoryDir = Join-Path $root 'memory'
$ledgerPath = Join-Path $memoryDir 'feedback-ledger.jsonl'
$prefsPath = Join-Path $memoryDir 'learned-preferences.md'
$schemaPath = Join-Path $memoryDir 'SCHEMA.md'

Write-Host "Syncing and validating 2nd Memory Loop..." -ForegroundColor Cyan

if (-not (Test-Path -LiteralPath $ledgerPath -PathType Leaf)) {
    Write-Error "Missing feedback ledger: $ledgerPath"
    exit 1
}

if (-not (Test-Path -LiteralPath $prefsPath -PathType Leaf)) {
    Write-Error "Missing learned preferences guide: $prefsPath"
    exit 1
}

if (-not (Test-Path -LiteralPath $schemaPath -PathType Leaf)) {
    Write-Error "Missing memory schema: $schemaPath"
    exit 1
}

$lines = Get-Content -LiteralPath $ledgerPath
$records = [System.Collections.Generic.List[PSObject]]::new()
$lineNumber = 0
$requiredFields = @('event_id', 'timestamp', 'asset_name', 'template_id', 'sentiment', 'positive_signals', 'negative_signals', 'actionable_learnings')

foreach ($line in $lines) {
    $lineNumber++
    $trimmed = $line.Trim()
    if ([string]::IsNullOrWhiteSpace($trimmed)) { continue }

    try {
        $record = $trimmed | ConvertFrom-Json
        $records.Add($record)
    }
    catch {
        Write-Error "Invalid JSON on line $lineNumber in $ledgerPath : $_"
        exit 1
    }

    foreach ($field in $requiredFields) {
        if (-not ($record.PSObject.Properties.Name -contains $field)) {
            Write-Error "Record on line $lineNumber is missing required field '$field'"
            exit 1
        }
    }

    if ($record.sentiment -notin @('liked', 'disliked', 'mixed_or_revised')) {
        Write-Error "Record on line $lineNumber has invalid sentiment '$($record.sentiment)'"
        exit 1
    }
}

$total = $records.Count
$liked = ($records | Where-Object { $_.sentiment -eq 'liked' }).Count
$disliked = ($records | Where-Object { $_.sentiment -eq 'disliked' }).Count
$mixed = ($records | Where-Object { $_.sentiment -eq 'mixed_or_revised' }).Count
$approvalRate = if ($total -gt 0) { [math]::Round(($liked / $total) * 100, 1) } else { 0 }

Write-Host "Memory Ledger Validation: PASS" -ForegroundColor Green
Write-Host "Total Records: $total | Liked: $liked | Disliked: $disliked | Mixed: $mixed | Approval Rate: $approvalRate%" -ForegroundColor Yellow

# Verify that metrics in learned-preferences.md match
$prefsContent = Get-Content -Raw -LiteralPath $prefsPath
if ($prefsContent -match '\*\*Total Recorded Generations\*\*\s*\|\s*(\d+)') {
    $docTotal = [int]$Matches[1]
    if ($docTotal -ne $total) {
        Write-Warning "learned-preferences.md records total ($docTotal) differs from ledger ($total). Update table in learned-preferences.md."
    }
}

Write-Host "2nd Memory Loop is synchronized and healthy." -ForegroundColor Green
