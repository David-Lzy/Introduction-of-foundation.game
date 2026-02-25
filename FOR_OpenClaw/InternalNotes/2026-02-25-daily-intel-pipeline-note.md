# 2026-02-25 Daily Intel Pipeline Note

本条仅记录流程，不写入玩家目录。

## 今日执行步骤
1. 读取并遵守：
   - `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
   - `FOR_OpenClaw/pipeline/change-threshold.yml`
   - `FOR_OpenClaw/Translate/glossary.yml`
   - `FOR_OpenClaw/Translate/glossary-lint.md`
2. 采集候选并读取正文：官方新闻页、Google Play、App Store、FunPlus官网、APKPure。
3. 去重基线：`FOR_OpenClaw/intel/seen-items.jsonl` + 历史日报。
4. 逐条四维打分并应用 ingestion gate。
5. 应用 daily gate，决定是否写入玩家目录。
6. 术语 lint：本次无玩家向改动，禁用词残留 0。

## 结论
- 当日无满足新颖度阈值（novelty >= 3）的通过候选。
- 未满足写入门槛，执行“只发日报，不改玩家文档”。
