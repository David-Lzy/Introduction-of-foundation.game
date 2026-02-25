# 2026-02-25 三语镜像巡检 + 术语纠偏记录

## 执行前读取（硬性）
- `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
- `FOR_OpenClaw/pipeline/change-threshold.yml`
- `FOR_OpenClaw/Translate/glossary.yml`
- `FOR_OpenClaw/Translate/glossary-lint.md`

## 本次目标
- 三语目录镜像巡检（SimplifiedChinese / TraditionalChinese / English）
- 分类纠偏检查
- 术语一致性检查与自动修正（禁止术语漂移）

## 执行结果

### 1) 镜像与分类
- 逐分类计数对齐检查：`basics/progression/combat/events/news/codes/tutorials/pitfalls`
- 结果：**三语分类条目数量一致，无镜像缺失**。
- 本次无需移动条目，分类保持正确。

### 2) 术语 lint（按 glossary banned 清单）
在简中玩家文档中发现并纠正以下术语漂移：
- `公会` → `商会`
- `公会币` → `商会券`
- `信用点` → `点券`
- `银河百科`（非标准简称）→ `银河百科全书`

已修正文档（SimplifiedChinese）：
- `readme.md`
- `避坑/0.日常充值建议与性价比分析.md`
- `发育/1.商会入门.md`
- `发育/2.商会管理说明.md`
- `发育/3.建筑与核心升级策略.md`
- `发育/4.旗舰培养.md`
- `基础/1.基础资源获取.md`
- `基础/2.商运.md`
- `基础/4.主动资源获取与PvE.md`
- `基础/5.新手优先级总纲（官方10条）.md`

### 3) 质量门控说明
- 本次属于“镜像巡检 + 术语纠偏”维护动作，不新增低价值玩家内容。
- 流程与判定样例仅落在 `FOR_OpenClaw/InternalNotes`，玩家目录仅保留可直接使用的内容。

## 结论
- 三语镜像：通过
- 分类纠偏：通过（无新增偏移）
- 术语一致性：已自动纠正漂移项，禁用词残留按本次修订范围清零
