---
title: 前端性能优化
---

总体来说有两个思路。

## 思路一：从日常的前端性能场景出发

性能瓶颈主要出现在三个场景：

1、在开发时每次修改代码要打包几分钟，太慢（开发构建阶段）

2、打开网站，几十秒才看到页面，太慢（资源加载和页面渲染阶段）

3、页面展现后，页面上的动画不流畅。滚动页面或者拖拽元素卡顿感严重，甚至页面会崩溃（操作体验阶段）

### 一、开发构建阶段

- 并发： 使用多进程打包

- 打包时利用缓存

- 打包量要小：缩小文件的搜索范围，减少编译依赖

### 二、资源加载阶段

核心思路为：传输量要小、距离要近、并行传输、资源复用、预先加载。

- 传输量要小

1、构建时压缩HTML，压缩合并CSS、JS，压缩图片

2、使用svg sprite或字体图标替代icon图

3、服务端开启gzip

4、构建时使用TreeShaking，减少不必要的代码引入

5、单页应用路由懒加载，减少首次加载的资源体积

6、图片懒加载，组件懒加载

- 距离要近

静态资源部署到CDN。

- 并行传输

使用 HTTP2.0

- 资源复用

1、服务端配置静态资源缓存（HTTP缓存策略 Cache-Control Keep-alive 304 ETag）

2、打包时分包复用

- 预先加载

浏览器在空闲的时间预加载 `<link rel="prefetch" href="url">`

### 三、页面渲染阶段

1、CSS在上，JS在下

2、加载CSS使用link，少用@import

3、不重要的外置引入的JS使用defer或者async属性异步加载

### 四、操作体验阶段

- 动画流畅

1、尽量用 `transition` 和 `animation` 来实现CSS动画,而不是用JS（运行在主线程对动画的流畅度有影响）。

2、动画尽量用 `transform` 和 `opacity`，无需重绘和回流，性能最好。

3、`translateZ/translate3d` 开启硬件加速。

4、JS动画使用 `requestAnimationFrame` 替代 `setInterval`。

- 滚动、移动、操作顺畅

1、DOM操作要少（虚拟长列表、DOM diff）。

2、高频操作使用防抖和节流。

- 密集型计算

密集型计算交给 `WebWorker` 并发处理。

![web_optimize](/images/web_optimize.jpg)

## 思路二：从生活角度聊前端性能

加入公司的项目尽可能的在短期时间内上线，在现有团队不加班的前提下如何实现？

1、压缩需求，迭代开发————压缩

2、多用旧轮子（ 代码、方案、架构），少造新轮子————缓存

3、增加人手————并发

和前端性能优化做对应：

1、压缩需求，迭代开发：静态资源压缩合并，Gzip，懒加载，打包时缩小文件搜索范围

2、多用旧轮子少造新轮子：资源请求时HTTP缓存，开发打包时配置使用缓存，打包时配置分包复用

3、增加人手：资源请求时使用HTTP2.0实现并发请求、开发打包时配置使用并发能力、WebWorker

## 六字箴言：压缩、缓存、并发