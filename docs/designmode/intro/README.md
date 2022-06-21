---
sidebarDepth: 2
sidebar: auto
---

# 灵活的 JavaScript

## 面向对象编程

### 函数

```js
function checkName() {
  // 验证姓名
}
function checkAge() {
  // 验证年龄
}
function checkEmail() {
  // 验证邮箱
}
```

### 使用对象收编变量

```js
var CheckObject = {
  checkName: function () {},
  checkAge: function () {},
  checkEmail: function () {}
}
```

### 对象的另一种方式

::: tip
对于方法一使用 new 关键子创建的对象不能使用这些静态方法
:::

```js
// 对象方法一
var CheckObject = function () {}
CheckObject.checkName = function () {}
CheckObject.checkAge = function () {}
CheckObject.checkEmail = function () {}

// 对象方法二
var CheckObject = function () {
  return {
    checkName: function () {},
    checkAge: function () {},
    checkEmail: function () {}
  }
}

// 使用类返回一个对像
var CheckObject = function () {
  this.checkName = function () {}
  this.checkAge = function () {}
  this.checkEmail = function () {}
}
```

### 定义一个检测类

```js
// 定义一个构造函数
var CheckObject = function () {}
CheckObject.prototype = {
  checkAge: function () {
    return this
  },
  checkName: function () {
    return this
  },
  checkEmail: function () {
    return this
  }
}

var check = new CheckObject()
// 链式调用
check.checkAge().checkEmail().checkName()
```

### 通过函数的祖先添加方法

```js
// 使用函数祖先创建方法
// 方法一: 给对象（函数）添加静态方法的方式
Function.prototype.addMethod = function (name, fn) {
  this[name] = fn
  return this
}
var method = function () {}
// 注意：此处添加的是函数的静态方法，无法使用new关键字复制添加的函数
method
  .addMethod('checkName', function () {
    console.log('验证姓名')
    return this
  })
  .addMethod('checkAge', function () {
    console.log('验证年龄')
    return this
  })
method.checkName().checkAge()
console.log(method) // [Function: method] { checkName: [Function], checkAge: [Function] }

// 方法二：给函数（构造函数）添加原型的方式
Function.prototype.addMethod = function (name, fn) {
  this.prototype[name] = fn
  return this
}
var Methods = function () {}
Methods.addMethod('checkName', function () {
  console.log('验证姓名')
  return this
}).addMethod('checkAge', function () {
  console.log('验证年龄')
  return this
})

var check = new Methods()
console.log(check, 'check') // Methods {} check
console.log(check.__proto__, 'check.__proto__') // Methods { checkName: [Function], checkAge: [Function] } check.__proto__
check.checkName().checkAge()
// 验证姓名
// 验证年龄
```

### 测试使用 badge

::: tip
对于使用 new 关键子创建的对象不能使用这些静态方法
:::
::: danger
对于使用 new 关键子创建的对象不能使用这些静态方法
:::
::: warning
对于使用 new 关键子创建的对象不能使用这些静态方法
:::
::: details
对于使用 new 关键子创建的对象不能使用这些静态方法
:::

```

```
