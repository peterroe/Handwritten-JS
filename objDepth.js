function getObjectDepth(o) {
    let depth = 1

    function find(obj, level) {
        if (Array.isArray(obj)) {
            obj.forEach(item => {
                find(item, level)
            })
            return
        }
        for (let key in obj) {
            depth = Math.max(depth, level)
            if (typeof obj[key] == 'object') {
                find(obj[key], level + 1)
            }

        }
    }

    find(o, 1)
    return depth
}


//One example: 
console.log(getObjectDepth({
    f: {
        d: {
            name: [1, 3, { h: 4 }, 6, 7],
            yh: 4
        }
    }
}))