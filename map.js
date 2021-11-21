Array.prototype.myMap = function(cb, o) {
    let res = []
    for (let i = 0; i < this.length; i++) {
        res.push(cb.call(o, this[i], i, this))
    }
    return res
}

//One example:
let arr = [1, 3, 6, 7, 9]
arr.myMap(item => item + 2) //=> [ 3, 5, 8, 9, 11 ]