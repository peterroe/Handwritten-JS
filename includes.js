/**
 * @description: 0 的值将全部视为相等，与符号无关（即 -0 与 0 和 +0 相等），但 false 不被认为与 0 相等. 但NaN认为相等
 */
Array.prototype.myIncludes = function(value, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = Math.max(this.length + fromIndex, 0)
    }
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === value || Number.isNaN(this[i]) && Number.isNaN(value)) {
            return true
        }
    }
    return false
}

//One example:
let arr = [1, 2, 3, 4, 5]
arr.myIncludes(3) //=> true