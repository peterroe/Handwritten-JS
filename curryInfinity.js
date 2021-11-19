function curryInfinity(fun, ...args) {
    let tempArgs = [...args]

    let res = (...args2) => {
        if (args2.length) {
            tempArgs = [...tempArgs, ...args2]
            return res
        } else {
            return fun(...tempArgs)
        }
    }

    return res
}


//One example:
const add = (...args) => {
    return args.reduce((pre, cur) => pre + cur, 0)
}

let consumer = curryInfinity(add, 2)(1, 4)(3)
consumer = consumer(3, 5)
console.log(consumer()) //=> 18