/**
 * @description: setTimeout realize setInterval
 */

function mYsetInterval(fn, delay) {
    const cycle = () => {
        setTimeout(() => {
            fn()
            cycle()
        }, delay)
    }
    cycle()
}

//One example: 
mYsetInterval(console.count, 1000)