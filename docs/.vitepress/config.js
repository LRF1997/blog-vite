module.exports = {
  title: 'LRF-博客',
  description: '记录前端开发中遇到的问题,分享TypeScript,Vue3及开发工具知识',
  lastUpdated: true,
  appearance: true,
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-task-lists'))
    }
  },
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present LRF'
    },
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
        { text: 'Vue3', link: '/vue//config/环境变量.md', activeMatch: '/vue/' },
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'TS基础', link: '/TypeScript/base/README.md', activeMatch: '/TypeScript/' },
        { text: 'TS进阶', link: '/TypeScript/Advanced/class', activeMatch: '/TypeScript/' },
      ]
    },
    {
      text: '搭建博客',
      link: '/createBlog/vitePress手册'
    },
    {
      text: 'Markdown',
      items: [
        { text: 'Markdown-语法', link: '/Markdown/Markdown-语法', activeMatch: '/Markdown/' },
        { text: 'Markdown-中文文案排版规范', link: '/Markdown/Markdown-中文文案排版规范', activeMatch: '/Markdown/' },
      ]
    },
    {
      text: '部署文档到gitee',
      link: '/gitee/部署手册'
    },
    {
      text: 'Emoji',
      items: [
        { text: 'Emoji-表情', link: '/Markdown/Emoji-表情列表', activeMatch: '/Markdown/' },
        { text: 'Github-Emoji', link: '/Markdown/Github-Emoji', activeMatch: '/Markdown/' },
      ]
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
        { text: '原始数据类型', link: '/TypeScript/base/primitive-data-types' },
        { text: '任意值', link: '/TypeScript/base/any' },
        { text: '类型推论', link: '/TypeScript/base/type-inference' },
        { text: '联合类型', link: '/TypeScript/base/union-types' },
        { text: '对象的类型——接口', link: '/TypeScript/base/type-of-object-interfaces' },
        { text: '数组的类型', link: '/TypeScript/base/type-of-array' },
        { text: '函数的类型', link: '/TypeScript/base/type-of-function' },
        { text: '类型断言', link: '/TypeScript/base/type-assertion' },
        { text: '声明文件', link: '/TypeScript/base/declaration-files' },
        { text: '内置对象', link: '/TypeScript/base/built-in-objects' },

      ]
    },
    {
      text: 'TypeScript进阶',
      collapsible: true,
      items: [
        { text: '类型别名', link: '/TypeScript/Advanced/type-aliases' },
        { text: '字符串字面量类型', link: '/TypeScript/Advanced/string-literal-types' },
        { text: '元组', link: '/TypeScript/Advanced/tuple' },
        { text: '枚举', link: '/TypeScript/Advanced/enum' },
        { text: '类', link: '/TypeScript/Advanced/class' },
        { text: '类与接口', link: '/TypeScript/Advanced/class-and-interfaces' },
        { text: '泛型', link: '/TypeScript/Advanced/generics' },
        { text: '声明合并', link: '/TypeScript/Advanced/declaration-merging' },
        { text: '扩展阅读', link: '/TypeScript/Advanced/further-reading' },
        { text: '其他', link: '/TypeScript/Advanced/other' },
      ]
    }
  ]
}


function sidebarDatabase() {
  return [
    {
      text: 'Api',
      items: [
        { text: 'ref', link: '/vue/api/ref.md' },
      ]
    },
    {
      text: '配置',
      items: [
        { text: '环境变量', link: '/vue/config/环境变量.md' },
      ]
    }
  ]
}