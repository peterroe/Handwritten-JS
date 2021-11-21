/**
 * 生成随机字符串, [0-9|a-z]
 */

function generateRandomStr() {
    return Math.random().toString(36).slice(2)
}

generateRandomStr() //=> trv5gbksol (maybe)