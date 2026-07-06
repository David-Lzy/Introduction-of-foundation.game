# 2026-07-06 Daily Intel Pipeline Note

- 已读取并遵守：
  1. `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  2. `FOR_OpenClaw/pipeline/change-threshold.yml`
  3. `FOR_OpenClaw/Translate/glossary.yml`
  4. `FOR_OpenClaw/Translate/glossary-lint.md`
- 按 `FOR_OpenClaw/pipeline/daily-job-prompt.md` 执行。
- 先执行 visited gate：7 个例行监控源仍已存在于 `FOR_OpenClaw/intel/visited-pages.jsonl`，且 `recheck-whitelist.txt` 无复检豁免 URL，因此全部 `visited_skip`。
- 搜索侧新浮出 1 条未入 `visited-pages.jsonl` 的官方路线图直连页，并实际读取正文：
  - `https://www.facebook.com/FoundationGalacticFrontier/posts/-foundation-dev-roadmap-mid-2026-julyseptember-traders-the-galaxy-doesnt-stand-s/122257169654252135/`
- 该路线图提供了此前玩家文档未明确收录的三类正文级增量：
  - **Season 2** 当前目标窗口是 **2026-08**
  - **Shadowfront League** 将采用 **64 队单败淘汰赛**，参赛池来自每 8 服的前 32 个 Guild
  - **Guild Ruins** / **Cross-Server Ruins** 将把 **Ruin Raiders** 扩展到共享 Guild 空间、高价值挖掘与跨服匹配
- `Pocket Gamer codes` 与 `tier-list` 继续只作为 `visited_skip` 例行复核对象处理；本轮不重访其正文。
- ingestion gate 通过项为 1，且命中 `high_value_rule`，因此虽然通过候选数 `< 2`，仍放行写入玩家文档。
- 已新增三语新闻页并更新三语新闻索引。
- 已更新 `page-cache.json`、`visited-pages.jsonl`、`seen-items.jsonl`。
- 本轮未发现新的 `first_seen` 兑换码，也无兑换码状态翻转，不发送兑换码双语快讯。
- 词典未覆盖但本轮继续保留官方英文的新术语候选：
  - `Season 2`
  - `Guild Ruins`
  - `Cross-Server Ruins`
  - `Ruin Raiders`
  - `Shadowfront League`
  - `Boss Rush Gameplay`
- 需将日报发送到 Discord 频道 `1475011423414259937`，消息保持中文 + English 双语，并追加推广尾行。
