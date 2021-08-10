/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function (A) {
  const rows = A.length
  const cols = A[0].length
  // 记录当前岛的边缘节点
  let border = []
  //  首先找到任一岛的节点，然后进行dfs，找到岛的边缘节点
  for (let i = 0; i < rows; i++) {
    if (A[i].includes(1)) {
      let t = A[i].indexOf(1)
      dfs(i, t)
      break
    }
  }
  function dfs(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return
    }
    // 访问过的不再访问
    if (A[row][col] === 2) {
      return
    }
    // 碰到0就是到了岛的边缘，记录下来并且不再进行访问
    if (A[row][col] === 0) {
      A[row][col] = 2
      border.push([row, col])
      return
    }
    // 访问染色
    A[row][col] = 2
    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }
  let count = 0
  let flag = true
  // 向外扩张并记录扩张后的岛的边缘节点
  function preVist(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || A[row][col] === 2) {
      return false
    }
    // 碰到了另一座岛
    if (A[row][col] === 1) {
      flag = false
      return false
    }
    A[row][col] = 2
    return true
  }
  function expend(border) {
    const newBorder = []
    while (border.length && flag) {
      let [row, col] = border.pop()
      preVist(row + 1, col) && newBorder.push([row + 1, col])
      preVist(row - 1, col) && newBorder.push([row - 1, col])
      preVist(row, col + 1) && newBorder.push([row, col + 1])
      preVist(row, col - 1) && newBorder.push([row, col - 1])
    }
    count++
    return newBorder
  }
  while (flag) {
    border = expend(border)
  }
  return count
};
shortestBridge([[0, 1, 0], [0, 0, 0], [0, 0, 1]])
