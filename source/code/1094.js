/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  //  用一个数组记录路程上人数的差分(每到一个点时要发生的偏移量)
  // arr下标：路程，value：车上变动人数
  const arr = new Array(1001).fill(0)
  for (let i = 0; i < trips.length; i++) {
    // 上车变动
    arr[trips[i][1]] += trips[i][0]
    // 下车变动
    arr[trips[i][2]] -= trips[i][0]
  }
  // 车向前行驶，变动后的人数大于座位数就说明有问题
  let nums = 0
  for (let i = 0; i < arr.length; i++) {
    nums += arr[i]
    if (nums > capacity) {
      return false
    }
  }
  return true
};