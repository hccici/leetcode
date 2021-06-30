/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const arr = s.split('')
  let result = []
  function dfs(path, indexList) {
    if (path.length === arr.length) {
      const str = path.join('')
      if (!result.includes(str)) {
        result.push(str)
      }
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if (!indexList.includes(i)) {
        path.push(arr[i])
        indexList.push(i)
        dfs(path, indexList)
        path.pop()
        indexList.pop()
      }
    }
  }
  dfs([], [])
  return result
};
permutation("aab")