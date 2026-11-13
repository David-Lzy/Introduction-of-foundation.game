# 2026-11-13 三语镜像巡检与分类纠偏记录

- 已复核 `pipeline/mirror-job-prompt.md`、`pipeline/ingestion-scorecard.yml`、`pipeline/change-threshold.yml`、`Translate/glossary.yml` 与 `Translate/glossary-lint.md`。
- 三语分类按对应本地化栏目核对，分类数量完全一致：PVP 5、兑换码 1、发育/Progression 10、基础/Basics 11、战斗/Combat 3、教程/Tutorials 1、新闻/News 36、活动/Events 14、避坑/Pitfalls 2。
- 258 个玩家向 Markdown 文件的三语分类镜像齐平；未发现缺失镜像、分类错放，或需要移入“其他技巧/other_tips”的孤立短内容。
- 今日新增兑换码条目已在三语兑换码文档中对应，源与状态见当日日报；本轮巡检无需再修改玩家文档。
- 按 `glossary-lint.md` 扫描三语玩家目录全部 Markdown：读取 29 个 banned 表达，命中 0；无需术语纠正或词典更新。

## 判定示例

若某条新内容只在一种语言出现，先核对同一栏目其余语言是否有对应条目；通过 scorecard 且满足 change-threshold 后才补镜像。若现有文件名和栏目映射均一致、数量齐平，且没有高价值孤立短内容，则仅记录巡检，不改玩家目录。
