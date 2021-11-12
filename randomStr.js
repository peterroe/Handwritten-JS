/**
 * @description: generate random string, [0-9a-z]
 */

function generateRandomStr() {
    return Math.random().toString(36).slice(2)
}

generateRandomStr() //=> trv5gbksol