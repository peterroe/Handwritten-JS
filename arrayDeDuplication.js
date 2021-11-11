/**
 * @description: remove the same element in array
 */

function remove(array) {
    let result = []
    let map = new Map()
    array.forEach((item) => {
        if (!map.has(item)) { //without current element,record it
            result.push(item)
            map.set(item, 1)
        }
    })
    return result
}

function removeBrief(array) {
    return [...new Set(array)]
}

//One example:
remove([1, 2, 2, 3, 1]) //=> [1,2,3]
removeBreif([1, 2, 2, 3, 1]) //=> [1,2,3]