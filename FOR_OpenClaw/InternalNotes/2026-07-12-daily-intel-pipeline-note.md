# 2026-07-12 daily intel pipeline note

- 按 `daily-job-prompt.md` 先读取并遵守了：
  - `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  - `FOR_OpenClaw/pipeline/change-threshold.yml`
  - `FOR_OpenClaw/Translate/glossary.yml`
  - `FOR_OpenClaw/Translate/glossary-lint.md`
- 先用 `visited-pages.jsonl` 与 `recheck-whitelist.txt` 做 visited gate；7 条例行监控源全部命中 `visited_skip`，没有豁免 URL。
- 搜索侧复核结果：
  - 官网新闻列表公开最新正式新闻仍是 `2026-01-23 / Foundation: Galactic Frontier — Steam Version Coming Soon`。
  - 官方社媒没有新的未访问直连 URL；搜索顶部仍是 7 月上旬已经处理过的路线图 / 热更新 / 中奖公示帖子。
  - `Pocket Gamer codes` 页公开日期滚到 `2026-07-11`，但活跃码公开信号仍只见 `FOUNDATION` 与 `FURTHERFUTURE`，无新 `first_seen`。
  - `Pocket Gamer tier-list` 仍是 `2026-07-01 / Version 1.1.77` 延续信号。
- 候选评分后 2 条全部 reject：
  - `codes`: `4/3/1/5 = 13`，仅日期更新，无正文级增量。
  - `tier-list`: `4/2/1/5 = 12`，只有版本延续信号。
- `daily gate` 未满足：通过候选 `0`，高价值增量 `0`，因此只发日报，不改玩家文档。
- 本轮没有新增实际访问 URL，因此未更新 `page-cache.json`、`visited-pages.jsonl`、`seen-items.jsonl`。
- 未改动玩家向文档，术语 lint 视为自动通过（0 条禁用词残留）。
