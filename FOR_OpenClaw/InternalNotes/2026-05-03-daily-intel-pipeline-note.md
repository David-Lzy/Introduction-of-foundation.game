# 2026-05-03 Daily Intel Pipeline Note

## 执行范围
- 按 `FOR_OpenClaw/pipeline/daily-job-prompt.md` 执行。
- 已读取并遵守：
  - `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  - `FOR_OpenClaw/pipeline/change-threshold.yml`
  - `FOR_OpenClaw/Translate/glossary.yml`
  - `FOR_OpenClaw/Translate/glossary-lint.md`

## 今日抓取与判定
1. 先检查 `visited-pages.jsonl` 与 `recheck-whitelist.txt`。
   - 例行 6 个监控 URL 全部命中已访问规则。
   - `recheck-whitelist.txt` 仍为空（仅注释），因此全部 `visited_skip`。
2. 扩展直连抓取未记录的 App Store 区域页：
   - `https://apps.apple.com/gb/app/foundation-galactic-frontier/id6737595599`
   - `https://apps.apple.com/pl/app/foundation-galactic-frontier/id6737595599`
   - `https://apps.apple.com/us/app/foundation-galactic-frontier/id6737595599?eventid=6756863515`
3. GB / PL 页面均能抽出官方版本历史；PL 作为区域重复验证，不单独形成候选。
4. 正式评分使用 GB 页面中的版本历史条目：
   - 1.1.36（2026-04-29）
   - 1.1.21（2026-04-16）
   - 1.1.11（2026-04-01）
5. 1.1.36、1.1.21、1.1.11 均通过 ingestion gate，且满足 high_value_rule。
6. 疑似活动 URL `eventid=6756863515` 只返回通用营销标题，无可执行正文，评分后丢弃。

## 写入策略
- 本轮通过候选数 3，达到 `min_new_items_to_write: 2`。
- 同时存在官方来源支撑的 factual correction：
  - Champion Weapon 从旧的“90 天”改为 Week 12 Monday。
  - Dominion Warzone 文档原本仍写 1001–1010，需补充已扩展到 1001–1080 的版本历史。
- 因此写入玩家目录。
- 流程说明仅保留在本 InternalNotes 与日报；玩家目录只写可执行要点和来源。

## 本轮更新
- 新增三语新闻：`2026-05-03.md`
- 更新三语新闻 README 索引
- 更新三语 `Champion-Weapon-System.md`
- 更新三语 `Dominion-Warzone.md`
- 更新 `page-cache.json`
- 追加 `visited-pages.jsonl`
- 追加 `seen-items.jsonl`

## 术语处理
- 未新增 glossary 条目。
- 对未覆盖官方术语保留英文，不自造译名。
- 为避免术语漂移，简中 / 繁中新闻中 Shadowfront 节点恢复对象保留为 `Flagship`，不在此处误写为其他舰种译法。

## 术语检查
- 本次新增 / 修改玩家文档共 12 个。
- glossary lint 结果：0 条禁用词残留。

## 结果摘要
- 例行监控源：6 条 `visited_skip`
- 新访问 URL：3 条
- 评分候选：4 条
- 通过候选：3 条
- 高价值候选：3 条
- 新兑换码：0
- 玩家文档改动：12 个文件
