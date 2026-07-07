# 2026-07-07 Daily Intel Pipeline Note

- 已读取并遵守：
  1. `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  2. `FOR_OpenClaw/pipeline/change-threshold.yml`
  3. `FOR_OpenClaw/Translate/glossary.yml`
  4. `FOR_OpenClaw/Translate/glossary-lint.md`
- 按 `FOR_OpenClaw/pipeline/daily-job-prompt.md` 执行。
- 先执行 visited gate：7 个例行监控源仍已存在于 `FOR_OpenClaw/intel/visited-pages.jsonl`，且 `recheck-whitelist.txt` 无复检豁免 URL，因此全部 `visited_skip`。
- 搜索侧新浮出 1 条未入 `visited-pages.jsonl` 的官方 X 热更新直连页，并实际读取正文：
  - `https://x.com/FoundationGF_EN/status/2074116153706955047`
- 该热更新提供了此前玩家文档未明确收录的正文级增量：
  - **Galaxy Cup Carnival** 与 **Golden Ball Coins** 奖励循环
  - 新 **Heroic Crew Member Hugo Crast** 的**开服至少 27 周**开放门槛
  - **Shadowfront** 的双时段投票与 **Battle Arrangement** 结束提醒
  - **Ascendancy Shrines** 的 **20 秒**刷新间隔
  - 集结 / 驻防状态下的战机维修条件，以及 **Operation Blackout** 日历修复
- `Pocket Gamer codes` 与 `tier-list` 继续只作为 `visited_skip` 例行复核对象处理；本轮不重访其正文。
- ingestion gate 通过项为 1，且命中 `high_value_rule`，因此虽然通过候选数 `< 2`，仍放行写入玩家文档。
- 已新增三语新闻页并更新三语新闻索引。
- 已更新 `page-cache.json`、`visited-pages.jsonl`、`seen-items.jsonl`。
- 本轮未发现新的 `first_seen` 兑换码，也无兑换码状态翻转，不发送兑换码双语快讯。
- 词典未覆盖但本轮继续保留官方英文的新术语候选：
  - `Galaxy Cup Carnival`
  - `Golden Ball Coins`
  - `Heroic Crew Member`
  - `Hugo Crast`
  - `Ascendancy Shrines`
  - `War Frenzy`
  - `Operation Blackout`
- 需将日报发送到 Discord 频道 `1475011423414259937`，消息保持中文 + English 双语，并追加推广尾行。
