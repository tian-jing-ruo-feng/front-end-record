/*
 * @Author: 天净若风 oncwnuNuisPZMfdZzvnFdiAz60SE@git.weixin.qq.com
 * @Date: 2022-06-19 19:12:59
 * @LastEditors: tian-jing-ruo-feng 2236117954@qq.com
 * @LastEditTime: 2022-06-20 20:18:22
 * @FilePath: /leaning-doc/docs/.vuepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  title: "前端笔记",
  description: "记录前端",
  base: "/fonntEnd-record//docs/.vuepress/dist/",
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public",
      },
    },
  },
};
