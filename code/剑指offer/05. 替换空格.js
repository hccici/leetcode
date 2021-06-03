/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    let sArr = s.split('')
    let oldL = sArr.length
    let conunt = 0
    for (let val of sArr) {
        if (val === ' ') {
            conunt++
        }
    }
    let newArr = sArr.concat(new Array(conunt * 2))
    let newL = newArr.length
    let j = newL - 1
    for (let i = oldL - 1; i >= 0; i--) {
        if (newArr[i] !== ' ') {
            newArr[j] = newArr[i]
            j--
        } else {
            newArr[j] = '0'
            newArr[j - 1] = '2'
            newArr[j - 2] = '%'
            j -= 3
        }
    }
    return newArr.join('')
};
console.log(replaceSpace("We are happy."))