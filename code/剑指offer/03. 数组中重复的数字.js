/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let map = new Map()
    for (let val of nums) {
        if (map.has(val)) {
            return val
        } else {
            map.set(val, true)
        }
    }
    return 0
};