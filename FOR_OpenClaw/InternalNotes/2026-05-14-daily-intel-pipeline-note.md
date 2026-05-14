# 2026-05-14 Daily Intel Pipeline Note

- 已读取并遵守：
  1. `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  2. `FOR_OpenClaw/pipeline/change-threshold.yml`
  3. `FOR_OpenClaw/Translate/glossary.yml`
  4. `FOR_OpenClaw/Translate/glossary-lint.md`
- 按 `FOR_OpenClaw/pipeline/daily-job-prompt.md` 执行。
- 先执行 visited gate：6 个例行监控源均已存在于 `FOR_OpenClaw/intel/visited-pages.jsonl`，且 `recheck-whitelist.txt` 无可重查豁免 URL，因此全部 `visited_skip`。
- 本轮实际访问 3 条未访问过的官方 URL：Windows 落地页、Top-Up Center 活动页、旧新闻页 `thetraderera`。
- `landing-pc` 明确给出 3 个新信号：Windows 已开放、Windows 登录奖励 **Permanent Portrait Frame**、累计登录额外奖励存在；判定为高价值增量并入库。
- `landing-store` 仅能确认 `Global Launch Celebration` / `Celebration Exclusive Value Pack` / `Weekly Perks` 这些名称，没有价格、奖励表、时限或领取条件，reject。
- `thetraderera` 页面日期为 `2025-10-21`，只是旧宣发 trailer 介绍，reject。
- ingestion gate 通过项为 1；high-value 增量为 1。
- 按 daily gate 放行玩家文档写入：新增三语 `2026-05-14` 新闻条目，并同步更新各自 README。
- 已写日报：`FOR_OpenClaw/intel/reports/2026-05-14.md`。
- 已更新 `page-cache.json`、`visited-pages.jsonl`、`seen-items.jsonl`。
- 术语备注：`Permanent Portrait Frame` 词典未覆盖，按规则保留官方英文；暂记于此，后续若高频出现再考虑入词典。
- 本轮未发现满足入库条件的新兑换码，不触发双语快讯。
- 需将日报发送到 Discord 频道 `1475011423414259937`。
