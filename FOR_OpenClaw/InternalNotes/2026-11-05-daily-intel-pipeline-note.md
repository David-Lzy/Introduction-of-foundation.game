# Daily intel pipeline note — 2026-11-05

- Backfilled legacy cache metadata for 291 entries with `fingerprint_algorithm: sha256` and 288 entries with `last_checked` from their recorded `last_fetched` time; unavailable-body entries retain null fingerprints.
- A preliminary `web_fetch` inadvertently retrieved Pocket Gamer and UCNGame page text before conditional probes; recorded as a protocol lapse. The text was not used to score/assess changes, and subsequent conditional requests returned 304.
- Probed the cached discovery/news/code pages: Murpo homepage and official news index hashes matched cache; Pocket Gamer and UCNGame returned HTTP 304. No unchanged body was semantically re-reviewed or scored.
- Sotwe profile direct HTTP probe returned 403. A current live page extraction exposed the full new Party Bounty post; normalized post-body SHA-256: `9a645101d4a876206b308c65517f750afa6f93abe2e4dc4eb288553a08a6a162`. Treated this extraction as the candidate body, while retaining the direct-probe limitation in cache/report.
- Candidate score: 4/5/4/5 = 18; passed ingestion gate and the high-value daily-gate exception (one item, minimum two). Mirrored as actionable event guidance in Simplified Chinese, Traditional Chinese, and English.
- Code lists yielded no distinct first-seen code or official active/expired state flip. FGF1stAnniv remains within its announced Nov 7 UTC expiry; no code notification.
- Discord read-history checks for update/code channels failed with `Delegated discord:read requires current provider and account context`; local seen-items and same-day records were checked for duplicates.
