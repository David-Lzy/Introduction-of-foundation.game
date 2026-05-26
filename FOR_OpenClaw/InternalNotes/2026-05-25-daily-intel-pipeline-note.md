# 2026-05-25 Daily Intel Pipeline Note

- 已按 `daily-job-prompt.md` 读取并执行 scorecard / threshold / glossary / glossary-lint 规则。
- 7 条例行监控源继续命中 visited gate，且 `recheck-whitelist.txt` 仅注释，因此全部 `visited_skip`。
- 本轮实际访问 7 条 GameWith 未访问页面：Robot Explosion、Rescue Ark、Supreme Prayer Ship、Calamity、Spending Items、Hero Acquisition、Pre-registration Rewards。
- 通过入库：
  - `https://gamewith.jp/foundation-gf/553271`：Calamity 级多人 Boss，补充多舰队同时输出、累计伤害档位、3/5 击杀周期奖励、每日通常战利品 5 次上限。
  - `https://gamewith.jp/foundation-gf/546987`：英雄获取，补充常规招募第 4 章解锁、远航的记忆来源、限时招募分池、通用碎片不能凭空解锁未拥有英雄、非招募英雄锚点。
- 丢弃：
  - Robot Explosion：已有信息数据页覆盖，新增只属执行细节，novelty 不达标。
  - Rescue Ark：与现有 Crime Hunt 页高度重叠，novelty 不达标。
  - Supreme Prayer Ship：现有 PvE 与旗舰培养页已覆盖 0 AP、次数和材料来源，novelty 不达标。
  - Spending Items：现有充值建议页已覆盖结构性结论，本页新增价格/道具明细不足以改变策略。
  - Pre-registration Rewards：抽取仅剩站点 boilerplate，命中 hard fail。
- Daily gate：通过候选 2 条，满足 `min_new_items_to_write=2`，因此写入三语玩家目录。
- 本轮无新兑换码，无额外兑换码快讯。
