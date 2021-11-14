function currying(fn, ...initArgs) {
    const len = fn.length
    let recordArgs = [...initArgs]
    let res = (...nextArgs) => {
        recordArgs = [...recordArgs, ...nextArgs]
        if (recordArgs.length == len) { //if quantity of args equal to fn's length
            return fn(...recordArgs)
        } else {
            return res
        }
    }
    return res
}

//one example:
let fn = (a, b, c) => a + b + c
let a = currying(fn, 1)
a(2, 3) //=> 6