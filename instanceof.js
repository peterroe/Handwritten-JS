/**
 * @description: judge one object is instance of other object
 */

function instaceofBuild(child, father) {
    const fp = father.prototype
    let cp = child.__proto__
    while (cp) {
        if (fp == cp) {
            return true
        }
        cp = cp.__proto__
    }
    return false
}

//One example:
instaceofBuild(new Function(), Object)