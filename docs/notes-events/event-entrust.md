---
title: 事件委托
---

## 什么是事件委托

利用事件冒泡的原理，自己触发的事件，由其父元素代替执行。

## 优势

1. 提高性能

```js
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>凤梨</li>
</ul>

// good
document.querySelector('ul').onclick = (event) => {
  let target = event.target
  if (target.nodeName === 'LI') {
    console.log(target.innerHTML)
  }
}

// bad
document.querySelectorAll('li').forEach((e) => {
  e.onclick = function() {
    console.log(this.innerHTML)
  }
})
```

2. 新添加的元素还会有之前的事件。

## 事件冒泡与委托的区别

- 事件冒泡：box 内部无论是什么元素，点击后都会触发 box 的点击事件。
- 事件委托：可以对 box 内部的元素进行筛选。

## 事件委托的索引

```js
<ul id="ul">
        <li>aaaaaaaa</li>
        <li>bbbbbbbb</li>
        <li>cccccccc</li>
    </ul>
    <script>
        window.onload = function () {
            var oUl = document.getElementById("ul");
            var aLi = oUl.getElementsByTagName("li");
            oUl.onclick = function (ev) {
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if (target.nodeName.toLowerCase() == "li") {
                    var that = target;
                    var index;
                    for (var i = 0; i < aLi.length; i++)
                        if (aLi[i] === target) index = i;
                    if (index >= 0) alert('我的下标是第' + index + '个');
                    target.style.background = "red";
                }
            }
        }
    </script>
```