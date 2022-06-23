const { resolve, genSidebarConfig } = require('./utils/index')
const { description } = require('../../package')

const siderBarOptions = {
  hasSub: true,
  exclude: ['README.md', 'assets', '.DS_Store', 'docs', 'images']
}

const nav = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: 'AntV X6',
    link: '/antvx6/'
  },
  {
    text: 'TypeScript',
    link: '/ts/'
  },
  {
    text: 'JavaScript设计模式',
    items: [
      {
        text: '灵活的JavaScript',
        link: '/designmode/intro/'
      },
      {
        text: '创建型设计模式',
        items: [
          {
            text: '工厂模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '建造者模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '原型模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '单例模式',
            link: '/designmode/factory-mode'
          }
        ]
      },
      {
        text: '结构型设计模式',
        items: [
          {
            text: '外观模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '适配器模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '代理模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '装饰者模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '桥接模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '组合模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '享元模式',
            link: '/designmode/factory-mode'
          }
        ]
      },
      {
        text: '行为型设计模式',
        items: [
          {
            text: '模版方法模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '观察者模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '状态模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '策略模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '职责链模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '命令模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '访问者模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '中介者者模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '备忘录模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '迭代器模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '解释器模式',
            link: '/designmode/factory-mode'
          }
        ]
      },
      {
        text: '技巧型设计模式',
        items: [
          {
            text: '链模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '委托模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '数据访问',
            link: '/designmode/factory-mode'
          },
          {
            text: '节流模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '简单模版模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '惰性模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '参与者模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '等待者模式',
            link: '/designmode/factory-mode'
          }
        ]
      },
      {
        text: '架构型设计模式',
        items: [
          {
            text: '同步模块模式',
            link: '/designmode/factory-mode'
          },
          {
            text: '异步模块模式',
            link: '/designmode/factory-mode'
          },
          {
            text: 'Widget模式',
            link: '/designmode/factory-mode'
          },
          {
            text: 'MVC模式',
            link: '/designmode/factory-mode'
          },
          {
            text: 'MVP模式',
            link: '/designmode/factory-mode'
          },
          {
            text: 'MVVM模式',
            link: '/designmode/factory-mode'
          }
        ]
      }
    ]
  },
  {
    text: '关于',
    items: [
      {
        text: '简介',
        items: [
          {
            text: '专业阅读',
            link: ''
          },
          {
            text: '非专业阅读',
            link: ''
          }
        ]
      }
    ]
  }
]

const sidebar = {
  '/antvx6/': [
    {
      title: 'AntV-X6',
      collapsable: false,
      children: genSidebarConfig('antvx6', siderBarOptions)
    }
  ],
  '/ts/': [
    {
      title: 'TypeScript学习',
      collapsable: false,
      children: genSidebarConfig('ts', siderBarOptions)
    }
  ],
  '/basic/': [
    {
      title: 'Node.js进阶',
      collapsable: false,
      children: genSidebarConfig('basic/node', siderBarOptions)
    }
  ],
  '/': [
    {
      title: '首页',
      collapsable: false,
      children: ['']
    }
  ]
}

module.exports = {
  title: '天净若风 の 前端笔记',
  description: '天净若风的记录前端',
  base: process.env.NODE_ENV === 'development' ? '/' : '/front-end-record/',
  configureWebpack: {
    resolve: {
      alias: {
        '@public': resolve('./public')
      }
    }
  },
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: nav,
    sidebar: sidebar
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress'
    // '@snowdog/vuepress-plugin-pdf-export'
  ],
  markdown: {
    lineNumbers: true
  }
}
