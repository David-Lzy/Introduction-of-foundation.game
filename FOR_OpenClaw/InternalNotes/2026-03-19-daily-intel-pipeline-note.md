# 2026-03-19 Daily Intel Pipeline Note

- 按 `FOR_OpenClaw/pipeline/daily-job-prompt.md` 执行日采集。
- 先执行 visited-pages 去重：命中历史 URL 的候选全部跳过（未在 recheck whitelist）。
- 新访问候选统一做四维评分（credibility/actionability/novelty/freshness），低于门槛直接丢弃。
- 今日通过 ingestion gate 的候选数为 0，且无 high value 增量；按 `change-threshold.yml` 仅发日报，不改玩家目录。
- 术语 lint：本次未改玩家文档，禁用词残留 0。
