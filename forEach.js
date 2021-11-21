Array.prototype.myForEach = function(cb, o) {
    for (let i = 0; i < this.length; i++) {
        cb.call(o, this[i], i, this)
    }
}


//One example: 
let a = [2, 1, 23, 5, 6]
let c = {
    b: 32
}
a.myForEach(function(item, index, arr) {
    console.log(this.b, item, index, arr)
}, c)