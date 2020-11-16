---
title: npm包管理器
date: 2020-04-16
categories:
 - FrontEnd
tags:
 - Node
---

## 1.什么是NPM
- [官网](https://www.npmjs.com/)
- NPM⼀个远程包仓库，拥有成百上千万优质包（以及劣质包）
- ⼀个本地命令⾏⼯具，可以在本地下载、上传、运⾏远程包

## 2.NPM 命令
1. `npm init -y`用来初始化生成一个新的`package.json`文件。
2. `npm login`命令行登陆NPM
3. `npm install`下载包
    ```sh
    npm install <packageName> //本地安装，安装到项目目录下，不在package.json中写入依赖
    npm install <packageName> -g //全局安装，安装在Node安装目录下的node_modules下
    npm install <packageName> --save //安装到项目目录下，并在package.json文件的dependencies中写入依赖，简写为-S
    npm install <packageName> --save-dev //安装到项目目录下，并在package.json文件的devDependencies中写入依赖，简写为-D
    ```
4. `npm uninstall` 卸载包，参数与下载参数一致
5. `npm publish` 发布包