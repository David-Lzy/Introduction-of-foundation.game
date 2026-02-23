# Glossary Lint Rule (Mini)

在每日任务结束前，执行一次术语自检：

## 规则
1. 新增/修改的玩家向文档中，不得出现 `FOR_OpenClaw/glossary.yml` 里定义的禁用词（banned）。
2. 若发现禁用词：
   - 立即替换为词典标准术语；
   - 在日报里记录“已自动纠正术语漂移”。
3. 若遇到词典未覆盖但高频出现的新术语：
   - 先查官方来源（官网/官方公告/Google Play/App Store）；
   - 再补入 `FOR_OpenClaw/glossary.yml`；
   - 记录在日报“词典更新”小节。

## 最低通过条件
- 本次新增/改动文件术语检查通过（0 条禁用词残留）。
