/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] !== 0) {
    return -1
  }
  function check([x, y], [nx, ny]) {
    const tx = x + nx
    const ty = y + ny
    // 超出边界
    if (tx < 0 || tx >= grid.length || ty < 0 || ty >= grid.length) {
      return false
    }
    // 值不是0
    if (grid[tx][ty] !== 0) {
      return false
    }
    return [tx, ty]
  }
  // BFS
  let min = null
  const list = [{ position: [0, 0], deep: 1 }]
  grid[0][0] = 2
  while (list.length) {
    const cur = list.shift()
    // 如果是[n-1,n-1]更新最短深度
    if (cur.position[0] === grid.length - 1 && cur.position[1] === grid.length - 1) {
      if (min) {
        min = Math.min(cur.deep, min)
      } else {
        min = cur.deep
      }
    }
    // 检查当前8个方向上是否存在路径，存在存入list中
    [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]].forEach(dir => {
      const nextPosition = check(cur.position, dir)
      // 访问过就污染它
      if (nextPosition) {
        list.push({ position: nextPosition, deep: cur.deep + 1 })
        grid[nextPosition[0]][nextPosition[1]] = 2
      }
    })
  }
  return min ? min : -1
};
shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]])