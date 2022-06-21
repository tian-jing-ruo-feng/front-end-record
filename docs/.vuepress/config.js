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
    text: 'JavaScript设计模式',
    items: [
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
  // {
  //   text: '基础强化',
  //   items: [
  //     {
  //       text: '环境搭建',
  //       items: [
  //         {
  //           text: 'Vue',
  //           link: '/basic/vue/'
  //         },
  //         {
  //           text: 'Node.js',
  //           link: '/basic/node/'
  //         },
  //         {
  //           text: '调试技巧',
  //           link: '/basic/debug/'
  //         },
  //         {
  //           text: 'Docker',
  //           link: '/basic/docker/'
  //         }
  //       ]
  //     },
  //     {
  //       text: '语言基础',
  //       items: [
  //         {
  //           text: 'TypeScript',
  //           link: '/basic/ts/'
  //         },
  //         {
  //           text: 'Dart',
  //           link: '/basic/dart/'
  //         }
  //       ]
  //     },
  //     {
  //       text: '数据库',
  //       items: [
  //         {
  //           text: 'NoSQL',
  //           link: '/basic/nosql/'
  //         },
  //         {
  //           text: 'mongoDB',
  //           link: '/basic/mongo/'
  //         },
  //         {
  //           text: 'Redis',
  //           link: '/basic/redis/'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: 'DevOps',
  //   items: [
  //     {
  //       text: '效率工具',
  //       items: [
  //         {
  //           text: 'Jenkins',
  //           link: '/devops/jenkins/'
  //         }
  //       ]
  //     },
  //     {
  //       text: '团队协同',
  //       items: [
  //         {
  //           text: 'gitlab',
  //           link: '/devops/gitlab/'
  //         },
  //         {
  //           text: 'showDoc',
  //           link: '/devops/showdoc/'
  //         },
  //         {
  //           text: 'DOClever',
  //           link: '/devops/doclever/'
  //         }
  //       ]
  //     },
  //     {
  //       text: '容器化',
  //       items: [
  //         {
  //           text: 'Docker进阶',
  //           link: '/devops/docker-advance/'
  //         },
  //         {
  //           text: 'Kubernetes',
  //           link: '/devops/k8s/'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: '全端项目',
  //   items: [
  //     {
  //       text: '社区项目',
  //       items: [
  //         {
  //           text: '社区PC',
  //           link: '/project/community-pc/'
  //         },
  //         {
  //           text: '管理后台',
  //           link: '/project/community-admin/'
  //         },
  //         {
  //           text: 'WebApp',
  //           link: '/project/community-webapp/'
  //         }
  //       ]
  //     },
  //     {
  //       text: '多平台+跨端',
  //       items: [
  //         {
  //           text: '微信小程序',
  //           link: '/project/community-miniapp/'
  //         },
  //         {
  //           text: 'Flutter 2.0',
  //           link: '/project/community-flutter/'
  //         },
  //         {
  //           text: 'Electron桌面端',
  //           link: '/project/community-electron/'
  //         }
  //       ]
  //     },
  //     {
  //       text: 'React世界',
  //       items: [
  //         {
  //           text: 'React',
  //           link: '/project/react/'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: '前端面试',
  //   items: [
  //     {
  //       text: '笔试',
  //       items: [
  //         {
  //           text: '分类笔试题',
  //           link: '/interview/types/'
  //         },
  //         {
  //           text: '笔记技巧',
  //           link: '/interview/techs/'
  //         }
  //       ]
  //     },
  //     {
  //       text: '面试技巧',
  //       items: [
  //         {
  //           text: '技术面',
  //           link: '/interview/basic/'
  //         },
  //         {
  //           text: '项目面',
  //           link: '/interview/projects/'
  //         },
  //         {
  //           text: 'BOSS面',
  //           link: '/interview/boss/'
  //         },
  //         {
  //           text: 'HR面',
  //           link: '/interview/hr/'
  //         }
  //       ]
  //     },
  //     {
  //       text: '简历',
  //       items: [
  //         {
  //           text: '写好简历',
  //           link: '/interview/writor/'
  //         },
  //         {
  //           text: '简历模板',
  //           link: '/interview/templates/'
  //         }
  //       ]
  //     },
  //     {
  //       text: '公司行业',
  //       items: [
  //         {
  //           text: '选择公司',
  //           link: '/interview/company/'
  //         },
  //         {
  //           text: '行业洞悉',
  //           link: '/interview/industry/'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: '课程',
  //   items: [
  //     {
  //       text: '大前端课程',
  //       link: 'https://class.imooc.com/sale/webfullstack'
  //     },
  //     {
  //       text: '快速了解新版Vue3.0 + Vite开发',
  //       link: 'https://www.imooc.com/learn/1245'
  //     },
  //     {
  //       text: '3小时速成 Vue2.x 核心技术',
  //       link: 'https://www.imooc.com/learn/1091'
  //     }
  //   ]
  // },
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
  // '/basic/': [
  //   {
  //     title: 'Node.js进阶',
  //     collapsable: false,
  //     children: genSidebarConfig('basic/node', siderBarOptions)
  //   },
  //   {
  //     title: 'TypeScript',
  //     collapsable: false,
  //     children: genSidebarConfig('basic/ts', siderBarOptions)
  //   }
  // ],
  // '/project/': [
  //   {
  //     title: '社区PC',
  //     collapsable: false,
  //     children: genSidebarConfig('project/community-pc', siderBarOptions)
  //   },
  //   {
  //     title: '社区管理后台',
  //     collapsable: false,
  //     children: genSidebarConfig('project/community-admin', siderBarOptions)
  //   },
  //   {
  //     title: '社区WebApp',
  //     collapsable: false,
  //     children: genSidebarConfig('project/community-webapp', siderBarOptions)
  //   },
  //   {
  //     title: '小程序',
  //     collapsable: false,
  //     children: genSidebarConfig('project/community-miniapp', siderBarOptions)
  //   },
  //   {
  //     title: 'Flutter 2.0',
  //     collapsable: false,
  //     children: genSidebarConfig('project/community-flutter', siderBarOptions)
  //   },
  //   {
  //     title: 'Electron桌面端',
  //     collapsable: false,
  //     children: genSidebarConfig('project/community-electron', siderBarOptions)
  //   },
  //   {
  //     title: 'React世界',
  //     collapsable: false,
  //     children: ['react/']
  //   }
  // ],
  // '/course/': [
  //   {
  //     title: '参与贡献',
  //     collapsable: false,
  //     children: genSidebarConfig('course/notes', siderBarOptions)
  //   },
  //   {
  //     title: '项目说明',
  //     collapsable: false,
  //     children: genSidebarConfig('course/vuepress', siderBarOptions)
  //   },
  //   {
  //     title: 'Pull Request教程',
  //     collapsable: false,
  //     children: genSidebarConfig('course/pull-request', siderBarOptions)
  //   }
  // ],
  '/about/': [
    {
      title: '关于我们',
      collapsable: false,
      // children: ['', '01-课程评价', '02-招募英才']
      children: genSidebarConfig('about', { ...siderBarOptions, hasSub: false })
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
  title: '天净若风 ⚒ 前端笔记',
  description: '天净若风的记录前端',
  base: '/fonntEnd-record/',
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
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
  ]
}
