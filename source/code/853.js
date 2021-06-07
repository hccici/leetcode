/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
class Car {
  constructor(target, position, speed) {
    this.costTime = (target - position) / speed
    this.position = position
    this.speed = speed
  }
}
var carFleet = function (target, positionList, speedList) {
  // 计算假设车辆未受影响，达到终点花费的时间
  const list = []
  for (let i = 0; i < positionList.length; i++) {
    list.push(new Car(target, positionList[i], speedList[i]))
  }
  // 依据距终点的距离对车辆进行降序排序
  list.sort((a, b) => {
    return b.position - a.position
  })
  // 每影响到一个，车队数量就减1
  let count = list.length
  // 从距离终点最近的车a开始遍历，如果它的后一辆车b花费的时间<=a,说明b会被a影响，更改b花费的时间为a的时间
  // 因为是不允许超车的，所以相邻比较就好了
  for (let i = 1; i < list.length; i++) {
    if (list[i].costTime <= list[i - 1].costTime) {
      list[i].costTime = list[i - 1].costTime
      count--
    }
  }
  return count
};
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]))