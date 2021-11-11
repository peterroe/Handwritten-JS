/**
 * @description: function fires only once in a certain period of time
 */

function throttle(fn, delay) {
    let canRun = true
    return function() {
        if (!canRun) return //intercept it if setTimeout working

        canRun = false
        setTimeout(() => {
            fn()
            canRun = true
        }, delay)
    }
}

//One exmple:
function fn() {
    console.log('moving')
}
window.onmousemove = throttle(fn, 2000)