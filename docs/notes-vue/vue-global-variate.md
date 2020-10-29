---
title: Vue 创建全局变量
---

## 全局混入

定义混入对象。

```js
new Vue({
    render: h => h(App)
}).$mount('#app')

export const globalMixins = {
    data(){
        return {
            name: 'frank'
        }
    }
}

Vue.mixin(globalMixins)
```

## 全局引入变量模块挂载到 Vue 原型中

定义全局对象在 common.js 中。

```js
export const common = {
    global: 0
}
```

在 main.js 全局引入并挂载到原型。

```js
import common from '@/api/common'
Vue.prototype.common = common
```

在需要使用的地方使用。

```js
<script>
    export default{
        data(){
            return{
                globalCount: this.common.global
            }
        }
    }
</script>
```

## 使用状态管理 Vuex

配置 Vuex。

```js
export const store = {
    state:{
        count: 0
    }
}
```

在组件中使用。

```js
<script>
    export default{
        computed:{
            count(){
                return this.$store.state.count
            }
        }
    }
</script>
```

## 使用本地存储 Webstorage 存放全局变量

本地存储分两种 localStorage 和 sessionStorage

**localStorage**：永久性，一直存在于浏览器中，除非用户手动清除localStorage；一般为5M浏览器不同有些许区别；不参与和服务器的通信。

**sessionStorage**：在当前会话下有效，关闭页面和浏览器清除后失效；一般为5M浏览器不同有些许区别；不参与和服务器的通信。

**API**：二者的api形式相同

```js
localStorage.setItem("key","value");  //以“key”为名称存储一个值“value”

localStorage.getItem("key");  //获取名称为“key”的值

localStorage.removeItem("key");  //删除名称为“key”的信息。

localStorage.clear();  ​//清空localStorage中所有信息
```

## 使用 Cookie 存储

这种方式极不推荐，毕竟大小限制，还需要设置过期时间。

cookie 在过期时间之前一直有效即使窗口或浏览器关闭；存放数据大小为4k左右；有个数限制（随浏览不同）一般不能超过20个；与服务端通信，每次都会携带在HTTP头中，如果使用 cookie 保存过多数据会带来性能问题。