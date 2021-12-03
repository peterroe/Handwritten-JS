/**
 * @description: 通过隐式绑定this，但是会有副作用，o对象必须挂载一个属性
 */

Function.prototype.myCall = function(o, ...args) {
    o.fn = this
    o.fn(...args)
}