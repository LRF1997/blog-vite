# VitePeess搭建文档网站

## 使用说明

### 初始化目录以及 index.md

```sh
npm init
npm i vitepress --save
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

:::tip 提示
如果 `mkdir docs && echo '# Hello VitePress' > docs/index.md` 没有效果，可以自己手动创建docs目录和index.md文件

:::

### 目录结构

```md
── docs
│   ├── .vitepress (可选的)
│   │   ├── theme (可选的)
│   │   │   ├── custom.styl
│   │   │   └── index.js
│   │   ├── public (可选的)
│   │   ├── config.js (可选的)
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

- `docs/.vitepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vitepress/theme`: 用于存放本地主题。
- `docs/.vitepress/theme/index.js`: 将自定义css样式抛出。
- `docs/.vitepress/theme/custom.styl`: 用于定义自定义css样式。
- `docs/.vitepress/public`: 静态资源目录。
- `docs/.vitepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。

### 添加这些脚本到 `package.json`

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}

```

### **使用插件**

安装下官方的插件，为 `vitePress` 添加更多的功能。

```json
module.exports = {
    ...
    // 使用插件
    plugins: [
        '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
        '@vuepress/back-to-top',          // 返回顶部插件
        '@vuepress/medium-zoom',          // 图片预览插件
        '@vuepress/nprogress',        //页面顶部进度条
    ],
}
```

更多插件可以浏览[此处](https://link.zhihu.com/?target=https%3A//vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html)

### 本地启动服务

```
npm run docs:dev
```

### 修改 index.md，并重新启动看看效果

```md
layout: home
hero:
  name: LRF-博客🎉
  text:
  tagline: 菜鸟程序猿笔记
  actions:
    - theme: brand
      text: 开始
      link: /TypeScript/base/getting-started
    - theme: alt
      text: 访问Gitee
      link: https://gitee.com/
```

### 编写自己的文档，并配置 `.vitepress/config.js` 文件

```javascript
module.exports = {
  title: 'LRF-博客',
  description: '记录前端开发中遇到的问题,分享TypeScript,Vue3及开发工具知识',
  lastUpdated: true,
  appearance: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present LRF'
    },
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    // lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: nav(), 
    sidebar: {
      '/TypeScript': sidebarBackEnd(),
      '/vue': sidebarDatabase(),
    },
  },
}

function nav() {
  return [
    {
      text: '框架',
      items: [
        { text: 'Vue3', link: '/vue', activeMatch: '/vue' },
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'TS基础', link: '/TypeScript/base/README.md', activeMatch: '/TypeScript' },
        { text: 'TS进阶', link: '/TypeScript/Advanced/', activeMatch: '/TypeScript' },
      ]
    },
    {
      text: '搭建博客',
      link: '/createBlog/vitePress手册'
    },
    {
      text: 'Gitee',
      link: 'https://gitee.com'
    }
  ]
}


function sidebarBackEnd() {
  return [
    {
      text: 'TypeScript基础',
      collapsible: true,
      items: [
        { text: '快速开始', link: '/TypeScript/base/getting-started' },

      ]
    },
    {
      text: 'TypeScript进阶',
      collapsible: true,
      items: [
        { text: 'Class类', link: '/TypeScript/Advanced' },
      ]
    }
  ]
}


function sidebarDatabase() {
  return [
    {
      text: 'Vue',
      items: [
        { text: '快速开始', link: '/vue' },
      ]
    }
  ]
}
```

::: tip 提示

修改了config.js 需要重启

:::

`task-lists` 支持

- 有时候会有以下场景，需要使用任务列表，当前并不支持任务列表。

```md
- [x] 支持 #标签 ，[链接](https://blog.qyun.fun)，**样式**
- [x] 要求包含列表标志（有序表无序表均可，比如 `1.[x]` 同样可以）
- [x] 这是一个已经完成的项目
- [?] 这也是一个已完成的项目（实际上你可以在其中使用任何字符）
- [ ] 这是一个未完成的项目
- [ ] 在预览模式下单击选框可以切换项目完成状态
```

- 可以使用 `markdown-it-task-lists` 插件，用以支持任务列表，使之正常显示。

```js{4-5}
// 首先需要安装 markdown-it-task-lists ,在项目根目录下执行： npm i markdown-it-task-lists
// 然后配置 markdown-it 插件
 markdown: {
    lineNumbers: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-task-lists'))
    }
  },
```

- 正常显示效果如下：

- [ ] 零点前睡觉
- [ ] 六点起床 
- [x] 写一篇博客
- [ ] 锻炼30分钟
- [ ] 练字20分钟

比正常的任务列表多了一个黑点，有点难受😞😞😞。

### **样式修改**

先安装插件**「也可以直接用 css」**，我这里是直接复制的一份网友的样式

```
.vitepress` 文件夹下新建 `custom.styl` 文件以及 `index.js

├── docs
│   ├── .vitepress (可选的)
│   │   ├── theme (可选的)
│   │   │   ├── custom.styl
│   │   │   └── index.js
```

在 `index.js` 中写入以下内容：

```text
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

## 参考

- [vitepress](https://vitepress.vuejs.org)

> 使用文档以英文官网的为准，中文翻译的文档很多不是最新，有很多坑。

