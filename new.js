/**
 * 构造对象的三个步骤：
 *     * 创建一个空对象
 *     * 对象的原型指向构造函数的原型
 *     * 执行相应的代码
 */
function newBuild(fn, ...args) {
    const o = {}

    o.__proto__ = fn.prototype

    fn.apply(o, args)

    return o
}

//One example:
function people(name, age) {
    this.name = name
    this.age = age
}
newBuild(people, "peterroe", "20") //等价于 new Object(people, "peterroe","20")