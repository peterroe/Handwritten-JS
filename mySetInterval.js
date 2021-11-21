/**
 * setTimeout 实现 setInterval
 */

function mySetInterval(fn, delay) {
    const cycle = () => {
        setTimeout(() => {
            fn()
            cycle()
        }, delay)
    }
    cycle()
}

function mySetIntervalPlus(fn, delay) {
    let time
    const cycle = () => {
        time = setTimeout(() => {
            fn()
            cycle()
        }, delay)
    }
    cycle()
    return {
        myClearInterval() {
            clearTimeout(time)
        }
    }
}

//One example: 
mySetInterval(console.count, 1000)

//One example:
let { myClearInterval } = mySetIntervalPlus(console.count, 1000)