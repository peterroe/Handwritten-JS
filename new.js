function newBuild(fn, ...args) {
    const o = {} //create a new object

    o.__proto__ = fn.prototype //mount prototype

    fn.apply(o, args) //Let "this" point to this object

    return o
}

//One example:
function people(name, age) {
    this.name = name
    this.age = age
}
newBuild(people, "peterroe", "20") //means new(people, "peterroe","20")