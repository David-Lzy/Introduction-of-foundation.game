# 2026-02-27 Daily Intel Pipeline Note

- 执行入口：`FOR_OpenClaw/pipeline/daily-job-prompt.md`
- 本次严格读取并遵守：
  - `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  - `FOR_OpenClaw/pipeline/change-threshold.yml`
  - `FOR_OpenClaw/Translate/glossary.yml`
  - `FOR_OpenClaw/Translate/glossary-lint.md`
- 本轮候选来源：官网 news 索引、Google Play、App Store、Steam 商店、X 官方账号维护帖（可见性失败页）、FunPlus 发布稿、官网首页。
- 处理顺序：缓存检查 → 正文抓取 → 与 `seen-items.jsonl` 去重 → 四维打分 → ingestion gate → daily gate。
- 结果：无候选同时满足 `min_total_score >= 14` 且 `novelty >= 3`；因此触发“只发日报，不改玩家文档”。
- 今日未触发术语新增；玩家目录零改动，术语 lint 通过（禁用词残留 0）。
