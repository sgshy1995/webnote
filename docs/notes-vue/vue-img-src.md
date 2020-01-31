---
title: "Vue 的 img-src 动态绑定"
---

# img src

### 动态绑定 src

详见 nav-demo-1 ([前端导航页](https://github.com/sgshy1995/nav-demo-1))

### 用途

- 使用 vue 动态绑定 img 的 src
- 直接写是不行的，需要加 require

### 示例

```js
<script>
export default{
  data(){
    return {
      image:{
        name: 'baidu'
      }
    }
  }
}
</script>

<template>
  <img :src="require('../assets/' + image.name + '.png')" :alt="image.name">
</template>

// 渲染结果 <img src="/img/baidu.23gv3n432h213nv.png" alt="baidu">
```