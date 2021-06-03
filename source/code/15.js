/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    // 不满足个数直接返回
    if (!nums || nums.length < 3) {
        return result
    }
    // 先从小到大排好序
    nums.sort((a, b) => {
        return a - b
    })
    for (let ci = 0; ci < nums.length; ci++) {
        // 提前退出循环
        if (nums[ci] > 0) { break }
        // !去重
        if (ci > 0 && nums[ci - 1] === nums[ci]) {
            continue
        }
        let li = ci + 1;
        let ri = nums.length - 1;
        while (ri > li) {
            let sum = nums[ci] + nums[li] + nums[ri];
            if (sum > 0) {
                ri--
            } else if (sum < 0) {
                li++
            } else {
                result.push([nums[ci], nums[li], nums[ri]])
                // !去重
                while (ri > li && nums[ri] === nums[ri - 1]) {
                    ri--
                }
                // !去重
                while (ri > li && nums[li] === nums[li + 1]) {
                    li++
                }
                ri--
                li++
            }
        }
    }
    return result
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))