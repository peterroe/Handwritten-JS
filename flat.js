/**
 * @description: 打平一层数组
 * 利用concat的自带打平一层的能力，配合reduce完成
 */
function flatArray(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(cur)
    }, [])
}

//One example:
console.log(flatArray([1, 2, [3, 4, [5], 3], 5]))

/**
 * @description: 打平所有内容
 * 递归即可
 */
function flatArrayAll(arr) {
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return pre.concat(flatArrayAll(cur))
        } else {
            return pre.concat(cur)
        }
    }, [])
}

console.log(flatArrayAll([1, [3, [4, [5, [4]]], 3], 5]))

/**
 * @description: 打平自定义层数
 * 记录层数即可
 */
function flatArrayN(arr, n) {
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur) && n >= 1) {
            return pre.concat(flatArrayN(cur, n - 1))
        } else {
            return pre.concat(cur)
        }
    }, [])
}

console.log(flatArrayN([1, [3, [4, [5, [4]]], 3], 5], 1))