# JavaScript 相关问题

## ES6

### 变量的解构赋值

#### 函数参数的解构赋值

```js
// 函数参数的解构也可以使用默认值
// move 函数的参数是对象，通过对这个对象解构，得到变量x和y的值。若解构失败，x和y就等于默认值
function move({x: 0, y: 0} = {}) {
  console.log(x, y)
}
move({x: 3, y: 8}) // 3, 8
move({x: 3}) // 3, 0
move() // 0, 0

// 为函数的参数指定默认值，并非为变量x和y指定默认值
function move({x, y} = {x: 0, y: 0}) {
  console.log(x, y)
}
move({x: 3, y: 8}) // 3, 8
move({x: 3}) // 3, undefined
move({}) // undefined, undefined
move() // 0, 0

```

#### 用途

1. 交换变量的值 **_[x, y] = [y, x]_**

```js
let x = 1
let y = 2

;[x, y] = [y, x]
```

2. 从函数返回多个值

```js
// 返回一个数组
function example() {
  return [1, 2, 3]
}
let [a, b, c] = example()

// 返回一个对象
function example = {
  return {
    foo: 1,
    bar: 2
  }
}
let { foo, bar } = example()
```

3. 函数参数的定义

```js
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
```

4. 提取 JSON 数据

```js
let jsonData = {
  id: 42,
  status: 'OK',
  data: [867, 5309]
}

let { id, status, data: number } = jsonData

console.log(id, status, number)
// 42, "OK", [867, 5309]
```

5. 函数参数的默认值

```js
jQuery.ajax = function (
  url,
  {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true
    // ... more config
  } = {}
) {
  // ... do stuff
}
```

6. 遍历 Map 结构

```js
const map = new Map()
map.set('first', 'hello')
map.set('second', 'world')
for (let [key, value] of map) {
  console.log(key, value)
}
// first, hello
// second, world

// 遍历 key
for (let [key] of map) {
  console.log(key)
}
// 遍历 value
for (let [, value] of map) {
  console.log(value)
}
```

7. 输入模块的指定方法

```js
const { sourceMap, souceNode } = require('xxx-lib')
```

### 字符串的扩展

1.  字符的 Unicode 表示法
2.  字符串的遍历器接口
    :::tip
    ES6 为字符串提供了遍历器接口, 字符串可以被 for ... of 遍历。

    遍历器可以识别大于 0xFFFF 的码点，传统的 for 循环无法识别这样的码点。
    :::

3.  直接输入 U+2028 和 U+2029

    > JavaScript 字符串允许直接输入字符，以及字符的转义形式

    :::warning
    JavaScript 规定有 5 个字符， 不能在字符串里直接使用，只能使用转义形式
    即字符串里不能直接包含反斜杠，一定要转义要写成 \\ 或者 \u005c

    1. U + 005C: 反斜杠（reverse solidus）
    2. U + 000D: 回车（carrige return）
    3. U + 2028: 行分隔符（line separator）
    4. U + 2029: 段分隔符（paragraph separator）
    5. U + 000A: 换行符（line feed）

    :::

    > ES2019 允许直接在字符串里输入 U+2028（行分隔符）和 U+2029（段分隔符）

    ```js
    const PS = eval("'\u2029'")
    ```

    :::danger
    模板字符串现在允许直接输入 U + 2028: 行分隔符（line separator）和 U + 2029: 段分隔符（paragraph separator）这两个字符。

    正则表达式不允许直接输入这两个字符。
    :::

4.  JSON.stringify() 的改造
    :::tip
    为了确保 JSON.stringify() 返回的是合法的 UTF-8 字符, ES2019 改变了其行为。

    如果遇到 0xD800 和 0xDFFF 之间的单码点，或者不存在的配对形式，它会返回转义字符，留给应用自己处理接下来如何处理
    :::

    ```js
    JSON.stringify('\u{D834}') // ""\\uD834""
    JSON.stringify('\uDF06\uD834') // ""\\udf06\\d834""
    ```

