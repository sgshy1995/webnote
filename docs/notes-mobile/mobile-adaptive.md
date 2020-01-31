---
title: 如何做移动适配
---

## 移动端适配

移动端是怎么做适配的？

回答要点：

- meta viewport
- 媒体查询
- 动态 rem 方案

### meta 标签

`meta viewport`。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no">
```

### 媒体查询

`@meida () {}`

```html
<style>
@media (max-width: 750px) {
    ......
}
</style>
```

`max-width: 750px` 指手机媒体的分辨率，如果分辨率达到这个要求，标签中的 css 才会生效。

### 动态rem方案

用JS动态调整 REM

```html
<script>
    var pageWidth = window.innerWidth
    document.documentElement.fontSize = pageWidth / 10 + 'px'
</script>
```

这样可以保证整体页面的比例，不会导致页面变形。
