/**
 * @description copy object,array,number,string,boolean
 * @param {*} target data to copy
 * @param {*} map store used obj
 * @returns 
 */
function cloneDeep(target, map = new Map()) { //Basic Edition
    if (typeof target === 'object') {
        let o = Array.isArray(target) ? [] : {}

        if (map.get(target)) {
            return map.get(target)
        } else {
            map.set(target, o)
        }

        for (let key in target) {
            o[key] = cloneDeep(target[key], map)
        }
        return o

    } else {
        return target
    }
}

//One example:
let x = {
    len: '12',
    hobby: [20, {
        text: 'array'
    }]
}
x.x = x
console.log(cloneDeep(x))