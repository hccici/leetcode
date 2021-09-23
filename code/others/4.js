class TicketSystem {
  constructor(arr) {
    this.cabins = arr.map(num => {
      return {
        remain: num,
        seat: new Array(num).fill(false),
        awaitList: []
      }
    })
    this.order = {} // 'finish' 'await' 'cancel'
  }
  book(orderId, cabinId, seatNum, pass) {
    const curCabin = this.cabins[cabinId]
    // pass存在不依赖awaitList判断
    if ((pass ? false : curCabin.awaitList.length > 0) || seatNum > curCabin.remain) {
      curCabin.awaitList.push({ orderId, cabinId, seatNum })
      this.order[orderId] = {
        status: 'await',
        cabinId
      }
      console.log(false)
      return false
    }
    let minSeat
    const seatInfo = [];
    const continueSeat = this._hasContinueSeat(curCabin.seat, seatNum)
    if (continueSeat) {
      const { start } = continueSeat
      minSeat = start
      for (let i = start; i < start + seatNum; i++) {
        curCabin.seat[i] = true
        seatInfo.push(i)
      }
    } else {
      let change = 0
      curCabin.seat.forEach((status, i) => {
        if (!status && change < seatNum) {
          if (minSeat !== 0 && !minSeat) {
            minSeat = i
          }
          curCabin.seat[i] = true
          seatInfo.push(i)
          change++
        }
      })
    }
    curCabin.remain -= seatNum
    this.order[orderId] = {
      status: 'finish',
      seat: minSeat,
      seatInfo,
      cabinId,
      seatNum
    }
    if (!pass) {
      console.log(true)
    }
    return true
  }
  cancel(orderId) {
    const curOrder = this.order[orderId]
    if (!curOrder || curOrder.status === 'cancel') {
      console.log(false)
      return false
    }
    // 更新船舱信息（包括候补队列）
    const { seatInfo, cabinId, seatNum } = curOrder
    const curCabin = this.cabins[cabinId]
    if (curOrder.status === 'finish') {
      seatInfo.forEach(seatId => {
        curCabin.seat[seatId] = false
      })
      curCabin.remain += seatNum
    }
    if (curOrder.status === 'await') {
      let deletIndex
      curCabin.awaitList.forEach((item, i) => {
        if (item.orderId === orderId) {
          deletIndex = i
        }
      })
      curCabin.awaitList.splice(deletIndex, 1)
    }
    this._handleAwait(curCabin.awaitList)
    curOrder.status = 'cancel'
    console.log(true)
    return true
  }
  // 处理等待队列
  _handleAwait(awaitList) {
    if (awaitList.length > 0) {
      const { orderId, cabinId, seatNum } = awaitList.shift()
      const bookRes = this.book(orderId, cabinId, seatNum, true)
      if (bookRes) {
        this._handleAwait(awaitList)
      }
    }
  }
  // 是否有连续座位号
  _hasContinueSeat(arr, num) {
    const record = []
    let pen = false
    arr.forEach((s, i) => {
      if (!pen && !s) {
        pen = true
        record.push(i)
      }
      if (pen && s) {
        pen = false
        record.push(i - 1)
      }
      if (i === arr.length - 1 && !s) {
        record.push(i)
      }
    })
    for (let i = 0; i < record.length; i += 2) {
      let j = i + 1
      if (j < record.length) {
        let l = record[j] + 1 - record[i]
        if (l >= num) {
          return {
            start: record[i]
          }
        }
      }
    }
    return false
  }
  query(orderId) {
    const curOrder = this.order[orderId]
    const res = (curOrder && curOrder.status === 'finish') ? curOrder.seat : -1
    console.log(res)
    return res
  }
}
const obj = new TicketSystem([10, 1]); // 初始化座位数量，舱位 0~1 分别有 10、1 个座位；
obj.book(71, 0, 2); // 预订成功，座位编号连续，为 [0,1]，返回 true；
obj.book(73, 0, 10); // 余票不足，预订失败进入候补队列，返回 false；
obj.book(72, 0, 2); // 余票足够但候补队列非空，预定失败进入候补队列，返回 false；
obj.query(72); // 返回 -1；
obj.book(74, 0, 2); // 返回 false；
obj.cancel(73); // 取消订单成功，处理候补队列订单：队首订单 72 预约成功，座位编号为 [2,3]；订单 74 预约成功，座位编号为 [4,5]，返回 true；
obj.query(74); // 返回 4；
obj.query(72); // 返回 2；
obj.cancel(72); // 取消订单成功，候补队列为空无需处理，返回 true；
obj.book(75, 0, 3); // 返回 true，座位连续优先，座位编号为 [6,7,8]；
obj.query(75); // 返回 6；
obj.cancel(75); // 返回 true；
obj.book(76, 0, 2); // 返回 true，座位编号为 [2,3]；
obj.book(77, 0, 2); // 返回 true，座位编号为 [6,7]；
obj.cancel(76); // 返回 true；
obj.book(78, 0, 3); // 返回 true，无连续座位，座位编号为 [2,3,8]；
obj.query(78); // 返回订单 78 最小的座位编号 2；