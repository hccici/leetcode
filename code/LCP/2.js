/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {
  // 记录每次计算的结果
  let temp = [cont[cont.length - 1], 1]
  // 更新记录
  for (let i = cont.length - 2; i >= 0; i--) {
    temp = [temp[1] + cont[i] * temp[0], temp[0]]
  }
  return temp
};
fraction([3, 2, 0, 2])