---
title: Vue 的 style-class 绑定
---

# style-class

### 控制 class 动态切换小技巧

详见 nav-demo-1 ([前端导航页](https://github.com/sgshy1995/nav-demo-1))

### 用途

- 使用 vue 动态的切换或改变元素的 class
- v-bind:class="active:type"

### 用法

```js
data(){
  return {
    n:0
  }
}

<img @click='n=1' :class='active:n===1, deactive:n===0'>

// 结果渲染应只有 class
```