# Foundation: Galactic Frontier 每日情报任务流程说明

## 任务触发
- 任务ID: 362d4dfc-a5db-4ddf-87ff-84d5c03ff03f
- 执行日期: 2026-03-10
- 执行时间: 9:00 PM (Australia/Adelaide)

## 硬性要求
1) 读取并遵守配置文件：
   - `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
   - `FOR_OpenClaw/pipeline/change-threshold.yml`
   - `FOR_OpenClaw/Translate/glossary.yml`
   - `FOR_OpenClaw/Translate/glossary-lint.md`

2) 候选处理流程：
   - 先查已访问页面库（FOR_OpenClaw/intel/visited-pages.jsonl）
   - 再查页面缓存（FOR_OpenClaw/intel/page-cache.json）
   - 读取正文（禁止只贴链接）
   - 去重比对（FOR_OpenClaw/intel/seen-items.jsonl + 历史文档）
   - 按 scorecard 四维打分（credibility/actionability/novelty/freshness）
   - 通过 ingestion gate 才可进入"可写候选"

3) Daily Gate：
   - 若当日通过候选 < 2 且无高价值增量：只发日报，不改玩家文档
   - 高价值规则：`(credibility >= 4 and novelty >= 4) or (actionability == 5 and novelty >= 3)`

4) 输出：
   - 日报写入 `FOR_OpenClaw/intel/reports/YYYY-MM-DD.md`
   - 发送到 Discord 频道 1475011423414259937
   - 更新 page-cache.json 和 visited-pages.jsonl
   - 仅在阈值满足时写入玩家目录（三语镜像）
   - 任务结束前执行术语 lint

## 执行结果
- 今日（2026-03-10）全网扫描未发现新内容
- 所有主要来源最新更新时间均为2天前或更早
- 候选打分均低于入库阈值（max_score: 9）
- 未通过 daily gate，仅发日报，不修改玩家文档
- 日报已发送到 Discord 频道 1475011423414259937
- 术语检查通过（无禁用词残留）
