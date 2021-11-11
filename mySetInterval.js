/**
 * @description: setTimeout realize setInterval
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

function mySetIntervalPlus(fn, delay) { // cancel setInterval
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
    //wait sometime,then run:
myClearInterval()