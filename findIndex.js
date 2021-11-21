Array.prototype.myFindIndex = function(cb, o) {
    for (let i = 0; i < this.length; i++) {
        if (cb.call(o, this[i], i, this)) {
            return i
        }
    }
    return -1
}

//One example:
let arr = [{ name: 'Mike', age: 23 }, { name: 'peter', age: 20 }, { name: 'john', age: 20 }]
arr.myFindIndex(item => item.name == 'peter') //=> 1