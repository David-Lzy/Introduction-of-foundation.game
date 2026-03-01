# 2026-03-01 Daily Intel Pipeline Note

- 按固定候选源执行：官网新闻索引、Google Play、App Store、Steam、官网首页、第三方兑换码聚合页。
- 先做 visited-pages 检查（今日无 visited_skip），再做 page-cache 指纹比对。
- 逐条读取正文并按 scorecard 打分，未达到 ingestion + daily gate，故不写玩家目录。
- 本次仅产出日报并刷新缓存/访问记录。
