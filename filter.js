Array.prototype.myFilter = function(cb, o) {
    let res = []
    for (let i = 0; i < this.length; i++) {
        if (cb.call(o, this[i], i, this)) {
            res.push(this[i])
        }
    }
    return res
}

//One example:
let arr = [1, 3, 6, 7, 9]
arr.myFilter(item => item >= 3 && item <= 7) //=> [3, 6, 7]