5.  模板字符串
    > 模板字符串是增强的字符串，用反引号（`）标识
    > 它可以当作普通字符串使用，
    > 也可以用来定义多行字符串
    > 或者在字符串中嵌入变量
6.  实例：模板编译
7.  标签模板

    > 函数调用的一种特殊方式。“标签”指的就是函数，紧跟在后边的模板字符串就是参数

    ```js
    let a = 5
    let b = 10
    tag`Hello ${a + b} World ${a * b}`
    // 等同于
    tag(['Hello ', ' World', ''], 15, 50)
    ```

    :::warning
    模板处理函数的第一个参数还有一个 raw 属性
    :::

    ```js
    console.log`123` // ["123", raw: Array[1]]
    ```

    :::tip
    应用

    1. 过滤 HTML 字符串，防止用户输入恶意内容
    2. 多语言处理（国际化处理）
    3. 在 js 中嵌入 其他语言（通过 jsx 函数将 DOM 字符串转换为 React 对象）

    :::

8.  模板字符串的限制
    ::: warning
    模板字符串默认会将字符产 **转义**，导致无法嵌入其他语言。

    :::

### 字符串新增方法

1. String.fromCodePoint()
   :::tip
   用于从 Unicode 码点返回对应的字符串

   解决了 String.fromCharCode() 不能识别大于 0xFFFF 的码点问题
   :::

2. String.raw()
   :::tip
   返回一个斜杠（即斜杠前边再加一个斜杠）都被转义的字符串。

   通常用于模板字符串的处理。本质是一个正常的函数，只是专用于模板字符的 **标签函数**。

   若写成函数形式，它的第一个参数应该是一个具有 raw 属性的对象，且 raw 属性的值应该是一个数组，对应模板字符串解析后的值。
   :::

   > 作为函数，String.raw() 的代码实现基本如下

   ```js
   String.raw = function (strings, ...values) {
     let output = ''
     let index
   
     for (index = 0; index < values.length; index++) {
       output += strings.raw[index] + values[index]
     }
   
     output += strings.raw[index]
     return output
   }
   ```

3. 实例方法：codePointAt()
   :::tip
   解决了 String.charCodeAt() 无法处理 4 字节存储的字符。

   codePointAt() 方法返回的是十进制的值，可以使用 toString() 转换。

   使用 for...of 或者 扩展运算符（...）可以正确识别 32 位的 UTF-16 的字符。
   :::

   > 测试一个字符是由两个字节还是四个字节组成的最简单方法

   ```js
   function is32Bit(c) = {
    return c.codePointAt(0).toString(16) > 0xFFFF
   }
   ```

4. 实例方法：normalize()

   > 用来将字符的不同表示方法统一为同样的形式。

   ::: warning
   normalize() 目前不能识别三个或三个以上的字符的合成。这种情况下，只能使用正则表达式，通过 Unicode 编码区间判断。
   :::

5. 实例方法：includes(), startsWith(), endsWith()

   > 用来判断一个字符串是否包含在另一个字符串中。ES5 提供了 indexOf()方法

   :::tip
   includes()：返回布尔值，表示是否找到了参数字符串

   startsWith()：返回布尔值，表示参数字符串是否在原字符串头部。

   endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

   都支持第二个参数 n。includes()和 startsWith()的第二个参数表示从 n 到字符串结束。**_endsWith_ 表示针对前 n 个字符串**
   :::

6. 实例方法：repeat()
   > 返回一个字符串，表示将字符串重复 n 次。
7. 实例方法：padStart(), padEnd()
8. 实例方法：trimStart(), trimEnd()
9. 实例方法：matchAll()
10. 实例方法：replaceAll()
11. 实例方法：at()
12. 实例方法：toWellFormed()

## 事件循环

![image-20220809223027806](http://mdrs.yuanjin.tech/img/202208092230847.png)

> **事件循环又叫消息循环，是浏览器渲染主线程的工作方式**
>
> 在 Chrome 源码中，**它开启了一个不会结束的 for 循环**，每次循环会从 消息队列中取出**第一个任务**执行，而其他线程只需要在合适的时间将任务加入到队尾。
>
> 过去把消息队列简单的分为 宏任务队列 和 微任务队列。这种说法目前无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。
>
> 根据 W3C 官方的解释，**每个任务有不同的类型，同类型的任务必须在同一个队列中，不同类型的任务可以属于不同的队列。**
>
> **不同任务队列有不同的优先级（任务没有优先级，任务队列有优先级），在一次事件循环中，由浏览器自行决定取哪一个队列的任务。** 例如任务队列有微任务队列、延时队列、交互队列等
>
> 但是，浏览器必须有一个`微队列`, **微队列的任务一定具有做高的优先级，必须优先调度执行**。

### 任务具有优先级吗？

> 任务没有优先级，在消息对列中先进先出。**但是消息队列是有优先级的**。
> 根据 W3C 官方的最新解释：
>
> - 每个任务都有一个任务类型，同一个类型的任务必须在同一个队列中
> - 不同类型的任务可以分属于不同的队列
> - 浏览器必须准备好一个微队列，微队列中的任务优先于其他任务执行。[链接](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint)
>
> 在目前的 chrome 的实现中，至少包含下面的队列：
>
> * 延时队列：用于存放计时器达到后返回的回调任务。优先级【中】
>
> * 交互队列：用于存放用户操作后产生的事件处理任务。优先级【高】
>
> * 微队列：用户存放需要最快执行的任务， 优先级【最高】
>
>   > 添加任务到微队列的主要方式是使用 Promise、MutationObserver
>   >
>   > 例如
>   >
>   > ```js
>   > // 把一个函数添加到微任务队列
>   > Promsie.resovle().then(fn)
>   > ```

### JS 中的计时器能做到精确计时吗？

> 不行。
>
> * 计算机没有[原子钟](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%AD%90%E9%90%98)，无法做到精确计时
> * 操作系统过的计时函数本身就有少量偏差，由于 JS 的计时器最终调用的是操作系统的计时函数，也就携带了偏差
> * 按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4 毫秒的时间，这样在计时时间少于 4 毫秒时又带来了偏差
> * 受事件循环的影响，计时器的回调函数只能在渲染主线程 空闲时运行，因此又带来了偏差

### 什么是异步？

> 代码在执行过程中，会遇到一些无法立即处理的任务，比如：
>
> * 计时完成后需要执行的任务：setTimeout、setInterval
> * 网络通信完成后需要执行的任务：XHR、Fetch
> * 用户操作后需要处理的任务：addEventListener
>
> 如果让渲染主线程等待这些任务的时机到达，就会导致主线程长期处于“阻塞”状态，从而导致浏览器“卡死”。
>
> **渲染主线程承担着极其重要的工作，无论如何都不能阻塞！** 因此浏览器选择异步来解决这个问题。
>
> 使用异步的方式，**浏览器主线程永不阻塞。**

### 如何理解 JS 的异步

> JS 是一门**单线程**语言，这是因为它 运行在浏览器的渲染主线程中，而渲染主线程只有一个。
>
> 而渲染主线程承担着诸多工作：解析html、css、布局、分层、js执行等任务。
>
> 如果使用 **同步** 的方式，就**极有可能**导致主线程产生 **阻塞**，从而导致消息队列中的其他任务无法执行。这样一来，一方面会导致繁忙的主线程白白消耗时间，另一方面导致页面无法及时更新，给用户造成 **卡死** 现象。
>
> 所以浏览器采用异步的方式来避免。
>
> 具体做法就是当某些任务发生时，例如计时器、网络、时间监听，主线程就会把任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，**则将事先传递的回调函数 包装成 任务**。加入到消息队列的队尾，等待主线程调度执行。
>
> 在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。



