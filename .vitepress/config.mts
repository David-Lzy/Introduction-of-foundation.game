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
        items: [
          { text: 'Readme', link: '/SimplifiedChinese/readme' },
          { text: 'INDEX', link: '/SimplifiedChinese/INDEX' },
          { text: '基础', link: '/SimplifiedChinese/基础/0.说明' },
          { text: '发育', link: '/SimplifiedChinese/发育/0.说明' },
          { text: '战斗', link: '/SimplifiedChinese/战斗/0.VS商会对决策略' },
          { text: '活动', link: '/SimplifiedChinese/活动/0.VS商会对决策略' },
          { text: '兑换码', link: '/SimplifiedChinese/兑换码/README' },
          { text: '避坑', link: '/SimplifiedChinese/避坑/0.日常充值建议与性价比分析' },
          { text: '其他技巧', link: '/SimplifiedChinese/其他技巧' }
        ]
      },
      {
        text: '繁體中文',
        items: [
          { text: 'Readme', link: '/TraditionalChinese/readme' },
          { text: 'INDEX', link: '/TraditionalChinese/INDEX' },
          { text: '基礎', link: '/TraditionalChinese/基礎/0.說明' },
          { text: '發育', link: '/TraditionalChinese/發育/0.說明' },
          { text: '戰鬥', link: '/TraditionalChinese/戰鬥/0.VS商會對決策略' },
          { text: '活動', link: '/TraditionalChinese/活動/0.VS商會對決策略' },
          { text: '兌換碼', link: '/TraditionalChinese/兌換碼/README' },
          { text: '避坑', link: '/TraditionalChinese/避坑/0.日常充值建議與性價比分析' },
          { text: '其他技巧', link: '/TraditionalChinese/其他技巧' }
        ]
      },
      {
        text: 'English',
        items: [
          { text: 'Readme', link: '/English/readme' },
          { text: 'INDEX', link: '/English/INDEX' },
          { text: 'Basics', link: '/English/basics/0.Overview' },
          { text: 'Progression', link: '/English/progression/0.Overview' },
          { text: 'Combat', link: '/English/combat/0.VS Guild Duel Strategy' },
          { text: 'Events', link: '/English/events/0.VS Guild Duel Strategy' },
          { text: 'Codes', link: '/English/codes/README' },
          { text: 'Pitfalls', link: '/English/pitfalls/0.Daily Spending Advice and Value Analysis' },
          { text: 'Other Tips', link: '/English/other_tips' }
        ]
      },
      {
        text: 'Internal',
        items: [
          { text: 'Requirements', link: '/FOR_OpenClaw/requirenment' },
          { text: 'Pipeline', link: '/FOR_OpenClaw/pipeline/README' },
          { text: 'Translate', link: '/FOR_OpenClaw/Translate/README' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/David-Lzy/Introduction-of-foundation.game' }
    ]
  }
})
