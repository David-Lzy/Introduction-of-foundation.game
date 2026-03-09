# 2026-03-08 Daily Intel Pipeline Note

- 任务入口：`foundation-game-daily-intel` cron。
- 已按顺序执行：visited-pages 去重 → page-cache 指纹写入/刷新 → 正文抓取与可读化 → seen-items/历史文档去重比对 → 四维打分与 gate 判定。
- 候选来源池：Brave 检索（第三方攻略站、模拟器攻略、社区讨论与聚合博客）。
- 本日 visited_skip：10（已访问且不在 recheck whitelist）。
- 本日实际访问：4（均为 cache_miss；1 条 403 无可用正文）。
- Ingestion gate 通过：0；Daily gate 未达标（<2 且无高价值增量），不改玩家三语文档。
- 术语 lint：本次未修改玩家向文档，禁用词残留 0。