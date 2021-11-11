/**
  @description: Trigger a function after the event triggers for a certain time
*/

function debounce(fn, delay) {
    let timeout = null
    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => { // When triggered again, it will be timed again
            fn()
        }, delay)
    }
}


//One example:
function fn() {
    console.log('wait 1s')
}
window.onmousemove = debounce(fn, 1000)