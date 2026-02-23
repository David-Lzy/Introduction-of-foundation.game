任务：三语镜像巡检 + 翻译补齐 + 分类纠偏（质量门控）。

执行前必须读取：
1) FOR_OpenClaw/Translate/glossary.yml
2) FOR_OpenClaw/Translate/glossary-lint.md
3) FOR_OpenClaw/pipeline/ingestion-scorecard.yml
4) FOR_OpenClaw/pipeline/change-threshold.yml

要求：
- 三语目录镜像：SimplifiedChinese / TraditionalChinese / English
- 分类目录使用各自语言命名
- 玩家目录仅保留高价值干货
- 不足独立成文但有价值的短内容写入其他技巧/other_tips
- 流程说明与判定样例写入 FOR_OpenClaw/InternalNotes

执行：
- 修复镜像缺失
- 纠正分类
- 检查术语一致性（按 glossary）
- 运行 lint，确保禁用词残留=0

提交：
- git add -A
- 有改动则提交并 push

汇报：
- 发到 Discord 频道 1475011423414259937
- 完成后回复 NO_REPLY
