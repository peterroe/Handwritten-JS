/**
 * @description: 相比call，利用高阶函数特性延迟执行就可以
 */

Function.prototype.myBind = function(o, ...args) {
    return (...args2) => {
        this.apply(o, ...args, ...args2)
    }
}