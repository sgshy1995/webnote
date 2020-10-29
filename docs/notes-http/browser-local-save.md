---
title: 浏览器端的存储技术
---

## 常用的浏览器端的存储技术

- cookie

- localStorage

- sessionStorage

优缺点：

### cookie

h5 之前，存储主要用 cookie，缺点是在请求头上带着数据，导致流量增加。大小限制 4kb。

```javascript
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT;path=/" 
// 设置 cookie document.cookie = "username=; 
// expires=Thu, 01 Jan 197000:00:00 GMT"  删除 cookie
```

path 路径，值可以是一个目录，或者是一个路径。

如果 cc.com/test/index.html 建立了一个 cookie，那么在 cc.com/test/目录里的所有页面，以及该目录下面任何子目录里的页面都可以访问这个 cookie。因此在 cc.com/test/test2/test3 里的任何页面都可以访问 cc.com/test/index.html 建立的 cookie。若 cc.com/test/ 若想访问 cc.com/test/index.html 设置的 cookes，需要把 cookies 的 path 属性设置成“/”。 在指定路径的时候，凡是来自同一服务器，URL 里有相同路径的所有 WEB 页面都可以共享 cookies。

domain 主机名，是指同一个域下的不同主机，例如：www.baidu.com 和 map.baidu.com 就是两个不同的主机名。默认情况下，一个主机中创建的 cookie 在另一个主机下是不能被访问的，但可以通过 domain 参数来实现对其的控制：document.cookie = "name=value;domain=.baidu.com" 这样，所有*.baidu.com 的主机都可以访问该 cookie。

### localStorage

以键值对(Key-Value)的方式存储，永久存储，永不失效，除非手动删除。IE8+支持，每个域名限制 5M

打开同域的新页面也能访问得到

操作方式：

```js
window.localStorage.username = 'hehe' // 设置 
window.localStorage.setItem('username', 'hehe') // 设置 
window.localStorage.getItem('username') // 读取 
window.localStorage.removeItem('username') // 删除 
window.localStorage.key(1) // 读取索引为 1 的值 
window.localStorage.clear() // 清除所有 可以存储数组、数字、对象等可以被序列化为字符串的内容
```

### sessionStorage

sessionStorage 操作的方法与 localStroage 是一样的，区别在于 sessionStorage 在关闭页面后即被清空，而 localStorage 则会一直保存。很多时候数据只需要在用户浏览一组页面期间使用，关闭窗口后数据就可以丢弃了，这种情况使用 sessionStorage 就比较方便。

注意，刷新页面 sessionStorage 不会清除，但是打开同域新页面访问不到。

## 区别

### 传递方式

- cookie 数据始终在同源的 http 请求中携带（即使不需要），即 cookie 在浏览器和服务器间来回传递。

- 而 sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。

- cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下。 

### 大小

- cookie 数据不能超过 4k，同时因为每次 http 请求都会携带 cookie，所以 cookie 只适合保存很小的数据，如会话标识。

- sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。 

### 有效期

- sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；

- localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；

- cookie 只在设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。 

### 作用域

- sessionStorage 不在不同的浏览器页面中共享，即使是同一个页面；

- localStorage 在所有同源窗口中都是共享的；

- cookie 也是在所有同源窗口中都是共享的。 

### 其他

- Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。 

- Web Storage 的 api 接口使用更方便，cookie 的原生接口不友好，需要自己封装。