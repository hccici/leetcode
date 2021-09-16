class DataMachineSystem {
  constructor(num) {
    this.machinesSet = new Array(num + 1).fill(1).map(() => new Machines)
  }
  transferData(mid1, mid2, id) {
    const maHas = this._hasData(mid1, id)
    maHas || (this._setData(mid1, id, mid1))
    const mbHas = this._hasData(mid2, id)
    if (mbHas) {
      return 0
    } else {
      this._setData(mid2, id, mid1)
      this._addContribution(mid2, id)
      return 1
    }
  }
  transferDataToAll(mid, id) {
    let nums = 0
    for (let i = 1; i < this.machinesSet.length; i++) {
      if (mid !== i) {
        nums += this.transferData(mid, i, id)
      }
    }
    return nums
  }
  queryContribution(mid) {
    return this.machinesSet[mid].contribution
  }
  /**
   * @description: 指定机器是否有该数据
   * @param {*} mid
   * @param {*} id
   * @return {boolean}
   */
  _hasData(mid, id) {
    return !!this.machinesSet[mid].dataSet[id]
  }
  /**
   * @description: 指定机器设置数据和来源
   * @param {*} mid1
   * @param {*} id
   * @param {*} mid2
   * @return {void}
   */
  _setData(mid1, id, mid2) {
    this.machinesSet[mid1].dataSet[id] = mid2
  }
  /**
   * @description: 向上递归，直到找到这条id的产生机器（来源是自己），一路上增加贡献值
   * @param {*} mid
   * @param {*} id
   * @return {void}
   */
  _addContribution(mid, id) {
    const preMid = this.machinesSet[mid].dataSet[id]
    if (preMid === mid) {
      return
    } else {
      this.machinesSet[preMid].contribution += 10
      this._addContribution(preMid, id)
    }
  }
}
class Machines {
  constructor() {
    this.contribution = 0
    this.dataSet = {}
  }
}
const sys = new DataMachineSystem(4)
console.log(sys.transferData(1, 2, 15))
console.log(sys.transferData(2, 3, 15))
console.log(sys.transferData(3, 4, 15))
console.log(sys.queryContribution(1))
console.log(sys.transferData(2, 4, 37))
console.log(sys.transferDataToAll(2, 37))
console.log(sys.queryContribution(2))
console.log(sys.transferData(3, 4, 37))
console.log(sys.queryContribution(1))
console.log(sys.queryContribution(3))
console.log(sys.queryContribution(4))

/* C:\Program Files\nodejs\node.exe .\source\code\others\3.js
1
1
1
30
1
2
50
0
30
10
0 */

