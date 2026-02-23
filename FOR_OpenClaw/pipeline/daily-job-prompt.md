任务：Foundation: Galactic Frontier 全网每日采集 + 去重 + 分类入库 + 三语同步。

执行前必须读取：
1) FOR_OpenClaw/Translate/glossary.yml
2) FOR_OpenClaw/Translate/glossary-lint.md
3) FOR_OpenClaw/pipeline/ingestion-scorecard.yml
4) FOR_OpenClaw/pipeline/change-threshold.yml

核心要求：
- 玩家目录（SimplifiedChinese/TraditionalChinese/English）只放可直接使用的干货。
- 内部说明放 FOR_OpenClaw/InternalNotes。
- 先逐条打分，再决定是否入库。
- 对通过入库的来源，必须把关键内容“整理进正文”（步骤/要点/结论），并在文末给出引用来源；禁止只放链接指针。

候选处理流程：
1) 读取正文（禁止只贴链接）
2) 去重比对（FOR_OpenClaw/intel/seen-items.jsonl + 历史文档）
3) 按 scorecard 四维打分（credibility/actionability/novelty/freshness）
4) 通过 ingestion gate 才可进入“可写候选”
5) 应用 daily gate：
   - 若当日通过候选 < N 且无高价值增量：只发日报，不改玩家文档

目录与分类：
- SimplifiedChinese：基础/发育/战斗/活动/兑换码/避坑/新闻
- TraditionalChinese：基礎/發育/戰鬥/活動/兌換碼/避坑/新聞
- English：basics/progression/combat/events/codes/pitfalls/news

输出：
- FOR_OpenClaw/intel/reports/YYYY-MM-DD.md
  - 必含每个候选的打分卡记录与通过/丢弃原因
- 仅在阈值满足时写入玩家目录（三语镜像）
- 任务结束前执行术语 lint（禁用词残留=0）

发送：
- 将日报发到 Discord 频道 1475011423414259937
- 完成后回复 NO_REPLY
