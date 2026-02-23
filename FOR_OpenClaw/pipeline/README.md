# Pipeline Config (FOR_OpenClaw)

This folder stores automation rules and templates.

## Files
- `ingestion-scorecard.yml`: candidate scoring + ingestion gate
- `change-threshold.yml`: daily write-threshold gate
- `daily-job-prompt.md`: prompt template for the daily crawl job
- `mirror-job-prompt.md`: prompt template for mirror/sync job

## Intent
1. Score every candidate first (quality gate)
2. Reject low-value items deterministically
3. Prevent "update for the sake of update"
4. Keep player-facing docs high-signal
