/**
 * 根据原型链，判断一个对象是否是另一个构造函数的实例
 */

function instaceofBuild(child, father) {
    const fp = father.prototype
    let cp = child.__proto__
    while (cp) {
        if (fp == cp) {
            return true
        }
        cp = cp.__proto__
    }
    return false
}

//One example:
instaceofBuild(new Function(), Object) //=> true