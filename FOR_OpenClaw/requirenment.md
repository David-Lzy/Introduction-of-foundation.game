# Project Requirenment for OpenClaw

> Scope: `Introduction-of-foundation.game`
> 
> 本文档汇总 David 针对该项目提出的执行要求（按当前最新口径整理）。

## 1) 基础目标
- 持续维护《Foundation: Galactic Frontier》攻略文档项目。
- 每日自动采集全网对玩家有正面价值的信息，并沉淀到项目中。
- 坚持“质量优先”，不是链接收藏夹。
- **玩家可见目录只放实用干货**；流程说明、判定样例、内部记录等放到 `FOR_OpenClaw/`。

## 2) 采集与汇报（每日）
- 每天固定时间执行采集任务（当前：21:00，Australia/Adelaide）。
- 采集范围：
  - 官方渠道（官网、商店页、公告等）
  - 社区与讨论（如 Reddit 等公开来源）
  - 教程/攻略站、新闻站等
- 每日需要产出日报并发到 Discord 频道 `#foundation-game`（文件形式）。

## 3) 质量门控（硬性）
- 禁止只贴链接入库。
- 每条候选必须先打开并阅读正文（web_fetch/browser）。
- 仅当内容相较现有文档“更详细/更优/有实质新增”才允许写入。
- 低质量、重复、营销水文、纯搬运内容直接丢弃。
- 报告中要说明：为什么入库、为什么丢弃。
- 候选入库前必须执行标准化“入库打分卡”（见 `FOR_OpenClaw/pipeline/ingestion-scorecard.yml`）。
- 对于确认有价值的外部来源，**必须把关键信息正文整理进文档（可执行步骤/要点）**，并在文末附“引用来源”；禁止只留“指针式”一句话。

## 4) 去重与增量规则
- 维护去重库：`FOR_OpenClaw/intel/seen-items.jsonl`。
- 与历史采集结果、历史文档做比对，只保留增量。
- 同一信息不重复入库；状态变化则更新原记录。

## 5) 文档组织与分类
- 项目整体视为教程体系（不是单独“教程区”逻辑）。
- 分类语义统一，但**每种语言用各自文字命名目录**：
  - SimplifiedChinese：`基础` / `发育` / `战斗` / `活动` / `兑换码` / `避坑` / `新闻`
  - TraditionalChinese：`基礎` / `發育` / `戰鬥` / `活動` / `兌換碼` / `避坑` / `新聞`
  - English：`basics` / `progression` / `combat` / `events` / `codes` / `pitfalls` / `news`
- 内容需自动判断归类，按内容本身而非来源站点归类。

## 6) 多语言要求（镜像）
- 语言目录：
  - `SimplifiedChinese/`
  - `TraditionalChinese/`
  - `English/`
- 三套目录应保持结构镜像（同路径、同主题文件）。
- 新增内容需三语同步。
- 定期执行镜像巡检、翻译补齐、分类纠偏。

## 7) 文件命名规范（最新）
- 不使用日期作为主文档文件名。
- 使用“序号 + 语义化标题”命名，例如：
  - `5.新手优先级总纲（官方10条）.md`
- 更新日期写在内容尾部（如：`更新日期：YYYY-MM-DD` / `Updated on: YYYY-MM-DD`）。

## 8) 短内容收纳规则
- 对于“单次更新不足以单独成文”但**仍对玩家有实用价值**的内容，写入：
  - `SimplifiedChinese/其他技巧.md`
  - `TraditionalChinese/其他技巧.md`
  - `English/other_tips.md`
- 条目模板：标题 / 摘要 / 来源 / 暂定归类 / 更新日期。
- 后续若信息积累充分，再迁移为独立分类文档。
- 若内容仅是流程判断、采集说明、入库判定样例等内部信息，放入 `FOR_OpenClaw/InternalNotes/`，不进入玩家目录。

## 9) 兑换码（优惠码）规则
- 扫到的兑换码要纳入项目，放各语言对应目录：
  - `SimplifiedChinese/兑换码/`
  - `TraditionalChinese/兌換碼/`
  - `English/codes/`
- 不得编造；需要来源可追溯。
- 记录字段：
  - `code`
  - `status`（active / expired / unverified）
  - `first_seen`
  - `last_checked`
  - `source_url`
  - `notes`
- 同一码去重；仅状态变化时更新。

## 10) Git 与可回退性
- 每轮自动化更新需纳入 git 版本控制。
- 保持可回退，避免模型质量波动导致不可逆污染。
- 能 push 时自动 push 到远程仓库。

## 10.1) 自动化改动门槛（防止“为了更新而更新”）
- 执行规则见：`FOR_OpenClaw/pipeline/change-threshold.yml`
- 当天新增不足阈值且无高价值增量时：
  - 只发日报；
  - 不改玩家文档。

## 10.2) 网页导航同步（VitePress）
- GitHub 上新增/删除玩家文档（文件或文件夹）后，网页内容会自动发布，但左侧目录需要同步更新。
- 要求：自动任务在更新文档后，必须同步更新 VitePress 侧边栏配置（或侧边栏生成结果），确保网页导航与仓库目录一致。
- 最低标准：三语侧边栏都能覆盖新增文档入口；不得出现“仓库已有内容但网页左栏缺失入口”。
- 侧边栏必须按“当前语言路径”显示对应目录，禁止三语混堆在同一侧栏。
- 侧边栏需保持树状结构：即使目录下只有 1 个文档，也要作为可折叠目录节点显示。
- 侧边栏节点命名不带尾斜杠 `/`，保持 UI 一致性。

## 10.3) 网页改动后的回归检查
- 每次涉及导航、链接、路由、侧边栏改动后，必须至少做一轮链接可用性检查（抽检或全量）。
- 检查目标：
  - 不 404
  - 不跳出站点壳
  - 不出现“点击无反应”
- 未通过回归检查时，不得宣告“已修复完成”。

## 11) 工具与运行偏好
- 允许使用本地模型能力（你提到可用 `qwen3-vl:8b-instruct` 进行翻译尝试）。
- 使用 `web_search` 时注意成本（$5/1000 次）并关注资源使用记录。
- 已有资源使用记录频道：`#📊-resource-usage`。
- 翻译相关进度与策略文件位于：`FOR_OpenClaw/Translate/`（内部目录）。
- 术语词典位于：`FOR_OpenClaw/Translate/glossary.yml`，自动任务写文/翻译时必须优先套用。
- 术语自检规则位于：`FOR_OpenClaw/Translate/glossary-lint.md`，每日任务结束前必须执行。
- 词典新增项需优先参考官网与官方渠道文案（官网、官方公告、Google Play、App Store）。
- 流程配置与质量规则位于：`FOR_OpenClaw/pipeline/`（scorecard、threshold、prompt 模板）。
- 文档网站技术栈固定为 VitePress；Docsify 方案已弃用，不再维护旧 Docsify 资产。
- GitHub Pages 发布方式固定为 workflow（`.github/workflows/deploy-pages-vitepress.yml`），不切回 legacy branch/folder 模式。
- 构建产物与依赖目录不得入库（如 `node_modules/`、`.vitepress/dist/`），由 CI 构建发布。

## 12) 输出风格要求
- 结果应是“可直接被玩家使用”的结构化内容。
- 少废话，重执行、重结论、重可操作步骤。
- 对外文档首页保持“三语分栏入口 + 学习路径入口”，并使用 VitePress 原生样式（不使用临时跳转 hack）。
- 入库正文最低建议包含：结论、步骤、适用场景、注意事项、引用来源。

---
Last updated: 2026-02-23
