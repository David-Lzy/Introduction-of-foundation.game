# 2026-03-17 Daily Intel Pipeline Note

- 按 `daily-job-prompt.md` 先做 visited-pages 检查，再做正文抓取和评分。
- 今日优先复核商店页变体（Google Play 主链接、App Store 短链接）与一条官方新闻 query 变体。
- 结果：
  - 商店变体内容与既有增量高度重叠，novelty 不达标；
  - 官方新闻页仍无法稳定抓取正文（readability 仅标题）。
- 依据 `change-threshold.yml`：当日无通过项且无高价值增量，仅发日报，不改三语玩家目录。
