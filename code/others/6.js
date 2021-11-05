class BookingSystem {
  constructor() {
    // 实验室列表 [{labId: String, record: TimeRecord}]
    this.labList = []
    // 预定记录 {recordId: {lab实例, startTime, endTime}}
    this.recordMap = {}
  }
  addLab(lid, st, et) {
    const lab = this._hasLab(lid)
    if (lab) {
      if (lab.record.isOverlap(st, et)) {
        return false
      } else {
        lab.record.add(st, et)
        return true
      }
    } else {
      this.labList.push({
        labId: lid,
        record: new TimeRecord(st, et)
      })
      return true
    }
  }
  bookTime(rid, st, et) {
    const lab = this._hasCanUseLab(st, et)
    if (lab) {
      // 记录
      this.recordMap[rid] = { lab: lab, st, et }
      // 占用
      lab.record.use(st, et)
      return lab.labId
    } else {
      return -1
    }
  }
  cancelBooking(rid) {
    const record = this.recordMap[rid];
    if (record) {
      const lab = record.lab
      // 释放
      lab.record.cancel(record.st, record.et)
      // 清空记录
      this.recordMap[rid] = undefined;
      return true
    } else {
      return false
    }
  }
  /**
   * @description: 查询是否有实验室
   * @param {String} labId
   * @return {Object} lab实例
   */
  _hasLab(labId) {
    return this.labList.find(item => {
      return item.labId === labId
    })
  }
  /**
   * @description: 是否有可用的实验室
   * @param {Number} st 查询起始时间
   * @param {Number} et 查询结束时间
   * @return {Object} lab实例
   */
  _hasCanUseLab(st, et) {
    return this.labList.find(lab => {
      return lab.record.canUse(st, et)
    })
  }
}
class TimeRecord {
  // 0 可预订 1 已预订 2 不可预定
  constructor(st, et) {
    this.time = new Array(100).fill(2)
    this.add(st, et)
  }
  add(st, et) {
    this._modify(st, et, 0)
  }
  use(st, et) {
    this._modify(st, et, 1)
  }
  cancel(st, et) {
    this._modify(st, et, 0)
  }
  _modify(st, et, status) {
    for (let i = st; i < et; i++) {
      this.time[i] = status
    }
  }
  isOverlap(st, et) {
    return this.time.slice(st, et).some(item => item !== 2)
  }
  canUse(st, et) {
    return this.time.slice(st, et).every(item => item === 0)
  }
}

const obj = new BookingSystem(); // 返回 null 表示无输出
console.log(obj.addLab(2, 8, 17)); // 返回 true
console.log(obj.addLab(2, 2, 10)); // 与已有开放时段重叠，返回 false
console.log(obj.addLab(2, 17, 30)); // 添加后开放时段为[8,30)，返回 true
console.log(obj.bookTime(1, 9, 28)); // 返回 2
console.log(obj.cancelBooking(1)); // 返回 true（时段释放可再被预约）
console.log(obj.addLab(6, 1, 30)); // 返回 true
console.log(obj.bookTime(13, 8, 27)); // 此时段可被预约的实验室编号为 2、6，但由于其中最早添加到系统的实验室为 2 号实验室，故返回 2
console.log(obj.bookTime(9, 26, 30)); // 由于实验室 2 的未预约时段为[27,30)，所以预约不上，只能预约到实验室 6，故返回 6
console.log(obj.cancelBooking(10)); // 不存在编号为 10 的预约记录，取消失败，返回 false