---
title: 数组遍历和跳出循环
---

## 遍历和跳出、终止循环

JS中常用的实现循环遍历的方法的跳出/结束遍历的办法。

|  序号   | 方法  |  break   | continue  |  return   | return true  | return false | 结论 |
|  ----  | ----  |  ----  | ----  |  ----  | ----  | ----  | ----  |
| 1  | for循环 |  成功  | 跳出本次循环 |  非法  | 非法 | 非法 | ✅ |
| 2  | for...in |  成功  | 跳出本次循环 |  非法  | 非法 | 非法 | ✅ |
| 3  | Array.forEach |  非法  | 非法 |  跳出本次循环  | 跳出本次循环 | 跳出本次循环 | ❌ |
| 4  | Array.map |  非法  | 非法 |  跳出本次循环  | 跳出本次循环 | 跳出本次循环 | ❌ |
| 5  | Array.some |  非法  | 非法 |  跳出本次循环  | 成功 | 跳出本次循环 | ✅ |
| 6  | Array.every |  非法  | 非法 |  成功  | 跳出本次循环 | 成功 | ✅ |
| 6  | Array.filter |  非法  | 非法 |  跳出本次循环  | 跳出本次循环 | 跳出本次循环 | ❌ |

### for 循环

```js
const arr = [1,2,3,4,5];
const show = [];

for(let i=0;i < arr.length-1; i++){
    if(i === 2){
        break; // [1,2] 成功跳出循环
        continue; // [1,2,4,5] 只跳出当前循环
        return; // Uncaught SyntaxError: Illegal return statement
        return true; // Uncaught SyntaxError: Illegal return statement
        return false; // Uncaught SyntaxError: Illegal return statement
    }
    show.push(arr[i]);
}
```

### for...in 循环

```js
const arr = [1,2,3,4,5];
const show = [];

for(let item in arr){
    if(i === 2){
        break; // [1,2] 成功跳出循环
        continue; // [1,2,4,5] 只跳出当前循环
        return; // Uncaught SyntaxError: Illegal return statement
        return true; // Uncaught SyntaxError: Illegal return statement
        return false; // Uncaught SyntaxError: Illegal return statement
    }
    show.push(item);
}
```

### Array.forEach()

```js
const arr = [1,2,3,4,5];
const show = [];

arr.forEach((item,index)=>{
    if(index === 2){
        break; // Uncaught SyntaxError: Illegal break statement
        continue; // Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        return; // [1,2,4,5] 只跳出当前循环
        return true; // [1,2,4,5] 只跳出当前循环
        return false; // [1,2,4,5] 只跳出当前循环
    }
    show.push(item)
})
```

### Array.map()

```js
const arr = [1,2,3,4,5];
const show = [];

arr.map((item,index)=>{
    if(index === 2){
        break; // Uncaught SyntaxError: Illegal break statement
        continue; // Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        return; // [1,2,4,5] 只跳出当前循环
        return true; // [1,2,4,5] 只跳出当前循环
        return false; // [1,2,4,5] 只跳出当前循环
    }
    show.push(item)
})
```

### Array.some()

```js
const arr = [1,2,3,4,5];
const show = [];

arr.some((item,index)=>{
    if(index === 2){
        break; // Uncaught SyntaxError: Illegal break statement
        continue; // Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        return; // [1,2,4,5] 只跳出当前循环
        return true; // [1,2] 成功跳出循环
        return false; // [1,2,4,5] 只跳出当前循环
    }
    show.push(item)
})
```

### Array.every()

```js
const arr = [1,2,3,4,5];
const show = [];

arr.every((item,index)=>{
    if(index === 2){
        break; // Uncaught SyntaxError: Illegal break statement
        continue; // Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        return; // [1,2] 成功跳出循环
        return true; // [1,2,4,5] 只跳出当前循环
        return false; // [1,2] 成功跳出循环
    }
    show.push(item)
})
```

### Array.filter()

```js
const arr = [1,2,3,4,5];
const show = [];

arr.filter((item,index)=>{
    if(index === 2){
        break; // Uncaught SyntaxError: Illegal break statement
        continue; // Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
        return; // [1,2,4,5] 只跳出当前循环
        return true; // [1,2,4,5] 只跳出当前循环
        return false; // [1,2,4,5] 只跳出当前循环
    }
    show.push(item)
})
```