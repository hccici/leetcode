/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return []
  }
  // 模拟一个人在走路，当前位置为positon
  const position = {
    x: 0,
    y: 0
  }
  // 假设有4堵墙(上右下左)，限制人的走动，并且人每次转向，对应方向的墙会向前移动
  let walls = [-1, matrix[0].length, matrix.length, -1]
  // 人可以移动的方向（左到右、上到下、右到左、下到上）
  let dirctions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  // 人当前的移动方向
  let curDirct = 0
  // 需要移动的步数
  let steps = matrix[0].length * matrix.length
  // 记录移动输出
  let result = []
  // 移动一步
  function move() {
    let of = cal()
    position.x += of[0]
    position.y += of[1]
  }
  // 计算下一步移动
  function cal() {
    // 下一偏移量
    let offset = dirctions[curDirct]
    const nextX = position.x + offset[0]
    const nextY = position.y + offset[1]
    // 判断是否被4面强限制，需不需要转向
    if (nextX === walls[0] || nextX === walls[2] || nextY === walls[1] || nextY === walls[3]) {
      // 更新墙
      if (curDirct === 0 || curDirct === 3) {
        walls[curDirct]++
      } else {
        walls[curDirct]--
      }
      // 更新方向
      curDirct = (curDirct + 1) % 4
      // 更新偏移量
      offset = dirctions[curDirct]
    }
    return offset
  }
  while (steps > 0) {
    result.push(matrix[position.x][position.y])
    move()
    steps--
  }
  return result
};
spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])