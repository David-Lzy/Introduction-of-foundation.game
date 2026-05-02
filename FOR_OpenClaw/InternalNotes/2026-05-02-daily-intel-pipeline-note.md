# 2026-05-02 Daily Intel Pipeline Note

## 执行范围
- 按 `FOR_OpenClaw/pipeline/daily-job-prompt.md` 执行。
- 已读取并遵守：
  - `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  - `FOR_OpenClaw/pipeline/change-threshold.yml`
  - `FOR_OpenClaw/Translate/glossary.yml`
  - `FOR_OpenClaw/Translate/glossary-lint.md`

## 今日抓取与判定
1. 先检查 `visited-pages.jsonl` 与 `recheck-whitelist.txt`
   - 例行监控 6 个 URL 仍全部命中已访问规则。
   - `recheck-whitelist.txt` 仍为空（仅注释），因此例行源全部 `visited_skip`。
2. 为避免零候选空跑，仅扩展检索**未出现在 visited-pages.jsonl 的官方 App Store 活动页**。
3. 直连抓取 3 条活动页，发现 App Store 可稳定抽出 `meta description` / 活动页副标题：
   - `6756863237`: `Acquire and upgrade each Champion’s signature armament, unlock stunning weapon entries...`
   - `6760339469`: `The Mythic Crew Member Gail Dornick arrives!`
   - `6760339388`: `The Easter Celebration brings miracles scattered across the cosmos.`
4. 保守处理搜索摘要：
   - 本轮只把**直连正文/metadata 能确认的内容**用于正式评分结论。
   - 若搜索摘要提到更多系统名，但页面正文无法对应抽出，则不写入玩家文档。
5. 按 scorecard 逐条打分后，仅 `6756863237` 通过 ingestion gate；但 `novelty=3`，未满足 high-value 规则。
6. 应用 daily gate，最终仅发日报，不改玩家文档。

## 结果摘要
- 例行监控源：6 条 `visited_skip`
- 新抓官方候选：3 条
- 通过候选：1
- 高价值候选：0
- 新兑换码：0
- 玩家文档改动：0

## 术语处理
- 本轮遇到但未入库的缺词：`signature armament`、`weapon entries`
- 依 `glossary.yml` 规则，暂不自造中文标准译名；若后续有官方中文来源，再决定是否补词典。

## 缓存处理
- 已为 3 条 App Store 活动页写入 `page-cache.json`。
- 已为 3 条 App Store 活动页追加 `visited-pages.jsonl`。
- 已为 1 条通过 ingestion gate 的候选追加 `seen-items.jsonl`，避免后续重复判定。

## 术语检查
- 本次未修改玩家文档。
- glossary lint 结果：0 条禁用词残留。
