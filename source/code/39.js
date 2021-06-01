/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []
  function dfs(path, index) {
    const sum = path.reduce((prev, next) => {
      return prev + next
    }, 0)
    if (sum > target) {
      return
    }
    if (sum === target) {
      result.push([...path])
      return
    }
    for (let i = index; i < candidates.length; i++) {
      path.push(candidates[i])
      dfs(path, i)
      path.pop()
    }
  }
  dfs([], 0)
  return result
};
combinationSum([2, 3, 6, 7], 7)