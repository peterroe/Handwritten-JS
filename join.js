Array.prototype.myJoin = function(sign) {
    let s = ''
    for (let i = 0; i < this.length - 1; i++) {
        s = s + this[i] + ';'
    }
    s += this[this.length - 1]
    return s
}

//One example:
let arr = [1, 2, 3, 4]
arr.myJoin(';') //=> '1;2;3;4'