/**
 * 组合连接多个函数
 */

function compose(...fns) {
    if (fns.length == 0) return (num) => num
    if (fns.length == 1) return fns[0]
    return fns.reduce((pre, cur) => {
        return (num) => {
            return cur(pre(num))
        }
    })
}

//one example:
function f1(s) {
    return parseInt(s, 10)
}

function f2(s) {
    return s * 100 + 'cm'
}

function f3(s) {
    return s * 10 + 'dm'
}

const mToCm = compose(f1, f2)
mToCm("10m") //=> "1000cm"
mToCm("1m") //=> "100cm"
const mToDm = compose(f1, f3)
mToDm("10m") //=> "100dm"
mToDm("1m") //=> "10dm"