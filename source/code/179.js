/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // 不要从从位考虑,那样就比较麻烦了
  // 因为最终的结果是固定的，即每个元素都会出现在它最适合的位置，所以这就是个排序问题
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 通过比较两两组合后的结果,给他们进行换位（因为ab>ba的话,a_b永远大于b_a,无论_是什么）
      let t1 = +(nums[i].toString() + nums[j].toString())
      let t2 = +(nums[j].toString() + nums[i].toString())
      if (t1 < t2) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums[0] ? nums.join('') : '0'
};
largestNumber([3, 30, 34, 5, 9])