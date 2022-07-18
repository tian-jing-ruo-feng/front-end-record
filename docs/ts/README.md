# TypeScript 简介

> JavaScript 的超集。  
> TypeScript 是 JavaScript 类型的超集，它可以编译成纯 JavaScript。  
> TypeScript 可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。

[TypeScript 官网](https://www.tslang.cn/index.html)

## 环境安装

```bash
# 安装typescript
npm install -g typescript

# 查看安装版本
tsc -v
```

## 快捷执行 ts 文件

:::tip
ts-node is a TypeScript execution engine and REPL for Node.js
:::

```bash
npm install -g ts-node@8.10.0
# 查看依赖包的版本列表
npm view ts-node versions
# 安装制定版本的依赖
npm install -g ts-node@8.10.0
```

:::warning
安装最新版本会出现无法识别 console 模块
:::
