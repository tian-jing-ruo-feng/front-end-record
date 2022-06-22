// 使用函数祖先创建方法
// 方法一
// Function.prototype.addMethod = function (name, fn) {
//   this[name] = fn
//   return this
// }
// var method = function () {}
// // 注意：此处添加的是函数的静态方法，无法使用new关键字复制添加的函数
// method
//   .addMethod('checkName', function () {
//     console.log('验证姓名')
//     return this
//   })
//   .addMethod('checkAge', function () {
//     console.log('验证年龄')
//     return this
//   })
// method.checkName().checkAge()
// console.log(method) // [Function: method] { checkName: [Function], checkAge: [Function] }

// 方法二
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

console.log(process.cwd())

// #region snippet
