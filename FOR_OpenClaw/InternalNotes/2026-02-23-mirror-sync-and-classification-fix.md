# 2026-02-23 Mirror Sync & Classification Fix (VS)

## Scope
- Task type: trilingual mirror completion + classification correction.
- Target area: VS strategy doc across Simplified Chinese / Traditional Chinese / English.

## Decisions
1. **Classification correction**
   - `VS` content is primarily a weekly event-operation strategy.
   - Canonical location kept under `events/活动`.
   - Removed duplicated copies under `combat/战斗` to avoid redundant player-facing content.

2. **Mirror consistency**
   - Ensured 3-language event docs are present and content-aligned.
   - Traditional Chinese version was rewritten from mixed-script/inconsistent wording to proper Traditional Chinese.

3. **Terminology guard (glossary enforced)**
   - Replaced generic `Guild` usage with **Commerce Guild** where game-system semantics apply.
   - Chinese: unified to **商会 / 商會** (removed drift forms like 公会/工会).
   - Standardized terms in modified docs:
     - Galactic Coin / 银河币 / 銀河幣
     - Champion / 英雄
     - Echo Module / 回响模组 / 迴響模組
     - Deep Space Echo / 深空回响 / 深空迴響
     - Prismatic Core / 棱镜核心 / 稜鏡核心

## Glossary lint result (modified player-facing files)
- Banned-term residuals: **0**

## Files changed
- `.vitepress/config.mts` (remove combat duplicate sidebar entries)
- `English/events/0.VS Guild Duel Strategy.md`
- `SimplifiedChinese/活动/0.VS商会对决策略.md`
- `TraditionalChinese/活動/0.VS商會對決策略.md`
- Deleted duplicate docs:
  - `English/combat/0.VS Guild Duel Strategy.md`
  - `SimplifiedChinese/战斗/0.VS商会对决策略.md`
  - `TraditionalChinese/戰鬥/0.VS商會對決策略.md`
