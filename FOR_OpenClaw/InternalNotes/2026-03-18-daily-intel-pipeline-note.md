# 2026-03-18 Daily Intel Pipeline Note

- 按 `daily-job-prompt.md` 执行：先查 `visited-pages.jsonl` 与 `recheck-whitelist.txt`，命中已访问且不在白名单的 URL 直接跳过。
- 今日实际访问 3 个未记录变体 URL（Google Play `hl=en_AU`、App Store `au` 区域页、官方新闻 `utm_source` 变体），并完成正文提取与四维评分。
- 结果：
  - 两个商店页虽可提取正文，但与近两日已处理更新点高度重叠，novelty 未达阈值；
  - 官方新闻变体仍仅提取到站点标题，触发 hard fail。
- 依据 `change-threshold.yml`：当日通过 0 条，且无高价值增量，执行“仅发日报、不改玩家文档”。
