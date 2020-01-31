---
title: 节点 node
---

## node 节点

如果Node有的API，那么Element,Text,Document也同时具有。

## 拷贝 cloneNode()

```html
<div id='div1'>123</div>
```

### 浅拷贝

只拷贝当前节点。

```js
div1.cloneNode() 
//浅拷贝，只拷贝节点
document.body.appendChild(div1)
//<div id='div1'>123</div>
//<div id='div1'></div>
```

### 深拷贝

```js
div1.cloneNode(true) 
//深拷贝，拷贝节点及其所有子节点
document.body.appendChild(div1)
//<div id='div1'>123</div>
//<div id='div1'>123</div>
```

## nodeType

常见 `nodeType`。

| 常量           | 值            | 描述   |
| ------------- |:-------------:| -----:|
| Node.ELEMENT_NODE      | 1 | 一个元素节点 |
| Node.TEXT_NODE      | 3      |   Element 或者 Attr 中实际的文字 |
| Node.DOCUMENT_NODE | 9      |    一个 Document 节点 |
| Node.DOCUMENT_TYPE_NODE | 10      |    描述文档类型的 DocumentType 节点。例如 `<!DOCTYPE html>`。 |

## innerText 和 textContent

很经常考。

### innerText

`innerText` 受css影响，不会返回隐藏元素的文本(`display:none`)。

由于受css影响，会触发重排(reflow)。

在小于等于IE11的版本中，可能会永久破坏所有后代的文本节点。

### textContent

`textContent` 会获取所有元素的内容，比如 `<script>` 元素。

## 获取所有 a标签

使用 `document.links` 替代 `document.anchors`(只会获取有 name 的 a标签)。

## document.documentElement

会返回文档对象的根元素 `<html>`。

## innerText 和 innerHtml

### innerText

`element.innerText`：用户(外部)写入页面，但是不管写什么，包括标签，都当做文本。

### innerHtml

`element.innerHtml`：这时候写入标签，就会当做开发者的标签写入页面。现在的浏览器一般都禁止外部写入script标签。但是这仍然是危险和不正确的。

## DOM 事件

`event.addEventListener('event',fn)`

`event.removeEventListener('event',fn)`
