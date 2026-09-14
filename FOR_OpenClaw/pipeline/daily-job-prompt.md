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

候选处理流程（内容哈希增量检测）：
1) 先查页面缓存（FOR_OpenClaw/intel/page-cache.json），再对每个候选 URL 做**轻量内容探测**；`visited-pages.jsonl` 仅保留首次发现/审计记录，绝不可再作为“已访问即跳过”的门槛。
   - 缓存项存在 `etag` 或 `last_modified` 时，优先使用条件请求（`If-None-Match` / `If-Modified-Since`）。收到 `304 Not Modified` 即为 `cache_hit`，不得下载、阅读或评分正文。
   - 无可用验证器时，获取可读正文并按同一规范化规则（去掉抓取时间、cookie 横幅、随机 nonce、导航/广告等不属于文章主体的噪声）计算 UTF-8 `SHA-256`。哈希等于缓存 `fingerprint` 时记为 `cache_hit`：立刻停止，不做语义阅读、评分、历史比对或玩家文档改动。
   - 首次遇到 URL 记为 `cache_miss`；哈希不同或条件请求返回新的正文记为 `cache_changed`。只有这两种状态才读取正文并继续后续流程。
   - 探测失败、403、验证码页或无法得到稳定正文时记为 `probe_error`；保存状态和探测时间，但不得以旧缓存或搜索摘要推断发生变化。
2) 对 `cache_miss` / `cache_changed` 的正文做去重比对（FOR_OpenClaw/intel/seen-items.jsonl + 历史文档）。
3) 按 scorecard 四维打分（credibility/actionability/novelty/freshness）。
4) 通过 ingestion gate 才可进入“可写候选”。
5) 应用 daily gate：
   - 若当日通过候选 < N 且无高价值增量：只发日报，不改玩家文档

目录与分类：
- SimplifiedChinese：基础/发育/战斗/活动/兑换码/避坑/新闻
- TraditionalChinese：基礎/發育/戰鬥/活動/兌換碼/避坑/新聞
- English：basics/progression/combat/events/codes/pitfalls/news

兑换码特例规则：
- 兑换码候选不因“不可官方验证”而 reject。
- 无法验证时统一收录为 `status=unverified`。
- notes 必须包含：`Third-party source, may be invalid or expired.`
- 同一码去重；状态变化时更新原记录。
- **新兑换码 Discord 通知**：当发现新兑换码时，必须分别发送到对应语言的兑换码频道；不得混发到更新日志频道。
  - 简体中文频道：Discord `1488881399258812516`（兑换码｜passcode－cn），只发送中文。
  - English channel: Discord `1497944825239048494` (passcode－en), English only.
  - 通知必须包含兑换码、有效期、奖励、来源链接和状态；未验证码必须显示风险提示。
  - 仅在新码首次发现时发送一次；后续仅状态变化才补发，并以 `seen-items.jsonl` 与频道近期消息交叉去重。

输出：
- FOR_OpenClaw/intel/reports/YYYY-MM-DD.md
  - 必含每个候选的打分卡记录与通过/丢弃原因
- 标注探测结果（cache_hit/cache_miss/cache_changed/probe_error）及每个命中/变化 URL 的哈希判定；不得再以 `visited_skip` 作为内容去重结论。
- 更新 FOR_OpenClaw/intel/page-cache.json：每项至少保存 `fingerprint`（规范化正文的 SHA-256）、`fingerprint_algorithm: sha256`、`last_checked`、`status`；可用时也保存 `etag` / `last_modified`。仅内容变化时刷新 `last_fetched`、标题和正文摘要。
- 更新 FOR_OpenClaw/intel/visited-pages.jsonl：仅首次发现 URL 时新增；不要为未变化页面追加重复记录。
- 仅在阈值满足时写入玩家目录（三语镜像）
- 任务结束前执行术语 lint（禁用词残留=0）

发送：
- 将日报发到 Discord 频道 1475011423414259937
- **新增情报更新日志（严格静默门控）**：仅当本次运行发现并通过门控的、此前未收录的玩家可用情报，且已实际写入玩家目录时，才发布更新日志；没有合格新增、只有复查/缓存命中/格式或镜像修订时，绝不发送更新日志。
  - 简体中文频道：Discord `1487801078547349585`（更新日誌｜update-logs－cn）。只发送中文。
  - English channel: Discord `1497944824915951658` (update-logs－en). Send English only.
  - 两条消息内容应对应同一批新增：简短标题、可执行要点、适用条件或时效、来源链接；不贴内部评分卡、流水账或无关的日报。
  - 不补发历史内容；同一条情报不得重复发布。发送前以 `seen-items.jsonl`、当日入库记录和频道近期消息交叉去重。
- 当发现“新兑换码”（first_seen 新增）时，分别发布到兑换码｜passcode－cn（`1488881399258812516`）与 passcode－en（`1497944825239048494`）。
  - 两条消息须分别使用中文和英文，包含：`code`、`status`、`first_seen`、`source_url`、`notes`。
  - 若 `status=unverified`，两种语言都必须包含风险提示。
  - 同一码仅首次发现时发送，后续仅状态变化再补发。
- 完成后回复 NO_REPLY
