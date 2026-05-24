# 2026-05-24 Daily Intel Pipeline Note

- 继续执行 visited gate：7 条例行监控源均已存在于 `FOR_OpenClaw/intel/visited-pages.jsonl`，且 `recheck-whitelist.txt` 仍为空，因此全部 `visited_skip`。
- 本轮从 `https://gamewith.jp/foundation-gf/` 攻略首页补抓 8 条此前未访问页面。
- `https://gamewith.jp/foundation-gf/558007`（皮肤）补了角色 / 旗舰换肤入口、传奇英雄升星得皮肤、旗舰昇格 / 活动得皮肤，但整体偏轻量外观系统，本轮按低增量 reject。
- `https://gamewith.jp/foundation-gf/547641`（商会）补了反攻作战 2-6 解锁、首次加入 1,000 点券、创建 2,000 点券、星港 12 小时、礼物 3 天 / 每日 500 个等细节，但现有商会文档已覆盖主要决策逻辑，本轮 reject。
- `https://gamewith.jp/foundation-gf/547373`（主线）主要是入口与奖励概览，和现有新手 / 资源 / PvE 文档重叠高，本轮 reject。
- `https://gamewith.jp/foundation-gf/550570`、`555571`、`549002`、`546990`、`548992` 抽取结果都只剩 boilerplate，命中 `contains only links without extracted content` 风险，直接 reject。
