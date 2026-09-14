# 2026-09-14 Content-hash cache migration

- Replaced the `visited-pages.jsonl` hard skip with content-hash increment detection.
- `page-cache.json` now treats every existing `fingerprint` as a legacy SHA-256 baseline. New or refreshed records must state `fingerprint_algorithm: sha256`, `last_checked`, and, when offered by the source, `etag` / `last_modified`.
- A `304 Not Modified` response or equal normalized-content hash is `cache_hit`; it is not re-read, scored, compared against history, or published.
- Only `cache_miss` and `cache_changed` bodies progress to the intake scorecard. `probe_error` is recorded but cannot create player-facing claims.
- `visited-pages.jsonl` remains an append-only first-discovery audit rather than a recheck gate.
