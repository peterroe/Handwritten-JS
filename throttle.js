/**
 * 节流意味着：我希望在一段时间内只执行一次我的代码
 */

function throttle(fn, delay) {
    let canRun = true
    return function() {
        if (!canRun) return

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