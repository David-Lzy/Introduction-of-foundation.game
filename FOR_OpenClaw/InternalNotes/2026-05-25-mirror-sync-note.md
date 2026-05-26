# 2026-05-25 Mirror Sync Note

- 执行时间：2026-05-25 12:00 UTC（Australia/Adelaide 2026-05-25 21:30）
- 已读取并遵守：
  1. `FOR_OpenClaw/pipeline/mirror-job-prompt.md`
  2. `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`
  3. `FOR_OpenClaw/pipeline/change-threshold.yml`
  4. `FOR_OpenClaw/Translate/glossary.yml`
  5. `FOR_OpenClaw/Translate/glossary-lint.md`

## 镜像巡检
- 结合 `FOR_OpenClaw/intel/reports/2026-05-25.md`，本轮需复核的玩家向变更为两组：
  - 新增活动页：`Calamity` 三语页
  - 更新发育页：`英雄培养 / 英雄培養 / Hero Development`
- 已核对三语活动页与三语活动目录 README：`SimplifiedChinese/活动`、`TraditionalChinese/活動`、`English/events` 均已存在对应正文与目录入口。
- 已核对三语英雄培养页：`SimplifiedChinese/发育/5.英雄培养.md`、`TraditionalChinese/發育/5.英雄培養.md`、`English/progression/5.Hero Development.md` 内容对位，无镜像缺失。
- 本轮发现 1 处镜像入口缺口：三语 `INDEX.md` 的“活动 / 活動 / Events”区块均缺少 `Calamity` 新页入口；现已同步补齐。

## 分类纠偏
- `Calamity` 继续归类在 `活动 / 活動 / events`，未混入 `基础 / 基礎 / basics` 或 `其他技巧 / other_tips`。
- 英雄获取与碎片规则增量继续留在 `发育 / 發育 / progression` 的英雄培养页，未拆去活动或避坑栏目。
- 玩家目录本轮只保留可执行结论；评分卡、visited gate、丢弃理由与流程判定继续仅留在 `FOR_OpenClaw/InternalNotes` 和 intel report。

## 术语一致性 / Lint
- 复核本轮新增/改动玩家向文件时，重点确认了 glossary 约束术语：`Foundation: Galactic Frontier`、`Commerce Guild / 商会 / 商會`、`Flagship / 旗舰 / 旗艦`、`Mothership / 母舰 / 母艦`、`Credits / 点券 / 點券`、`Cocoon`。
- 结果：未发现禁用词残留，也未发现三语术语漂移。
- 本轮无需补录 glossary 新词条。

## 本轮改动
- 补齐三语 INDEX 入口：
  - `SimplifiedChinese/INDEX.md`
  - `TraditionalChinese/INDEX.md`
  - `English/INDEX.md`
- 新增内部说明：
  - `FOR_OpenClaw/InternalNotes/2026-05-25-mirror-sync-note.md`

## 结论
- 本轮镜像缺失已清零。
- 本轮无额外玩家正文迁移、删除或分类重排需求。
- 后续若继续新增活动页，记得同步补 `活动 / 活動 / Events` 的顶层 INDEX 入口，避免三语目录入口再次脱节。
