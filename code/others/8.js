const ops = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]]
class StationArea {
  constructor(area, stations) {
    this.areaBorder = area
    this.area = new Array(area[0]).fill(0).map(() => new Array(area[1]).fill(0))
    stations.forEach(item => {
      this.add(item)
    })
  }
  add([i, j]) {
    this.area[i][j] = 1
  }
  delete(station) {
    const [i, j] = station
    // 计算要删除的周边坐标
    const deleteList = [station]
    ops.forEach(op => {
      const m = i + op[0]
      const n = j + op[1]
      if (m >= 0 && m < this.areaBorder[0] && n >= 0 && n < this.areaBorder[1]) {
        deleteList.push([m, n])
      }
    })
    deleteList.forEach(([i, j]) => {
      this.area[i][j] = 0
    })
  }
  getSignal() {
    let acount = 0
    for (let i = 0; i < this.areaBorder[0]; i++) {
      for (let j = 0; j < this.areaBorder[1]; j++) {
        if (this.area[i][j] === 1) {
          ops.forEach(op => {
            const m = i + op[0]
            const n = j + op[1]
            if (m >= 0 && m < this.areaBorder[0] && n >= 0 && n < this.areaBorder[1]) {
              if (this.area[m][n] !== 1) {// ! 注意不含基站位置
                acount++
              }
            }
          })
        }
      }
    }
    return acount
  }
}
const sa = new StationArea([3, 5], [[0, 2], [0, 4], [1, 2], [2, 0], [2, 1]])
sa.delete([2, 1])
console.log(sa.getSignal())
sa.add([0, 3])
console.log(sa.getSignal())