Array.prototype.myFind = function(cb, o) {
    for (let i = 0; i < this.length; i++) {
        if (cb.call(o, this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
}

//One example:
let arr = [{ name: 'Mike', age: 23 }, { name: 'peter', age: 20 }, { name: 'john', age: 20 }]
arr.myFind(item => item.name == 'peter') //=> { name: 'peter', age: 20 }