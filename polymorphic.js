/**
 * @description: 利用闭包的巧妙，实现方法的多态性。本质上其实也是if/else，但结构精美
 */

function addMethod(object, name, fn) {
    var old = object[name]
    object[name] = function(...args) {
        if (fn.length == args.length) {
            return fn.apply(this, args)
        } else {
            return old.apply(this, args)
        }
    }
}
addMethod(window, 'fn', (name) => console.log(1))
addMethod(window, 'fn', (name, age) => console.log(2))
addMethod(window, 'fn', (name, age, sport) => console.log(3))

//下面的例子的0只是为了填充参数
window.fn(0) => 1
window.fn(0, 0) => 2
window.fn(0, 0, 0) => 2