# 2026-03-23 Daily Intel Pipeline Note

- 按 `FOR_OpenClaw/pipeline/daily-job-prompt.md` 执行日采集。
- 已读取并遵守：`ingestion-scorecard.yml`、`change-threshold.yml`、`glossary.yml`、`glossary-lint.md`。
- 先做 visited-pages 去重；命中且不在白名单的 URL 直接跳过（本日 visited_skip=2）。
- 对新访问候选逐条执行四维评分（credibility/actionability/novelty/freshness），低于阈值直接丢弃。
- 今日仅 1 条候选通过 ingestion gate，低于 `min_new_items_to_write=2` 且无 high value 增量；按 `change-threshold.yml` 仅发日报，不改玩家文档。
- 术语 lint：本次未改玩家文档，禁用词残留 0。
