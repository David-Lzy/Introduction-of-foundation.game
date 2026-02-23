import { defineConfig } from 'vitepress'

const sidebarSC = [
  {
    text: '简体中文',
    collapsed: false,
    items: [
      { text: 'readme.md', link: '/SimplifiedChinese/readme' },
      { text: 'INDEX.md', link: '/SimplifiedChinese/INDEX' },
      {
        text: '基础/',
        collapsed: true,
        items: [
          { text: '0.说明.md', link: '/SimplifiedChinese/基础/0.说明' },
          { text: '1.基础资源获取.md', link: '/SimplifiedChinese/基础/1.基础资源获取' },
          { text: '2.商运.md', link: '/SimplifiedChinese/基础/2.商运' },
          { text: '3.其他基础来源和元光体.md', link: '/SimplifiedChinese/基础/3.其他基础来源和元光体' },
          { text: '4.主动资源获取与PvE.md', link: '/SimplifiedChinese/基础/4.主动资源获取与PvE' },
          { text: '5.新手优先级总纲（官方10条）.md', link: '/SimplifiedChinese/基础/5.新手优先级总纲（官方10条）' }
        ]
      },
      {
        text: '发育/',
        collapsed: true,
        items: [
          { text: '0.说明.md', link: '/SimplifiedChinese/发育/0.说明' },
          { text: '1.商会入门.md', link: '/SimplifiedChinese/发育/1.商会入门' },
          { text: '2.商会管理说明.md', link: '/SimplifiedChinese/发育/2.商会管理说明' },
          { text: '3.建筑与核心升级策略.md', link: '/SimplifiedChinese/发育/3.建筑与核心升级策略' },
          { text: '4.旗舰培养.md', link: '/SimplifiedChinese/发育/4.旗舰培养' },
          { text: '5.英雄培养.md', link: '/SimplifiedChinese/发育/5.英雄培养' },
          { text: '6.主线与开荒.md', link: '/SimplifiedChinese/发育/6.主线与开荒' }
        ]
      },
      {
        text: '战斗/',
        collapsed: true,
        items: [
          { text: '0.VS商会对决策略.md', link: '/SimplifiedChinese/战斗/0.VS商会对决策略' }
        ]
      },
      {
        text: '活动/',
        collapsed: true,
        items: [
          { text: '0.VS商会对决策略.md', link: '/SimplifiedChinese/活动/0.VS商会对决策略' }
        ]
      },
      {
        text: '兑换码/',
        collapsed: true,
        items: [
          { text: 'README.md', link: '/SimplifiedChinese/兑换码/README' }
        ]
      },
      {
        text: '避坑/',
        collapsed: true,
        items: [
          { text: '0.日常充值建议与性价比分析.md', link: '/SimplifiedChinese/避坑/0.日常充值建议与性价比分析' }
        ]
      },
      {
        text: '新闻/',
        collapsed: true,
        items: [
          { text: 'README.md', link: '/SimplifiedChinese/新闻/README' }
        ]
      },
      {
        text: '教程/',
        collapsed: true,
        items: [
          { text: 'README.md', link: '/SimplifiedChinese/教程/README' }
        ]
      },
      {
        text: '根目录/',
        collapsed: true,
        items: [
          { text: '其他技巧.md', link: '/SimplifiedChinese/其他技巧' }
        ]
      }
    ]
  }
]

const sidebarTC = [
  {
    text: '繁體中文',
    collapsed: false,
    items: [
      { text: 'readme.md', link: '/TraditionalChinese/readme' },
      { text: 'INDEX.md', link: '/TraditionalChinese/INDEX' },
      {
        text: '基礎/',
        collapsed: true,
        items: [
          { text: '0.說明.md', link: '/TraditionalChinese/基礎/0.說明' },
          { text: '1.基礎資源獲取.md', link: '/TraditionalChinese/基礎/1.基礎資源獲取' },
          { text: '2.商運.md', link: '/TraditionalChinese/基礎/2.商運' },
          { text: '3.其他基礎來源和元光體.md', link: '/TraditionalChinese/基礎/3.其他基礎來源和元光體' },
          { text: '4.主動資源獲取與PvE.md', link: '/TraditionalChinese/基礎/4.主動資源獲取與PvE' },
          { text: '5.新手優先級總綱（官方10條）.md', link: '/TraditionalChinese/基礎/5.新手優先級總綱（官方10條）' }
        ]
      },
      {
        text: '發育/',
        collapsed: true,
        items: [
          { text: '0.說明.md', link: '/TraditionalChinese/發育/0.說明' },
          { text: '1.商會入門.md', link: '/TraditionalChinese/發育/1.商會入門' },
          { text: '2.商會管理說明.md', link: '/TraditionalChinese/發育/2.商會管理說明' },
          { text: '3.建築與核心升級策略.md', link: '/TraditionalChinese/發育/3.建築與核心升級策略' },
          { text: '4.旗艦培養.md', link: '/TraditionalChinese/發育/4.旗艦培養' },
          { text: '5.英雄培養.md', link: '/TraditionalChinese/發育/5.英雄培養' },
          { text: '6.主線與開荒.md', link: '/TraditionalChinese/發育/6.主線與開荒' }
        ]
      },
      {
        text: '戰鬥/',
        collapsed: true,
        items: [
          { text: '0.VS商會對決策略.md', link: '/TraditionalChinese/戰鬥/0.VS商會對決策略' }
        ]
      },
      {
        text: '活動/',
        collapsed: true,
        items: [
          { text: '0.VS商會對決策略.md', link: '/TraditionalChinese/活動/0.VS商會對決策略' }
        ]
      },
      {
        text: '兌換碼/',
        collapsed: true,
        items: [
          { text: 'README.md', link: '/TraditionalChinese/兌換碼/README' }
        ]
      },
      {
        text: '避坑/',
        collapsed: true,
        items: [
          { text: '0.日常充值建議與性價比分析.md', link: '/TraditionalChinese/避坑/0.日常充值建議與性價比分析' }
        ]
      },
      {
        text: '新聞/',
        collapsed: true,
        items: [
          { text: 'README.md', link: '/TraditionalChinese/新聞/README' }
        ]
      },
      {
        text: '教程/',
        collapsed: true,
        items: [
          { text: 'README.md', link: '/TraditionalChinese/教程/README' }
        ]
      },
      {
        text: '根目錄/',
        collapsed: true,
        items: [
          { text: '其他技巧.md', link: '/TraditionalChinese/其他技巧' }
        ]
      }
    ]
  }
]

