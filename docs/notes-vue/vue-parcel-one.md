---
title: "关于Parcel压缩HTML的自闭合标签问题"
---

## 一个问题

```js
<template>
    <button>
        <g-icon />
        <div>123</div>
    </button>
</template>
```

当在 template 模板中使用自闭合组件时，后面的所有标签都会消失不见。

这是 parcel 在打包压缩时的一个问题，你需要让 bundler 识别自闭合标签。

## 解决

在 package.json 中添加：

```json
"posthtml": {
    "recognizeSelfClosing": true
}
```