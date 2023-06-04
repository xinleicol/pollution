import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: 'https://xinleicol.github.io/' },
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        
      },
      {
        text: '研究课题',
        collapsed: false,
        items: [
          { text: '摄影测量特征点匹配', link: '/older/2021-03-02-Photogrammetry-python' },
          { text: '论文开题大纲', link: '/older/2021-05-11-paper-proposals' },
          { text: '22年读书笔记', link: '/older/2023-01-10-read-notes' },
        ],
        
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  base: "/papers/",
  outDir: '../public/papers'
})
