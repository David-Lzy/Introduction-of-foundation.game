# 2026-07-13 daily intel pipeline note

- 按 `daily-job-prompt.md` 先读取并遵守了：
  - `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  - `FOR_OpenClaw/pipeline/change-threshold.yml`
  - `FOR_OpenClaw/Translate/glossary.yml`
  - `FOR_OpenClaw/Translate/glossary-lint.md`
- 先用 `visited-pages.jsonl` 与 `recheck-whitelist.txt` 做 visited gate；7 条例行监控源全部命中 `visited_skip`，没有豁免 URL。
- 搜索侧发现 2 条新的官方 Facebook 直连页并抓取摘要：
  - `2026-07-13 至 2026-07-19` 活动日历汇总；
  - `Galactic Cup Carnival` 开启提醒，公开可见动作点只有 `Energy Core Lv. 10` 解锁门槛。
- 两条候选评分后全部 reject：
  - `event calendar`: `5/3/1/4 = 13`，只有周排期提醒，没有正文级新增机制。
  - `galactic cup carnival`: `5/3/1/3 = 12`，只有开启提醒与单一门槛提示。
- `daily gate` 未满足：通过候选 `0`，高价值增量 `0`，因此只发日报，不改玩家文档。
- 本轮新增 2 条实际访问 URL，因此更新了 `page-cache.json` 与 `visited-pages.jsonl`；`seen-items.jsonl` 无新增。
- 未改动玩家向文档，术语 lint 视为自动通过（0 条禁用词残留）。
