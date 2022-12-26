"use strict";
exports.__esModule = true;
var config_1 = require("vuepress/config");
var dayjs_1 = require("dayjs");
var baiduCode_1 = require("./config/baiduCode"); // 百度统计hm码
var htmlModules_1 = require("./config/htmlModules"); // 自定义插入的html块
var DOMAIN_NAME = ""; // 域名 (不带https)
var WEB_SITE = "https://" + DOMAIN_NAME; // 网址
exports["default"] = config_1.defineConfig4CustomTheme({
  theme: "vdoing",
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包
  locales: {
    "/": {
      lang: "zh-CN",
      title: "栗哈哈",
      description:
        "技术博客,学习与总结。Java,算法,计算机基础,JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章",
    },
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文章",
        link: "/web/",
      },
      { text: "关于", link: "/about/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
    sidebarDepth: 2,
    logo: "/img/avatar.jpg",
    repo: "SweetPomelo0",
    searchMaxSuggestions: 10,
    lastUpdated: "上次更新",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "编辑",
    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//
    category: false,
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    // pageStyle: "line", // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框
    bodyBgImg: [
      // 'https://w.wallhaven.cc/full/jx/wallhaven-jx5r6w.jpg',
      "/img/bg1.jpg",
    ],
    bodyBgImgOpacity: 0.5,
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状
    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true
    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: "structuring",
    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: "栗哈哈",
      link: "https://github.com/SweetPomelo0",
    },
    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: "/img/avatar.jpg",
      name: "栗哈哈",
      slogan: "你可以成为任何你想成为的人",
    },
    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: "icon-youjian",
          title: "发邮件",
          link: "mailto:cuteerha@gmail.com",
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/SweetPomelo0",
        },
        {
          iconClass: "icon-erji",
          title: "听音乐",
          link: "https://music.163.com/playlist?id=7831443638&userid=270671239",
        },
      ],
    },
    // 页脚信息
    footer: {
      createYear: 2022,
      copyrightInfo:
        '栗哈哈 | <a href="https://github.com/SweetPomelo0" target="_blank">MIT License</a>',
    },
    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: "栗哈哈",
        link: "https://github.com/SweetPomelo0",
      },
    },
    // 自定义hmtl(广告)模块
    htmlModules: htmlModules_1["default"],
  },
  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "后端博客,个人技术博客,前端,前端开发,后端框架,web前端,面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,Java,Spring,git,github,markdown",
      },
    ],
    ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }],
    ["meta", { name: "theme-color", content: "#11a8cd" }],
  ],
  // 插件配置
  plugins: [
    [
      "sitemap",
      {
        hostname: WEB_SITE,
      },
    ],
    "vuepress-plugin-baidu-autopush",
    [
      "vuepress-plugin-baidu-tongji",
      {
        hm: baiduCode_1["default"],
      },
    ],
    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',
    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            title: "在MDN中搜索",
            frontUrl: "https://developer.mozilla.org/zh-CN/search?q=",
            behindUrl: "",
          },
          {
            title: "在Runoob中搜索",
            frontUrl: "https://www.runoob.com/?s=",
          },
          {
            title: "在Vue API中搜索",
            frontUrl: "https://cn.vuejs.org/v2/api/#",
          },
          {
            title: "在Bing中搜索",
            frontUrl: "https://cn.bing.com/search?q=",
          },
          {
            title: "通过百度搜索本站的",
            frontUrl:
              "https://www.baidu.com/s?wd=site%3A" + DOMAIN_NAME + "%20",
          },
        ],
      },
    ],
    [
      "one-click-copy",
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: "复制成功",
        duration: 1000,
        showInMobile: false,
      },
    ],
    [
      "demo-block",
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false,
          codepen: true,
          horizontal: false,
        },
      },
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
    [
      "vuepress-plugin-comment",
      {
        choosen: "gitalk",
        options: {
          clientID: "a6e1355287947096b88b",
          clientSecret: "f0e77d070fabfcd5af95bebb82b2d574d7248d71",
          repo: "blog-gitalk-comment",
          owner: "xugaoyi",
          admin: ["xugaoyi"],
          // distractionFreeMode: true,
          pagerDirection: "last",
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>",
          title: "「评论」<%- frontmatter.title %>",
          labels: ["Gitalk", "Comment"],
          body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>",
        },
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: function (timestamp, lang) {
          return dayjs_1["default"](timestamp).format("YYYY/MM/DD, HH:mm:ss");
        },
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.ts", ".vuepress/config/htmlModules.ts"],
});
