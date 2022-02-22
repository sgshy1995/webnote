---
title: 防抖和节流
---

## 防抖（debounce）

事件触发后等待一段时间再再执行，如果时间短时间内频繁触发，则清空等待时间。

前端常见场景为：用户输入。

```js
function debounce(fn, timeout=300){
    let timer = 0
    return function(){
        if(timer) clearTimeout(timer)
        let arg = arguments
        timer = setTimeout(function (){
            fn.apply(this,arg)
            clearTimeout(timer)
        },timeout)
    }
}
```

## 节流（throttle）

时间触发后，指定时间内只执行一次。

前端常见场景为：滚动，鼠标移动，缩放，表单提交等。

```js
function throttle(fn, timeout=300){
    let timer = 0
    return function(){
        if(timer) return
        let arg = arguments
        timer = setTimeout(function (){
            fn.apply(this,arg)
            clearTimeout(timer)
            timer = 0
        },timeout)
    }
}
```