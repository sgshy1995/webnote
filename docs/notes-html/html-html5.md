---
title: HTML5 相关
---

## 新特性

- 拖拽释放(Drag and drop) API
- 语义化更好的内容标签（header,nav,footer,aside,article,section）
- 音频、视频 API(audio,video)
- 画布(Canvas) API
- 地理(Geolocation) API
- 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失
- sessionStorage 的数据在浏览器关闭后自动删除
- 表单控件，calendar、date、time、email、url、search
- 新的技术 webworker, websocket, Geolocation

## 移除的元素

- 纯表现的元素：basefont，big，center，font, s，strike，tt，u
- 对可用性产生负面影响的元素：frame，frameset，noframes

## 支持 HTML5 新标签

- IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签， 可以利用这一特性让这些浏览器支持 HTML5 新标签， 浏览器支持新标签后，还需要添加标签默认的样式
- 当然最好的方式是直接使用成熟的框架、使用最多的是 html5shim 框架

```html
<!--[if lt IE 9]>
  <script>
    src = "http://html5shim.googlecode.com/svn/trunk/html5.js";
  </script>
<![endif]-->
```