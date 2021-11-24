Array.prototype.myFill = function(value, start = 0, end = this.length) {
    if (start < 0) {
        start = Math.max(this.length + start, 0)
    }
    if (end < 0) {
        end = Math.min(this.length + end, this.length)
    }
    for (let i = start; i < end; i++) {
        this[i] = value
    }
    return this
}

//One example:
let arr = [1, 2, 3, 4, 5]
console.log(arr.myFill(0, 2, 4)) //=>  [1, 2, 0, 0, 5]