function flatObject(obj) {
    let isObject = (val) => typeof val == 'object' && val != null
    let res = {}

    function dfs(cur, prefix = '.') {
        console.log(cur)
        if (isObject(cur)) {
            if (Array.isArray(cur)) {
                cur.forEach((item, index) => {
                    dfs(item, `${prefix}[${index}]`)
                })
            } else {
                for (let key in cur) {
                    if (prefix) {
                        dfs(cur[key], `${prefix}.${key}`)
                    } else {
                        dfs(cur[key], `${prefix}${key}`)
                    }
                }
            }
        } else {
            res[prefix] = cur
        }
    }
    dfs(obj, '')
    return res
}


//One example:
console.log(flatObject({
        a: {
            b: 21
        },
        c: [1, 3, 5, 5],
        f: [2, 4, { y: 4, u: 6 }]
    }))
    // {
    //     'a.b': 21,
    //     'c[0]': 1,
    //     'c[1]': 3,
    //     'c[2]': 5,
    //     'c[3]': 5,
    //     'f[0]': 2,
    //     'f[1]': 4,
    //     'f[2].y': 4,
    //     'f[2].u': 6
    // }