/**
 * Created by aran.hu on 17/2/16.
 */
// console.log([1,2] === [1,2])
// console.log(typeof undefined)
// console.log(Object.prototype.toString(undefined))


// var obj = Object.create({a:1})
// console.log(obj.__proto__())



function P() {
  this.name = 'huhaoran'
}
P.prototype.x = 'x'


var per = new P()
// per.prototype.x = 'x'
per.age = 12
// console.log(P.prototype.hasOwnProperty('x'))
// console.log(Object.getOwnPropertyDescriptor(P, 'prototype')) //
// console.log(per.valueOf())



var arr1 = ['huhaoran']
// console.log('huhaoran' in arr1)

var str = '123'
// console.log(str.charAt(0))


var o = {prop: 37}
function inde(){
  return this.prop
}
o.f = inde
console.log(o.f())