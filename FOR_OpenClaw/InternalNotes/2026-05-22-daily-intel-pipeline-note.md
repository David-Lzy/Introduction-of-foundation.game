# 2026-05-22 Daily Intel Pipeline Note

- 已读取并遵守：
  1. `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  2. `FOR_OpenClaw/pipeline/change-threshold.yml`
  3. `FOR_OpenClaw/Translate/glossary.yml`
  4. `FOR_OpenClaw/Translate/glossary-lint.md`
- 继续执行 visited gate：6 条例行监控源与 `w.twstalker` 仍不在 `recheck-whitelist.txt`，本轮全部 `visited_skip`。
- 本轮实际新增访问 8 条 GameWith 直连页面，其中 2 条形成高价值正文：
  - `https://gamewith.jp/foundation-gf/561370`：Crime Hunt 的 `Agent Signal` 获取优先级、单旗舰参战限制、`450,000` 集结 HP 门槛、发起 / 参与奖励上限。
  - `https://gamewith.jp/foundation-gf/555472`：Glory Arena 的 3 队制规则、每日 3 票、失败不掉分、免费刷新 3 次、挑低战力高积分目标。
- `https://gamewith.jp/foundation-gf/552844`（Radiant）虽然补了 `能源核心 Lv.11`、`格雷的房间`、放置奖励与 12 关 Boss 节奏，但整体仍偏系统概览，和现有基础 / PvE 主线重叠较高，本轮按低增量 reject。
- `https://gamewith.jp/foundation-gf/553073`（至高的尖兵）新增信息主要是 10 AP、可上 3 艘旗舰、初次奖励示例；与现有《主动资源获取》与《每日与每周例行清单》重叠较多，本轮 reject。
- `https://gamewith.jp/foundation-gf/552105`（更新汇总）主要复述 4 月 15 / 22 / 28 与 5 月 12 / 19 更新，关键点已在 2026-05-03 / 2026-05-15 玩家新闻文档中覆盖，本轮 reject。
- `https://gamewith.jp/foundation-gf/560763`（Crew 一览）是资料表，不适合直接进入玩家向正文，本轮 reject。
- `https://gamewith.jp/foundation-gf/559872`（荣耀币）与 `https://gamewith.jp/foundation-gf/559863`（旗舰一览）本轮抽取结果都只剩 boilerplate，命中 `contains only links without extracted content` 风险，直接 reject。
- glossary 本轮未新增词条；玩家正文里继续保留未入词典但高频的官方英文：`Crime Hunt`、`Agent Signal`、`Glory Arena`。
- 术语 lint 目标文件为三语 `Crime Hunt` / `Glory Arena` 新页、三语 README、三语 INDEX。
