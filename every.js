Array.prototype.myEvery = function(cb, o) {
    for (let i = 0; i < this.length; i++) {
        if (cb.call(o, this[i], i, this)) {
            return false
        }
    }
    return true
}

//One example:
let arr = [1, 3, 6, 7, 9]
arr.myEvery(item => item >= 7) //=> false