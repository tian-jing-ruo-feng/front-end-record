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
