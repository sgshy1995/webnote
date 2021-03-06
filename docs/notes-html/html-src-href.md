---
title: HTML 中 src 与 href
---

## 简述一下 src 与 href 的区别

src 用于引用资源，替换当前元素；href 用于在当前文档和引用资源之前确定联系。

## 解析

- href
href 标识超文本引用，用在 link 和 a 等元素上，href 是引用和页面关联。
若在文档中添加 href，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对该文档的处理。这也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式。

- src
src 表示引用资源，替换当前元素，用在 img，script，iframe 上，src 是页面内容不可缺少的一部分。
当浏览器解析到 src，会暂停其他资源的下载和处理（图片除外），直到将该资源加载、编译、执行完毕；图片和框架等也如此，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因。