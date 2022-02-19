---
title: HTML5 Canvas 常用 API
---

## 概述

`Canvas API` 提供了一个通过JavaScript和HTML的 `<canvas>` 元素来绘制图形的方式。它可以用于动画、游戏动画、数据可视化、图片编辑以及实时视频处理等方面。

`Canvas API` 主要聚焦于 `2D` 图形，而同样适用 `<canvas>` 元素的 `WebGL API` 则用于绘制硬件加速的 `2D` 和 `3D` 图形。

## 常用基础API

### 绘制图形

```html
<canvas id="canvas">
Not Support Canvas!
</canvas>
```

需浏览器支持 `Canvas`。

```js
const canvas = document.getElementById('#canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

### 绘制路径

```js
ctx.beginPath() // 开始路径绘制
ctx.moveTo(20, 30) // 设置路径起点，坐标为（20，30）
ctx.lineTo(200, 10) // 设置路径终点坐标为（200，20）
ctx.lineWidth = 10.0 // 设置线宽
ctx.strokeStyle = '#CC0000'; // 设置线的颜色
ctx.stroke() // 对线进行着色，这时整条线就变得可见
```

### 图像处理

#### `drawImage()`

`drawImage()` 可以将图片绘制到画布上。

接收三个参数：

- 第一个是 `DOM` 元素（即 `<img>` 节点）
- 第二个和第三个是图像左上角在画布中的坐标

```js
const img = new Image()
img.onload = ()=>{
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  ctx.width = image.width
  ctx.height = image.height
  ctx.drawImage(img, 0, 0) // (0,0)代表图片在画布上的位置
}
img.src = 'x.png'
```

#### `toDataURL()` 和 `toBlob()`

用 `toDataURL()` 或 `toBlob()` 将canvas数据转化为图片文件形式，并控制导出图片的质量。

```js
const img = new Image()
const img1 = new Image()
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
img.src = ctx.toDataURL('image/png', 0.92)
img1.src = ctx.toBlob('image/png', 0.92)
```

- `toDataURL()` 将数据转化为 `base64` 格式信息。

- `toBlob()` 将数据转化为 `Blob` 文件。

- 第一个参数表示导出图片的格式。

- 第二个参数表示导出图片质量，只有导出图片为 `jpg` 或 `webp` 时才有效果，默认为 0.92。

#### `getImageData()` 和 `putImageData()`

用 `getImageData()` 将读取canvas的内容，返回一个包含每个像素信息的对象。他有一个`data`属性，值为一个一维数组。改数组的值，依次是每个像素的红、绿、蓝、alpha通道值，因此该数组的长度等于图像的像素宽度x图像的像素高度x4，每个值的范围是0-255。这个数组不仅可读，而且可写，因此通过操作这个数组的值，就可以达到操作图像的目的。

```js
const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
```

修改这个数组以后，使用 `putImageData()` 方法将数组内容重新绘制在canvas上。

```js
context.putImageData(imageData, 0, 0)
```

