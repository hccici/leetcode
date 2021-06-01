/* 并查集技巧
1、用数组保存连接信息。
2、数组的下标对应a节点，值对应a节点的连接的根节点。
3、如果两个节点相连，让它们的根节点相连。
*/
var findCircleNum = function (isConnected) {
  const { length } = isConnected
  // 创建数组记录联通信息，刚开始时，节点的根节点就是自己
  const info = new Array(length).fill(0).map((item, index) => index)
  function union(index1, index2) {
    // 如果两个节点相连，让它们的根节点相连
    info[find(index1)] = find(index2)
  }
  function find(index) {
    if (info[index] === index) {
      return info[index]
    } else {
      return find(info[index])
    }
  }
  // 因为是分两部分的(记录相同)，所以关注上半部分就好
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (isConnected[i][j] === 1) {
        // 连接两个节点
        union(i, j)
      }
    }
  }
  // 是自己指向自己的就是一个单独的
  let count = 0
  for (let i = 0; i < info.length; i++) {
    if (i === info[i]) {
      count++
    }
  }
  return count
}
findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])