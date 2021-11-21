Array.prototype.myFill = function(value, start = 0, end = this.length) {
    if (start < 0) {
        start = this.length + start
    }
    if (end < 0) {
        end = this.length + end
    }
    if (start < 0) {
        start = 0
    }
    if (end > this.length) {
        end = this.length
    }
    for (let i = start; i < end; i++) {
        this[i] = value
    }
    return this
}

//One example:
let arr = [1, 2, 3, 4, 5]
arr.myFill(0, 2, 4) //=> { name: 'peter', age: 20 }