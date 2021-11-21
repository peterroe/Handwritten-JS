/**
 * Least recently used 最近最少使用
 */

class lruMap {
    constructor(size) {
        this.size = size
        this.cache = new Map()
    }

    get(key) {
        const hasKey = this.cache.has(key)
        if (hasKey) {
            const val = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, val)
            return val
        }
    }

    set(key, val) {
        const hasKey = this.cache.has(key)
        if (hasKey) {
            this.cache.delete(key)
        }
        this.cache.set(key, val)

        if (this.cache.size > this.size) {
            this.cache.delete(this.cache.keys().next().value)
        }
    }
}

class lruSet {
    constructor(size) {
        this.size = size
        this.cache = new Set()
    }

    get() {
        return [...this.cache.values()][this.cache.size - 1]
    }

    add(val) {
        const hasVal = this.cache.has(val)
        if (hasVal) {
            this.cache.delete(val)
        }
        this.cache.add(val)

        if (this.cache.size > this.size) {
            this.cache.delete(this.cache.values().next().value)
        }
    }
}


//One example:
let m = new lruMap(3)
m.set('bow', '弓')
m.get('bow') //=> '弓'
m.set('bow', '鞠躬')
m.get('bow') //=> '鞠躬'


//One example:
let s = new lruSet(3)
s.add(1)
s.add(3)
s.get() //=> 3
s.add(1)
s.get() //=> 1