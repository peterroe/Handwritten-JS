Array.prototype.myReduce = function(cb, initValue) {
    let pre = this[0],
        index = 1
    if (initValue) {
        pre = initValue
        index = 0
    }
    for (let i = index; i < this.length; i++) {
        pre = cb(pre, this[i], i, this)
    }
    return pre
}


//One example:
let arr = [1, 2, 3]
arr.myReduce((pre, cur) => pre + cur, 1) //=> 7
arr.myReduce((pre, cur) => pre + cur) //=> 6