const sidebarEN = [
  {
    text: 'English',
    collapsed: false,
    items: [
      { text: 'readme.md', link: '/English/readme' },
      { text: 'INDEX.md', link: '/English/INDEX' },
      {
        text: 'basics/',
        collapsed: true,
        items: [
          { text: '0.Overview.md', link: '/English/basics/0.Overview' },
          { text: '1.Basic Resource Acquisition.md', link: '/English/basics/1.Basic Resource Acquisition' },
          { text: '2.Trading Operations.md', link: '/English/basics/2.Trading Operations' },
          { text: '3.Other Basic Sources and Luminite.md', link: '/English/basics/3.Other Basic Sources and Luminite' },
          { text: '4.Active Resource Farming and PvE.md', link: '/English/basics/4.Active Resource Farming and PvE' },
          { text: '5.Beginner Priority Framework - Official 10 Tips.md', link: '/English/basics/5.Beginner Priority Framework - Official 10 Tips' }
        ]
      },
      {
        text: 'progression/',
        collapsed: true,
        items: [
          { text: '0.Overview.md', link: '/English/progression/0.Overview' },
          { text: '1.Guild Introduction.md', link: '/English/progression/1.Guild Introduction' },
          { text: '2.Guild Management Notes.md', link: '/English/progression/2.Guild Management Notes' },
          { text: '3.Building and Core Upgrade Strategy.md', link: '/English/progression/3.Building and Core Upgrade Strategy' },
          { text: '4.Flagship Development.md', link: '/English/progression/4.Flagship Development' },
          { text: '5.Hero Development.md', link: '/English/progression/5.Hero Development' },
          { text: '6.Mainline Push and Expansion.md', link: '/English/progression/6.Mainline Push and Expansion' }
        ]
      },
      {
        text: 'combat/',
        collapsed: true,
        items: [
          { text: '0.VS Guild Duel Strategy.md', link: '/English/combat/0.VS Guild Duel Strategy' }
        ]
      },
      {
        text: 'events/',
        collapsed: true,
        items: [
          { text: '0.VS Guild Duel Strategy.md', link: '/English/events/0.VS Guild Duel Strategy' }
        ]
      },
      {
        text: 'codes/',
        collapsed: true,
        items: [
          { text: 'README.md', link: '/English/codes/README' }
        ]
      },
      {
        text: 'pitfalls/',
        collapsed: true,
        items: [
          { text: '0.Daily Spending Advice and Value Analysis.md', link: '/English/pitfalls/0.Daily Spending Advice and Value Analysis' }
        ]
      },
      {
        text: 'news/',
        collapsed: true,
        items: [
          { text: 'README.md', link: '/English/news/README' }
        ]
      },
      {
        text: 'tutorials/',
        collapsed: true,
        items: [
          { text: 'README.md', link: '/English/tutorials/README' }
        ]
      },
      {
        text: 'root/',
        collapsed: true,
        items: [
          { text: 'other_tips.md', link: '/English/other_tips' }
        ]
      }
    ]
  }
]

export default defineConfig({
  title: 'Foundation Guide',
  description: 'Foundation: Galactic Frontier multi-language guide',
  base: '/Introduction-of-foundation.game/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
    '/TraditionalChinese/': { label: '繁體中文', lang: 'zh-TW' },
    '/English/': { label: 'English', lang: 'en-US' }
  },
  themeConfig: {
    nav: [
      { text: '简体中文', link: '/SimplifiedChinese/readme' },
      { text: '繁體中文', link: '/TraditionalChinese/readme' },
      { text: 'English', link: '/English/readme' },
      { text: 'GitHub', link: 'https://github.com/David-Lzy/Introduction-of-foundation.game' }
    ],
    sidebar: {
      '/SimplifiedChinese/': sidebarSC,
      '/TraditionalChinese/': sidebarTC,
      '/English/': sidebarEN
    },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/David-Lzy/Introduction-of-foundation.game' }
    ]
  }
})
