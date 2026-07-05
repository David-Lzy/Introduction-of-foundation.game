# 2026-07-05 Daily Intel Pipeline Note

- 已读取并遵守：
  1. `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  2. `FOR_OpenClaw/pipeline/change-threshold.yml`
  3. `FOR_OpenClaw/Translate/glossary.yml`
  4. `FOR_OpenClaw/Translate/glossary-lint.md`
- 按 `FOR_OpenClaw/pipeline/daily-job-prompt.md` 执行。
- 先执行 visited gate：7 个例行监控源继续命中 `FOR_OpenClaw/intel/visited-pages.jsonl`，`recheck-whitelist.txt` 仍无豁免 URL，因此全部 `visited_skip`。
- 搜索侧新增浮出 4 条未入 `visited-pages.jsonl` 的官方社媒直连 URL：
  - `https://x.com/FoundationGF_EN/status/2073415282929106991`
  - `https://x.com/FoundationGF_EN/status/2073028993692119507`
  - `https://x.com/FoundationGF_EN/status/2071941832309682207`
  - `https://x.com/FoundationGF_EN/status/2071579441428574506`
- 4 条候选全部完成正文抽取与四维打分，但都卡在 `novelty < 3`：
  - Guild Duel League 图卡：补充了开放资格与 League 档位，但核心规则已在 `2026-07-03` 入库。
  - Event Calendars：属于按周滚动排期，未形成可沉淀的新机制说明。
  - Appearance Shop：新增 Trader Center 解锁与每月 1 日轮换说明，但仍不足以单独入库。
  - Gram 周年皮肤征集：属社群活动信号，不进入玩家文档。
- ingestion gate 通过项为 0；high-value 增量为 0。
- 由于当日新增不足阈值且无高价值增量，本轮进入“只发日报，不改玩家文档”分支。
- 已更新 `page-cache.json` 与 `visited-pages.jsonl`；`seen-items.jsonl` 本轮不更新。
- 本轮无新兑换码、无兑换码状态翻转，因此不发送兑换码双语快讯。
- 术语 lint 自动通过：玩家向文档未修改，禁用词残留为 0。
- 需将日报发送到 Discord 频道 `1475011423414259937`，消息保持中文 + English 双语，并追加推广尾行。
