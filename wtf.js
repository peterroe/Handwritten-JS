let a = {
    i: 1,
    toString() {
        return a.i++
    }
}
console.log(a == 1 && a == 2 && a == 3) //=>true


let b = [1, 2, 3]
b.join = b.shift
console.log(b == 1 && b == 2 && b == 3) //=>true


let value = 1
Object.defineProperty(global, 'c', { //window in browser ,and  global in nodeJs
    get() {
        return value++
    }
})
console.log(c == 1 && c == 2 && c == 3) //=>true