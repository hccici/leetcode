function getPassTime(arriveList, directionList) {
  const result = new Array(arriveList.length).fill(0)
  function People(id, arrive, direction) {
    this.id = id
    this.arrive = arrive
    this.direction = direction
  }
  // 根据到达时间分类
  let set = {}
  for (let i = 0; i < arriveList.length; i++) {
    const people = new People(i, arriveList[i], directionList[i])
    if (set[people.arrive]) {
      set[people.arrive].push(people)
    } else {
      set[people.arrive] = [people]
    }
  }

  // 有两个队列，一个进站，一个出站
  const inQ = []
  const outQ = []
  let count = arriveList.length // 待通过闸门的人数
  let time = 0// 时间逐渐增加
  let curD = 1 // 当前方向
  // 把该时间点到达的人员安排进入队列
  function pushQueue(time) {
    if (set[time]) {
      set[time].forEach(item => {
        if (item.direction === 0) {
          outQ.push(item)
        } else {
          inQ.push(item)
        }
      })
    }
  }
  function doPass(time, queque) {
    const passPeople = queque.shift()
    result[passPeople.id] = time
    curD = passPeople.direction
    count--
  }
  function pass(time) {
    if (inQ[0] && outQ[0]) {
      // 要进来的人和要出去的人同时存在
      if (curD === 1) {
        doPass(time, inQ)
      } else {
        doPass(time, outQ)
      }
    } else if (inQ[0]) {
      // 要进来的人存在，出去的不存在
      doPass(time, inQ)
    } else if (outQ[0]) {
      // 要出去的存在，进来的不存在
      doPass(time, outQ)
    } else {
      // 都不存在， do nothing
    }
  }

  while (count > 0) {
    pushQueue(time)
    pass(time)
    time++
  }
  return result
}
console.log(getPassTime([0, 0, 1, 5, 5], [0, 1, 1, 0, 0]))