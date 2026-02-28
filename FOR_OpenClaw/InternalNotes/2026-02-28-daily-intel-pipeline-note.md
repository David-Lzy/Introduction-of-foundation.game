# 2026-02-28 Daily Intel Pipeline Note

- 执行顺序：读取规则文件 → 抓取候选源正文 → 对照 `seen-items.jsonl` 与历史日报去重 → 四维打分与 gate 判定 → 生成日报。
- 本次候选源：官网 news 索引、Google Play、App Store、Steam 商店页、官网首页、LINEGames 兑换码聚合页。
- `page-cache.json` 已刷新抓取时间与指纹，并新增 `linegames.org` 条目。
- 由于今日无候选通过 ingestion gate，且不满足 daily gate，未改动玩家目录。
- 术语 lint：本次未新增/修改玩家向文档，禁用词残留 0。
