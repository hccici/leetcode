/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
/* var guessNumber = function (n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    let lp = 0;
    let rp = arr.length - 1
    while (lp <= rp) {
        let mp = Math.floor((lp + rp) / 2)
        const res = guess(arr[mp])
        if (res === -1) {
            rp = mp - 1
        } else if (res === 1) {
            lp = mp + 1
        } else {
            return arr[mp]
        }
    }
}; */
// 因为数组会超出限制所以就不用数组了
var guessNumber = function (n) {
    let lp = 1;
    let rp = n;
    while (lp <= rp) {
        let mp = Math.floor((lp + rp) / 2)
        const res = guess(mp)
        if (res === -1) {
            rp = mp - 1
        } else if (res === 1) {
            lp = mp + 1
        } else {
            return mp
        }
    }
};