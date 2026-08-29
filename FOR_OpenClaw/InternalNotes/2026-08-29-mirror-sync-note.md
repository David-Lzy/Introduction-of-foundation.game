# 2026-08-29 Mirror Sync Note

## Scope and quality gates

- Reviewed `FOR_OpenClaw/pipeline/mirror-job-prompt.md`, the ingestion scorecard, change threshold, glossary, and glossary lint rules before auditing the player-facing mirrors.
- The daily-intel candidate has one passing, high-value entry (actionability 5; novelty 4). It meets the documented high-value exception to the two-item daily threshold, so the corresponding three-language news entry remains eligible for publication.

## Mirror and category audit

- `English`, `SimplifiedChinese`, and `TraditionalChinese` each contain 57 player-facing Markdown files.
- Each mirror contains the same 15 dated news entries, including the 2026-08-29 maintenance entry, with its language-specific index link present.
- Category counterparts are present for basics, combat, events, progression, PVP, codes, pitfalls, tutorials, news, and other tips. No player-facing process material or misclassified short item was found; workflow notes remain under `FOR_OpenClaw/InternalNotes`.

## Glossary lint

- Scanned the three player-facing mirrors using all banned variants in `Translate/glossary.yml`.
- Review of contextual candidates confirmed that `母舰` refers to Mothership, `体力` refers to event stamina, and `角色 UID` is not the Champion system. No prohibited-term residuals were found.
- New 2026-08-29 content preserves glossary terms, including 省服 / 省服 / Province Server and 旗舰 / 旗艦 / Flagship. Unlisted official names remain in English as required.

## Verification

- The mirror audit and terminology check passed; a site build is required before commit.
