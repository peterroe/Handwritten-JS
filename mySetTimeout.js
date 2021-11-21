/**
 * setInterval 实现 setTimeout
 */

function mySetTimeout(fn, delay) {
    let time = setInterval(() => {
        fn()
        clearInterval(time)
    }, delay)
}

function mySetIntervalPlus(fn, delay) {
    let time = setInterval(() => {
        fn()
        clearInterval(time)
    }, delay)

    return () => {
        clearInterval(time)
    }
}

//One example: 
mySetTimeout(() => {
    console.log('hello')
}, 1000)

//One example:
let myClearTimeout = mySetIntervalPlus(() => {
    console.log('hello')
}, 1000)

myClearTimeout()