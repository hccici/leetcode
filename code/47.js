/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // 因为对于dfs过的数没必要在进行dfs了（子集也是一样的），直接减支就行。为了跳过重复数字，我们对数组进行排序，对比上一dfs的（pop出来），就知道要不要dfs当前元素了。（子集也是一样）
  nums.sort()
  const result = []
  function dfs(path) {
    // 出口
    if (path.length === nums.length) {
      result.push(path.map(index => nums[index]))
      return
    }
    // 循环递归
    let pop // 记录上一元素
    for (let i = 0; i < nums.length; i++) {
      // 因为这里有相同元素。所以不直接储存值，而是储存下标
      if (nums[i] === pop || path.includes(i)) { // 如果路径已添加或者即将访问的元素和之前访问的元素一样，直接continue，尝试下一元素
        continue
      }
      path.push(i)
      // 递归
      dfs(path)
      // 弹出
      let popIndex = path.pop()
      pop = nums[popIndex]
    }
  }
  dfs([])
  return result
};