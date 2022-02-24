---
title: HTTP缓存策略
---

## HTTP缓存

客户端在请求一些资源时，会先询问是否存在命中缓存，没有则再从服务器获取资源并放入缓存仓库中，以便下次请求直接读取。

http根据是否要向服务器发送请求，将缓存规则分为两类：强缓存和协商缓存（对比缓存）。

## 强缓存

强缓存直接从缓存数据库中取出资源，无需再发送请求到服务器上。

http中用来判断是否命中强缓存的字段为 `Expires` 和 `Cache-Control`，后者的优先级高于前者。

### Expires

`Expires` 是HTTP/1.0的产物，现代浏览器基本使用的至少是HTTP/1.1，这个基本可以忽略了。

Response Headers:

```http
expires: Thu, 30 May 2019 08:04:52 GMT
```

`expires` 是一个绝对的时间，这代表这个资源在这个时间点之前都可以直接从缓存中读取。

### Cache-Control

HTTP/1.1的产物，在请求头和响应头都可以穿入，但语法略有不同。

Response Headers:

```http
cache-control: public, max-age=7200
```

`Cache-Control` 定义了 `public` 和 `max-age`，这是一个相对时间（单位：秒），这里代表资源的缓存在这个请求之后的2小时内都有效。

```text
- 请求头

-- Cache-Control: max-age=<seconds>
-- Cache-Control: max-stale[=<seconds>]
-- Cache-Control: min-fresh=<seconds>
-- Cache-control: no-cache
-- Cache-control: no-store
-- Cache-control: no-transform
-- Cache-control: only-if-cached

- 响应头

-- Cache-control: must-revalidate
-- Cache-control: no-cache
-- Cache-control: no-store
-- Cache-control: no-transform
-- Cache-control: public
-- Cache-control: private
-- Cache-control: proxy-revalidate
-- Cache-control: max-age=<seconds>
-- Cache-control: s-maxage=<seconds>
```

常见字段意义：

`public` 表明响应可以被任何对象（包括：发送请求的客户端，CDN等代理服务器，等等）缓存，即使是通常不可缓存的内容（例如，该响应没有max-age指令或Expires消息头）。

`private` 表明响应值可以被科幻段缓存，不能作为共享（缓存服务器）。

`no-cache` 可以在本地缓存，但每次请求是都需要向服务器验证，如果允许则使用本地缓存。

`no-store` 禁止缓存。

`max-age=[seconds]` 设置缓存的最大周期（秒）。

**默认为`private`。**

### 强制缓存状态码

200。

### 两种情况

但是chrome查看network会看到状态码后面多了注释：`200 (from disk cache)`。

强缓存发生时，会有两个情况出现：

- from memory cache

缓存资源在内存中，会话关闭后内存中的缓存就会被释放，重新打开后取不到该缓存。

- from disk cache

缓存资源在硬盘中，会话关闭后下次进入还可以读取到。

每次打开一个网页，如果该网页最近访问过，那么资源很可能会`from disk cache`，从硬盘中读取缓存；如果此时刷新页面，就会出现`from memory cache`，内存永远是读取最快的。

## 协商缓存

协商缓存（对比缓存）是需要经过服务器确认是否使用缓存的机制。

### 强制缓存状态码

其http状态码为 `304`，意为 `not modified`（未修改）。

### 原理

可以看到，虽然客户端仍然发起了http请求服务器，但是服务器只做了标志对比来确认是否使用缓存，如果确认，则不需要返回资源。虽然没有减少请求数，但是极大地减少了请求负荷，可以明显提升请求速度和减小网络带宽。

如何对比标志来确认缓存？

### Last-Modified/If-Modified-Since

当浏览器发起一个请求资源时，服务器会在response header中返回一个 `Last-Modified`，一个绝对时间，代表这个资源的最后修改时间；当浏览器再次请求该资源时，会在request header中戴上一个 `If-Modified-Since`，值为上次服务器返回的 `Last-Modified` 值。

服务器会根据资源上次修改时间和客户端发送的值来确认这段时间内资源有没有被修改过，如果没有则返回304，如果有则返回200。

![http_cache_last_modified](/images/http_cache_last_modified.jpg)

### Etag/If-None-Match

与上面的机制类似，但是不同的是他是通过一个校验码来对比资源是否被修改过，而不是通过资源的最后修改时间。

当一个请求时，服务器会返回一个 `ETag` 字段，然后浏览器下次请求时，会带上 `If-None-Match`，值为上次服务器返回的 `ETag` 的值，服务器经过对比决定返回200还是304。

![http_cache_etag](/images/http_cache_etag.jpg)

`If-None-Match` 的值中有个W/前缀，这个是用来提示应该采用弱比较算法的。

`ETag` 有两种类型：强ETag(strong ETag)与弱ETag(weak ETag)。

强、弱ETag类型的出现与Apache服务器计算ETag的方式有关。Apache默认通过 FileEtag 中 FileEtag INode Mtime Size的配置自动生成ETag(当然也可以通过用户自定义的方式)。

- INode:  文件的索引节点(inode)数

- MTime:  文件的最后修改日期及时间

- Size:   文件的字节数

在大型多WEB集群时,使用ETag时有问题,所以有人建议使用WEB集群时不要使用ETag,其实很好解决,因为多服务器时,INode不一样,所以不 同的服务器生成的ETag不一样,所以用户有可能重复下载(这时ETag就会不准),明白了上面的原理和设置后,解决方法也很容易,让ETag后面二个参 数,MTime和Size就好了.只要ETag的计算没有INode参于计算,就会很准了。


### 两者的优先级

`ETag` 可以解决 `Last-Modified` 不好处理的问题，更准确的控制缓存，因此 `ETag` 的优先级高于 `Last-Modified`。

### `Last-Modified` 的弊端

- 一些文件会周期性的修改，但是内容并未改变只改了时间，这个时候不希望重新请求。

- 某些文件修改非常频繁，`Last-Modified/If-Modified-Since` 只能检查到秒级的粒度，无法检查秒级以下的（或者说Unix记录MTIME只能到秒级）。

- 某些服务器可能无法精确获取文件的最后修改时间。

## Vary

`Vary` 响应头决定对于后续的请求头，如何判断是一个新的资源还是缓存。

`Vary` 属于强缓存标识头。

当缓存服务器收到一个请求，只有当前的请求和原始（缓存）的请求头和缓存响应头里的 `Vary` 都匹配，才能使用缓存的响应。

使用 `Vary`头有利于内容服务的动态多样性。例如使用：

```http
Vary: User-Agent
```

缓存服务器需要通过UA判断是否使用缓存的页面。如果需要区分移动端和桌面端的展示内容，利用这种方式就能避免在不同的终端展示错误的布局。另外，它可以帮助搜索引擎更好地发现页面的移动版本，并且告诉搜索引擎没有引入Cloaking。

因为移动版和桌面的客户端的请求头中的User-Agent不同， 缓存服务器不会错误地把移动端的内容输出到桌面端到用户。

## 同时设置强缓存和协商缓存（`Cache-Control` 和 `ETag`）

服务器同时设置了`Cache-Control/max-age` 和 `Expires`时,会同时使用,也就是说在完全匹配 `If-Modified-Since` 和 `If-None-Match` 即检查完修改时间和 Etag 之后,服务器才能返回304。