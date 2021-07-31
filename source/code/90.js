/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const len = nums.length
  const result = [[]]
  const map = {}
  // !执行之前先去进行排序，排序好之后就实现了去重
  nums.sort()
  function addByIndex(path, index) {
    for (let i = index; i < len; i++) {
      path.push(nums[i])
      if (path.length === step) {
        const curKey = path.join('')
        // 判断下标是否在一起组合过
        if (!map[curKey]) {
          map[curKey] = true
          result.push([...path])
        }
      } else {
        addByIndex(path, i + 1)
      }
      path.pop()
    }
  }
  let step = 1
  while (step <= len) {
    addByIndex([], 0)
    step++
  }
  addByIndex([], 0)
  return result
};
console.log(subsetsWithDup([4, 4, 4, 1, 4]))