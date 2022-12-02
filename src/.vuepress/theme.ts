import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  // 当前我那个站部署到的域名
  hostname: "https://mister-hope.github.io",
// 文章显示的默认作者
  author: {
    name: "TwoKe",
    url: "https://gitee.com/twoke",
  },
  // 官方提供的图标库
  iconAssets: "iconfont",
  // 网站图标
  logo: "/logo.jpg",
  // 导航上的个人仓库地址
  repo: "https://gitee.com/twoke/blog",

  // 导航栏布局
  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Repo", "Outlook", "Search"],
  },

  pageInfo: ["Original", "Date", "Category", "Tag", "ReadingTime"],
  // 路径导航
  breadcrumb: true,

  // 路径导航的图标显示
  breadcrumbIcon: true,

  // 用户可以自定义的多主题色
  themeColor: {
    yellow: "#FEC201",
    pink: "#EF699F",
    purple: "#684CCE",
    orange: "#FF8C3D",
  },
   // 全屏按钮
  fullscreen: true,
  // 返回顶部按钮-下滑300px后显示
  backToTop: true,
  // 纯净模式-禁用
  pure: false,

  // 文章的最后更新时间
  lastUpdated: true,

  // 显示页面的贡献者
  contributors: false,

  // 文章所在仓库
  docsRepo: "https://gitee.com/twoke/blog",
  docsBranch: 'master',
  docsDir: "src",

  blog: {
    medias: {
      Email: "mailto:twoke845@163.com",
      Gitee: "https://gitee.com/twoke",
      GitHub: "https://github.com/TwoKe945",
      Gmail: "mailto:twoke945@gmail.com",
    },
    avatar: '/logo.jpg',
    name: 'TwoKe',
    roundAvatar: true,
    description: "你是无意穿堂风 偏偏孤倨引山洪",
    intro: "/intro.html",
    // 博客的侧边栏设置
    sidebarDisplay: "mobile",
    // 每页展示的文章数量
    articlePerPage: 7,
    timeline: "Twokeの时光轴🍃",
  },

  locales: {
    "/": {
      // 导航栏
      navbar: zhNavbar,
      // 侧边栏
      sidebar: zhSidebar,
      footer: "TwoKeの博客",
      // 显示页脚
      displayFooter: true,
      // page meta
      metaLocales: {
        editLink: "在 Gitee 上编辑此页",
      },
    }
  },

  encrypt: {
    config: {},
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      provider: "Giscus",
      repo: "TwoKe945/giscus-discussions",
      repoId: "R_kgDOIi8cCQ",
      category: "Announcements",
      categoryId: "DIC_kwDOIi8cCc4CS4II"
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
