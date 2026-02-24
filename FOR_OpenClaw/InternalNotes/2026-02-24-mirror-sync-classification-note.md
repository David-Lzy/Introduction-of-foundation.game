# 2026-02-24 Mirror Sync + 分类纠偏判定样例

## 本次输入
- 三语玩家目录：`SimplifiedChinese / TraditionalChinese / English`
- 目标：补齐镜像缺失、纠正分类漂移、保持术语一致

## 判定流程（执行版）
1. **镜像检查**：先比对三语同层级文件清单，定位“索引已引用但实体缺失”的条目。
2. **分类检查**：判断条目是“战斗策略”还是“活动公告/节奏”。
3. **纠偏动作**：将 VS 对决策略从 `events/活动/活動` 迁移至 `combat/战斗/戰鬥`。
4. **目录补齐**：为 `events/活动/活動` 补 `README.md`，保留目录语义，不塞流程性废话。
5. **索引修复**：同步修改三语 `INDEX.md`，把主入口与快速跳转指向新分类。
6. **术语 lint**：按 `glossary.yml` 禁用词清单对本次改动文件做扫描，禁用词残留必须为 0。

## 判定样例（为什么要迁移 VS）
- 条目：`VS Guild Duel Strategy / VS 商会对决策略`
- 内容特征：
  - 包含 6 天计分节奏、资源释放窗口、PvP 对抗日、商会协同执行
  - 以战斗与资源调度打法为核心
- 结论：
  - **主分类应为 combat/战斗/戰鬥**（战斗策略）
  - events 目录仅保留活动入口说明（README）

## 本次改动范围（玩家向）
- 新增：
  - `English/combat/0.VS Guild Duel Strategy.md`
  - `SimplifiedChinese/战斗/0.VS商会对决策略.md`
  - `TraditionalChinese/戰鬥/0.VS商會對決策略.md`
  - `English/events/README.md`
  - `SimplifiedChinese/活动/README.md`
  - `TraditionalChinese/活動/README.md`
- 删除：
  - `English/events/0.VS Guild Duel Strategy.md`
  - `SimplifiedChinese/活动/0.VS商会对决策略.md`
  - `TraditionalChinese/活動/0.VS商會對決策略.md`
- 更新：
  - `English/INDEX.md`
  - `SimplifiedChinese/INDEX.md`
  - `TraditionalChinese/INDEX.md`

## 术语一致性结果
- 检查基准：`FOR_OpenClaw/Translate/glossary.yml` + `glossary-lint.md`
- 结果：**0 条禁用词残留**
- 备注：已自动规避术语漂移（未引入 banned 词形）。
