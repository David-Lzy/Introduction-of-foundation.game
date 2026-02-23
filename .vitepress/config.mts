import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Foundation Guide',
  description: 'Foundation: Galactic Frontier multi-language guide',
  base: '/Introduction-of-foundation.game/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '简体中文', link: '/SimplifiedChinese/readme' },
      { text: '繁體中文', link: '/TraditionalChinese/readme' },
      { text: 'English', link: '/English/readme' }
    ],
    sidebar: [
      {
        text: '简体中文',
        collapsed: false,
        items: [
          { text: 'Readme', link: '/SimplifiedChinese/readme' },
          { text: 'INDEX', link: '/SimplifiedChinese/INDEX' },
          {
            text: '基础',
            items: [
              { text: '0.说明', link: '/SimplifiedChinese/基础/0.说明' },
              { text: '1.基础资源获取', link: '/SimplifiedChinese/基础/1.基础资源获取' },
              { text: '2.商运', link: '/SimplifiedChinese/基础/2.商运' },
              { text: '3.其他基础来源和元光体', link: '/SimplifiedChinese/基础/3.其他基础来源和元光体' },
              { text: '4.主动资源获取与PvE', link: '/SimplifiedChinese/基础/4.主动资源获取与PvE' },
              { text: '5.新手优先级总纲（官方10条）', link: '/SimplifiedChinese/基础/5.新手优先级总纲（官方10条）' }
            ]
          },
          {
            text: '发育',
            items: [
              { text: '0.说明', link: '/SimplifiedChinese/发育/0.说明' },
              { text: '1.商会入门', link: '/SimplifiedChinese/发育/1.商会入门' },
              { text: '2.商会管理说明', link: '/SimplifiedChinese/发育/2.商会管理说明' },
              { text: '3.建筑与核心升级策略', link: '/SimplifiedChinese/发育/3.建筑与核心升级策略' },
              { text: '4.旗舰培养', link: '/SimplifiedChinese/发育/4.旗舰培养' },
              { text: '5.英雄培养', link: '/SimplifiedChinese/发育/5.英雄培养' },
              { text: '6.主线与开荒', link: '/SimplifiedChinese/发育/6.主线与开荒' }
            ]
          },
          { text: '战斗 / VS', link: '/SimplifiedChinese/战斗/0.VS商会对决策略' },
          { text: '活动 / VS', link: '/SimplifiedChinese/活动/0.VS商会对决策略' },
          { text: '兑换码', link: '/SimplifiedChinese/兑换码/README' },
          { text: '避坑', link: '/SimplifiedChinese/避坑/0.日常充值建议与性价比分析' },
          { text: '新闻', link: '/SimplifiedChinese/新闻/README' },
          { text: '教程', link: '/SimplifiedChinese/教程/README' },
          { text: '其他技巧', link: '/SimplifiedChinese/其他技巧' }
        ]
      },
      {
        text: '繁體中文',
        collapsed: false,
        items: [
          { text: 'Readme', link: '/TraditionalChinese/readme' },
          { text: 'INDEX', link: '/TraditionalChinese/INDEX' },
          {
            text: '基礎',
            items: [
              { text: '0.說明', link: '/TraditionalChinese/基礎/0.說明' },
              { text: '1.基礎資源獲取', link: '/TraditionalChinese/基礎/1.基礎資源獲取' },
              { text: '2.商運', link: '/TraditionalChinese/基礎/2.商運' },
              { text: '3.其他基礎來源和元光體', link: '/TraditionalChinese/基礎/3.其他基礎來源和元光體' },
              { text: '4.主動資源獲取與PvE', link: '/TraditionalChinese/基礎/4.主動資源獲取與PvE' },
              { text: '5.新手優先級總綱（官方10條）', link: '/TraditionalChinese/基礎/5.新手優先級總綱（官方10條）' }
            ]
          },
          {
            text: '發育',
            items: [
              { text: '0.說明', link: '/TraditionalChinese/發育/0.說明' },
              { text: '1.商會入門', link: '/TraditionalChinese/發育/1.商會入門' },
              { text: '2.商會管理說明', link: '/TraditionalChinese/發育/2.商會管理說明' },
              { text: '3.建築與核心升級策略', link: '/TraditionalChinese/發育/3.建築與核心升級策略' },
              { text: '4.旗艦培養', link: '/TraditionalChinese/發育/4.旗艦培養' },
              { text: '5.英雄培養', link: '/TraditionalChinese/發育/5.英雄培養' },
              { text: '6.主線與開荒', link: '/TraditionalChinese/發育/6.主線與開荒' }
            ]
          },
          { text: '戰鬥 / VS', link: '/TraditionalChinese/戰鬥/0.VS商會對決策略' },
          { text: '活動 / VS', link: '/TraditionalChinese/活動/0.VS商會對決策略' },
          { text: '兌換碼', link: '/TraditionalChinese/兌換碼/README' },
          { text: '避坑', link: '/TraditionalChinese/避坑/0.日常充值建議與性價比分析' },
          { text: '新聞', link: '/TraditionalChinese/新聞/README' },
          { text: '教程', link: '/TraditionalChinese/教程/README' },
          { text: '其他技巧', link: '/TraditionalChinese/其他技巧' }
        ]
      },
      {
        text: 'English',
        collapsed: false,
        items: [
          { text: 'Readme', link: '/English/readme' },
          { text: 'INDEX', link: '/English/INDEX' },
          {
            text: 'Basics',
            items: [
              { text: '0.Overview', link: '/English/basics/0.Overview' },
              { text: '1.Basic Resource Acquisition', link: '/English/basics/1.Basic Resource Acquisition' },
              { text: '2.Trading Operations', link: '/English/basics/2.Trading Operations' },
              { text: '3.Other Basic Sources and Luminite', link: '/English/basics/3.Other Basic Sources and Luminite' },
              { text: '4.Active Resource Farming and PvE', link: '/English/basics/4.Active Resource Farming and PvE' },
              { text: '5.Beginner Priority Framework - Official 10 Tips', link: '/English/basics/5.Beginner Priority Framework - Official 10 Tips' }
            ]
          },
          {
            text: 'Progression',
            items: [
              { text: '0.Overview', link: '/English/progression/0.Overview' },
              { text: '1.Guild Introduction', link: '/English/progression/1.Guild Introduction' },
              { text: '2.Guild Management Notes', link: '/English/progression/2.Guild Management Notes' },
              { text: '3.Building and Core Upgrade Strategy', link: '/English/progression/3.Building and Core Upgrade Strategy' },
              { text: '4.Flagship Development', link: '/English/progression/4.Flagship Development' },
              { text: '5.Hero Development', link: '/English/progression/5.Hero Development' },
              { text: '6.Mainline Push and Expansion', link: '/English/progression/6.Mainline Push and Expansion' }
            ]
          },
          { text: 'Combat / VS', link: '/English/combat/0.VS Guild Duel Strategy' },
          { text: 'Events / VS', link: '/English/events/0.VS Guild Duel Strategy' },
          { text: 'Codes', link: '/English/codes/README' },
          { text: 'Pitfalls', link: '/English/pitfalls/0.Daily Spending Advice and Value Analysis' },
          { text: 'News', link: '/English/news/README' },
          { text: 'Tutorials', link: '/English/tutorials/README' },
          { text: 'Other Tips', link: '/English/other_tips' }
        ]
      }
    ],
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/David-Lzy/Introduction-of-foundation.game' }
    ]
  }
})
