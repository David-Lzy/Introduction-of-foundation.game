# 2026-02-26 Daily Intel Pipeline Note

本条仅记录流程，不写入玩家目录。

## 今日执行步骤
1. 读取并遵守：
   - `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
   - `FOR_OpenClaw/pipeline/change-threshold.yml`
   - `FOR_OpenClaw/Translate/glossary.yml`
   - `FOR_OpenClaw/Translate/glossary-lint.md`
2. 先读取 `FOR_OpenClaw/intel/page-cache.json`（当前为空），本轮候选均为 `cache_miss`。
3. 读取候选正文（foundation 官网 news 索引、Google Play、App Store、Steam 商店页、Steam 社区页、Facebook 官方主页）。
4. 去重基线：`FOR_OpenClaw/intel/seen-items.jsonl` + 历史日报。
5. 逐条四维打分并应用 ingestion gate（`min_total_score:14` + `min_novelty_score:3`）。
6. 应用 daily gate（`min_new_items_to_write:2`，低于阈值且无高价值增量则不改玩家文档）。
7. 术语 lint：本次无玩家向文档改动，禁用词残留 0。

## 结论
- 今日无通过 ingestion gate 的新增高价值候选。
- 未满足写入门槛，执行“只发日报，不改玩家文档”。
