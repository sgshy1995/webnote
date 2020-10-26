---
title: HTML 常见兼容性问题
---

## 兼容性问题

1. 双边距 BUG float 引起的，解决办法：`display`。

2. 使用 float 引起的 3px 问题，解决办法：`display:inline -3px`。

3. 超链接 hover 点击后失效，解决办法：使用正确的书写顺序 `link` > `visited` > `hover` > `active`。

4. le z-index 失效问题，解决办法：给父级添加 `position:relative`。

5. png 透明，解决办法：使用js。

6. min-height 最小高度无效，解决办法：使用 `!important`。

7. select 在 IE6 下遮盖，解决办法：使用 `iframe` 嵌套。

8. 没有办法定义 1px 左右宽度的容易，是因为 IE6 的默认行高造成的，解决办法：使用 `overflow:hidden; zoom:0.08; line-height:1px`。

9. IE5-8 不支持 opacity，解决办法：

```css
.opacity{
    opacity: 0.4;
    filter: alpha(opacity=60); /* for IE5-7 */
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 8 */
}
```

10. IE8 不支持 png 透明背景，解决办法：IE6 下使用 gif。