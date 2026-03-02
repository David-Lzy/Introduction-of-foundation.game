# 2026-03-02 Daily Intel Pipeline Note

- 按 `daily-job-prompt.md` 执行完整流程：visited 去重 → cache 检查 → 正文抓取 → seen-items/历史去重 → 四维打分 → gate 判定。
- 今日种子官方 URL（昨日已访问）均命中 visited 且不在 `recheck-whitelist.txt`，按规则直接 `visited_skip`（6 条）。
- 为避免“零候选空跑”，额外通过 web search 扩展 3 个未访问候选并完成抓取与打分（x 状态页、PocketGamer 兑换码页、IGN 条目页）。
- 3 条候选均未通过 ingestion gate（1 条内容不可读，1 条触发兑换码不可核验 hard fail，1 条信息密度低且增量不足）。
- Daily gate 未通过（通过数 0，且无高价值增量），按规则只产出日报，不改玩家目录。
