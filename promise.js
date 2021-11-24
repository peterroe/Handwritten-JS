class MyPromise {
    constructor(executor) {
        this.initBind()
        this.initValue()
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
            this.state = 'reject'
        }
    }
    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    initValue() {
        this.value = undefined
        this.state = 'pending'
        this.fulfilledCallbacks = []
        this.rejectCallbacks = []
    }
    resolve(value) {
        if (this.state != 'pending') { // can't change state's value
            return
        }
        this.value = value
        this.state = 'fulfilled'

        while (this.fulfilledCallbacks.length) {
            let fn = this.fulfilledCallbacks.shift()
            fn(this.value)
        }
    }
    reject(value) {
        if (this.state != 'pending') {
            return
        }
        this.state = 'reject'
        this.value = value

        while (this.rejectCallbacks.length) {
            let fn = this.rejectCallbacks.shift()
            fn(this.value)
        }
    }
    then(onFulfilled, onReject) {

        onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : value => value
        onReject = typeof onReject == 'function' ? onReject : value => { throw (value) }


        if (this.state == 'fulfilled') {
            onFulfilled(this.state)
        } else if (this.state == 'reject') {
            onReject(this.state)
        } else if (this.state == 'pending') {
            this.fulfilledCallbacks.push(onFulfilled.bind(this))
            this.rejectCallbacks.push(onReject.bind(this))
        }
    }
}

new MyPromise((res, rej) => {
    setTimeout(() => {
        res('c')
    }, 2000)
}).then(value => {
    console.log(value)
})
setTimeout(() => {
    console.log(3)
}, 2000)