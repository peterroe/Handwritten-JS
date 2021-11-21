/**
 * 发布订阅模式
 */
class EventEmitter {
    constructor() {
        this.cache = {}
    }
    on(name, fun) {
        if (this.cache[name]) {
            this.cache[name].push(fun)
        } else {
            this.cache[name] = [fun]
        }
    }
    off(name, fun) {
        if (!this.cache[name]) {
            return
        }
        let targetIndex = this.cache[name].findIndex(item => item == fun)
        if (targetIndex != -1) {
            this.cache[name].split(targetIndex, 1)
        }
    }
    emit(name, ...args) {
        for (let fn of this.cache[name]) {
            fn(...args)
        }
    }
}


//One example:
let ev = new EventEmitter()

ev.on('click', () => {
    console.log('you click!')
})

setTimeout(() => {
    ev.emit('click')
}, 1000)