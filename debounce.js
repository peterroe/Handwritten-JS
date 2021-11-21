/**
 * 防抖意味着：我希望稳定一段时间后再执行相应的代码
 */

function debounce(fn, delay) {
    let timeout = null
    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn()
        }, delay)
    }
}


//One example:
function fn() {
    console.log('wait 1s')
}
window.onmousemove = debounce(fn, 1000)