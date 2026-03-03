# 2026-03-03 Daily Intel Pipeline Note

- 任务入口：`foundation-game-daily-intel` cron。
- 已按顺序执行：visited-pages 去重 → page-cache 指纹写入/刷新 → 正文抓取与可读化 → seen-items/历史语义去重（人工比对）→ 四维打分与 gate 判定。
- 候选来源池：今日以 Brave 检索结果为主，优先官方/高可信链接；同时保留社区与攻略站作为低可信对照样本。
- 日结果：0 条通过 ingestion gate，daily gate 未达标（<2 且无高价值增量），因此不改玩家三语文档。
- 术语 lint：本次未修改玩家文档，禁用词残留 0。
