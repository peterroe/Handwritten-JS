Array.prototype.mySome = function(cb, o) {
    for (let i = 0; i < this.length; i++) {
        if (cb.call(o, this[i], i, this)) {
            return true
        }
    }
    return false
}

//One example:
let arr = [1, 3, 6, 7, 9]
arr.mySome(item => item >= 7) //=> true