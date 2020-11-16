---
title: node.js 入门
date: 2020-04-15
categories:
 - FrontEnd
tags:
 - Node
---

## 1.Node.js是什么
Node.js是基于Chrome V8引擎的JavaScript运⾏环境
- [Node.js官网](https://nodejs.org/en/)
- 用处
    - 开发网站后台
    - 开发本地工具、应用
- 特点
    - 事件驱动、非阻塞型 I/O模型
    - 强大的生态 NPM

## 2.安装
- 官网下载：[https://nodejs.org/en/](https://nodejs.org/en/)
- homebrew安装：`brew install node`

## 3.Node.js 使用范例

### 使用内置模块
使用`fs`内置模块对文件进行操作
```js
const fs = require('fs')
fs.readFile('./a.md', 'utf-8', (err, text) => {
  if(err) {
    console.log(err)
    return
  }
  text = text.toUpperCase()
  fs.writeFile('./b.md', text, err => {
     if(err) {
       console.log(err)
       return
     }
     console.log('写入完成')
  })
})
```

### 使用本地模块
使用本地定义好的模块`util`对数字累加
```js
//util.js
function sum() {
  return [...arguments].reduce((v1, v2) => v1 + v2)
}
module.exports.sum = sum
```

```js
//example.js
const util = require('./util')
console.log(util.sum(1, 2, 3, 5, 9))
```

### 使用第三方模块
```bash
npm install markdown-it
```

```js
// example.js
const MarkdownIt = require('markdown-it')
const fs = require('fs')
let md = new MarkdownIt()
fs.readFile('./a.md', 'utf-8', (err, text) => {
  if(err) throw err
  let html = md.render(text)
  fs.writeFile('./a,html', html, err => {
    if(err) throw err
    console.log('操作完成')
  })
})
```

## 4.CommonJS规范
- ⼀个⽂件是⼀个模块
    - 变量、函数、类都是私有的
- 每个模块内部，`module`代表当前模块
    - `module.exports`是对外的接⼝。加载某个模块，其实是加载该模块的`module.exports`
    - 注意`module.exports`与直接使⽤`exports`的差异
- `require`⽅法⽤于加载模块
    - 注意加载的模块路径写法差异