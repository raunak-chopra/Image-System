[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$library = Join-Path $root 'prompt-library'
$errors = [System.Collections.Generic.List[string]]::new()
$warnings = [System.Collections.Generic.List[string]]::new()

function Add-Error([string]$Message) { $script:errors.Add($Message) }
function Add-Warning([string]$Message) { $script:warnings.Add($Message) }

$requiredPaths = @(
    'README.md',
    'AGENTS.md',
    'creative-rules.md',
    'workflows/creative-image-workflow.md',
    'prompt-library/README.md',
    'prompt-library/SCHEMA.md',
    'prompt-library/index.csv',
    'prompt-library/sources/source-register.md',
    'prompt-library/sources/research-review.md',
    'prompt-library/sources/deduplication-ledger.md',
    'prompt-library/nano-banana-2/README.md',
    'prompt-library/nano-banana-2/PROMPTS.md',
    '.codex/skills/creative-prompt-library/SKILL.md',
    'memory/SCHEMA.md',
    'memory/learned-preferences.md'
)

foreach ($relative in $requiredPaths) {
    if (-not (Test-Path -LiteralPath (Join-Path $root $relative) -PathType Leaf)) {
        Add-Error "Missing required file: $relative"
    }
}

$rows = Import-Csv -LiteralPath (Join-Path $library 'index.csv')
$duplicateIds = $rows | Group-Object id | Where-Object Count -gt 1
foreach ($group in $duplicateIds) { Add-Error "Duplicate index id: $($group.Name)" }

$requiredFields = @(
    '**Purpose:**', '**Category:**', '**Tags:**', '**Mode:**', '**Model/tool:**',
    '**Compatibility:**', '**Validation:**', '**Required inputs:**', '**Reference assets:**',
    '**Sources:**', '**Reuse:**', '### Prompt', '### Variations and adaptation',
    '### Constraints and common failures', '### Quality checks'
)

foreach ($row in $rows) {
    $parts = $row.path -split '#', 2
    $target = Join-Path $library $parts[0]
    if (-not (Test-Path -LiteralPath $target -PathType Leaf)) {
        Add-Error "Index target missing for $($row.id): $($row.path)"
        continue
    }
    $text = Get-Content -Raw -LiteralPath $target
    $headingPattern = '(?m)^## ' + [regex]::Escape($row.id) + ' — '
    if ($text -notmatch $headingPattern) {
        Add-Error "Heading missing for index id $($row.id) in $($parts[0])"
        continue
    }
    $start = [regex]::Match($text, $headingPattern).Index
    $next = $text.IndexOf("`n## ", $start + 4)
    if ($next -lt 0) { $entry = $text.Substring($start) } else { $entry = $text.Substring($start, $next - $start) }
    foreach ($field in $requiredFields) {
        if (-not $entry.Contains($field)) { Add-Error "Entry $($row.id) missing field: $field" }
    }
    if ([regex]::IsMatch($entry, '\{[a-z][^}]*\}')) { Add-Warning "Entry $($row.id) may contain a non-UPPER_SNAKE_CASE placeholder" }
    if ($entry -notmatch 'SRC-\d{2}') { Add-Error "Entry $($row.id) has no source ID" }
    $reuseLine = [regex]::Match($entry, '(?m)^- \*\*Reuse:\*\* (.+)$').Groups[1].Value
    if ($reuseLine -notmatch 'SRC-\d{2}') { Add-Error "Entry $($row.id) reuse statement is not source-specific" }
    if ($reuseLine -match 'Observe (linked|per-source)') { Add-Error "Entry $($row.id) retains a generic reuse statement" }
}

$sourceText = Get-Content -Raw -LiteralPath (Join-Path $library 'sources/source-register.md')
$sourceIds = [regex]::Matches($sourceText, 'SRC-\d{2}') | ForEach-Object Value | Sort-Object -Unique
$expectedSourceIds = 1..20 | ForEach-Object { 'SRC-{0:D2}' -f $_ }
foreach ($id in $expectedSourceIds) {
    if ($id -notin $sourceIds) { Add-Error "Source register coverage gap: $id" }
}
$researchText = Get-Content -Raw -LiteralPath (Join-Path $library 'sources/research-review.md')
$dedupText = Get-Content -Raw -LiteralPath (Join-Path $library 'sources/deduplication-ledger.md')
foreach ($id in $expectedSourceIds) {
    if ($researchText -notmatch ('(?m)^## ' + [regex]::Escape($id) + '\b') -and $id -notin @('SRC-19','SRC-20')) {
        Add-Error "Research review section missing: $id"
    }
}
$entryFiles = Get-ChildItem -LiteralPath (Join-Path $library 'categories') -Filter '*.md' -File
$entryFiles += Get-Item -LiteralPath (Join-Path $library 'nano-banana-2/PROMPTS.md')
$usedSourceIds = foreach ($file in $entryFiles) {
    [regex]::Matches((Get-Content -Raw -LiteralPath $file.FullName), 'SRC-\d{2}') | ForEach-Object Value
}
foreach ($id in ($usedSourceIds | Sort-Object -Unique)) {
    if ($id -notin $sourceIds) { Add-Error "Unregistered source id used: $id" }
}
foreach ($id in $expectedSourceIds) {
    if ($id -notin $usedSourceIds -and $dedupText -notmatch [regex]::Escape($id)) {
        Add-Error "Source has neither a template citation nor a dedup/exclusion decision: $id"
    }
}

$markdownFiles = Get-ChildItem -LiteralPath $root -Recurse -Filter '*.md' -File | Where-Object FullName -NotMatch '[\\/]\.research-cache[\\/]'
foreach ($file in $markdownFiles) {
    $content = Get-Content -Raw -LiteralPath $file.FullName
    $matches = [regex]::Matches($content, '\[[^\]]+\]\((?!https?://|#)([^)]+)\)')
    foreach ($match in $matches) {
        $link = ($match.Groups[1].Value -split '#', 2)[0]
        if ([string]::IsNullOrWhiteSpace($link)) { continue }
        $resolved = Join-Path $file.DirectoryName $link
        if (-not (Test-Path -LiteralPath $resolved)) {
            Add-Error "Broken local link in $($file.FullName.Substring($root.Length + 1)): $link"
        }
    }
}

$agents = Get-Content -Raw -LiteralPath (Join-Path $root 'AGENTS.md')
$workflow = Get-Content -Raw -LiteralPath (Join-Path $root 'workflows/creative-image-workflow.md')
if ($agents -notmatch 'nano-banana-2/README\.md') { Add-Error 'AGENTS.md does not route to Nano Banana 2.' }
if ($agents -notmatch 'creative-prompt-library/SKILL\.md') { Add-Error 'AGENTS.md does not route through the project creative skill.' }
if ($workflow -notmatch 'index\.csv') { Add-Error 'Creative workflow does not route to the search index.' }
if ($workflow -notmatch 'validate-library\.ps1') { Add-Error 'Creative workflow does not include reconciliation validation.' }
if ($agents -notmatch 'memory/learned-preferences\.md') { Add-Error 'AGENTS.md does not route through the 2nd memory loop.' }
if ($workflow -notmatch 'sync-memory\.ps1') { Add-Error 'Creative workflow does not include memory synchronization.' }

Write-Output "Creative prompt library validation"
Write-Output "Entries: $($rows.Count)"
Write-Output "Markdown files checked: $($markdownFiles.Count)"
Write-Output "Registered sources: $($sourceIds.Count)"
foreach ($warning in $warnings) { Write-Warning $warning }
if ($errors.Count -gt 0) {
    foreach ($item in $errors) { Write-Error $item }
    exit 1
}
Write-Output "PASS: structure, index targets, entry schema, source research/dedup coverage, per-entry reuse licensing, local links, project skill, and workflow routing are consistent."
