/**
 * @param {character[][]} grid
 * @return {number}
 */
// 1、可以使用并查集去解决
class UnionFind {
  constructor() {
    this.parents = {}
    this.count = 0
  }
  // 加入并查集
  setItem(x) {
    this.parents[x] = x
    this.count++
  }
  union(a, b) {
    const aRoot = this.find(a)
    const bRoot = this.find(b)
    // 两个节点已经相连了不必相连
    if (aRoot === bRoot) {
      return
    }
    this.parents[bRoot] = aRoot
    this.count--
  }
  find(x) {
    while (this.parents[x] !== x) {
      x = this.parents[x]
    }
    return x
  }
  getSize() {
    return this.count
  }
}
var numIslands = function (grid) {
  const rowLength = grid.length
  const colLength = grid[0].length
  const uf = new UnionFind()
  // 把所有岛屿都加入并查集
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (grid[row][col] === '1') {
        uf.setItem(`${row},${col}`)
      }
    }
  }
  // 从左上角遍历，判断当前节点的右边和下边节点是不是岛屿，是的话连接两个节点
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (grid[row][col] === '1') {
        if (row + 1 < rowLength && grid[row + 1][col] === '1') {
          uf.union(`${row},${col}`, `${row + 1},${col}`)
        }
        if (col + 1 < colLength && grid[row][col + 1] === '1') {
          uf.union(`${row},${col}`, `${row},${col + 1}`)
        }
      }
    }
  }
  return uf.getSize()
};

console.log(numIslands(
  [["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]]))
