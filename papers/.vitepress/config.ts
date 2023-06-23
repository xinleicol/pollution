import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ceily的博客",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主站', link: 'https://xinleicol.github.io/' },
      { text: 'Home', link: '/' },
      { text: '文章', link: '/older/2021-03-02-Photogrammetry-python' }
    ],

    sidebar: [
      {
        text: '研究课题',
        collapsed: false,
        items: [
          { text: '摄影测量特征点匹配', link: '/older/2021-03-02-Photogrammetry-python' },
          { text: '论文开题大纲', link: '/older/2021-05-11-paper-proposals' },
          { text: '22年读书笔记', link: '/older/2023-01-10-read-notes' },
        ],
        
      } ,
      {
        text: 'Unity',
        collapsed: false,
        items: [
          { text: '渲染顺序', link: '/2023/2023-06-23-unity-render-order' },
        ],
        
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  base: "/papers/",
  outDir: '../public/papers'
})
