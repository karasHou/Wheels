# 来源
https://juejin.cn/post/7072683227625816072


# 笔记

## dataset
> dataset返回值是一个 `DOMStringMap`
* dataset.xx获取的是一个字符串


## HTMLCollection

HTMLCollection 接口表示一个包含了元素（元素顺序为文档流中的顺序）的通用集合（与 arguments 相似的`类数组 `(array-like) 对象），还提供了用来从该集合中选择元素的方法和属性。

> 类数组不能直接用 `forEach` 遍历，需要先用 Array.from 后才能使用.


## Array.from()
Array.from() 方法对一个`类似数组`或`可迭代对象`创建一个新的，`浅拷贝`的数组实例。


## isNaN()函数和Number.isNaN()函数的区别
>`isNaN()`函数和 `Number.isNaN()` 函数的区别。

* 结论：
推荐使用 `Number.isNaN()`，判断更为准确
>原因在于isNaN()会先做一次toNumber的转化，就导致判断不准确。；而 Number.isNaN 会先判断是不是numnber，然后再去判断 NaN

## insertBefore语法

>https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
parentNode.insertBefore(要插入的节点, 参考子节点)


## 性能优化

### 使用 `transform` 来替代 `left`
使用 transform 的优点是它能够很容易地改变元素，而不需要修改元素的位置和大小，从而实现动画效果。此外，transform 对性能也有利，因为浏览器的重绘时间非常少。


```js
//优化前
wrapper.style.left = `${-600 * (swiperIdx)}px`;  
// 优化后：
wrapper.style.transform = `translate3d(${-600 * (swiperIdx)}px, 0, 0)`
```
