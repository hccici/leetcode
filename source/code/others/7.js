class RentingSystem {
  constructor() {
    this.record = {}
  }
  /**
   * @param {number} id
   * @param {number} area
   * @param {number} price
   * @param {number} rooms
   * @param {number[]} address
   * @return {boolean}
   */
  addRoom(id, area, price, rooms, address) {
    let result
    if (this.record[id]) {
      result = false
    } else {
      result = true
    }
    this.record[id] = { area, price, rooms, address }
    return result
  }
  /**
   * @param {number} id
   * @return {boolean}
   */
  deleteRoom(id) {
    delete this.record[id]
  }
  /**
   * @param {number} area
   * @param {number} price
   * @param {number} rooms
   * @param {number[]} address
   * @param {number[][]} orderBy
   * @return {number[]}
   */
  queryRoom(area, price, rooms, address, orderBy) {
    // 过滤出符合条件的数组
    const list = []
    for (const key in this.record) {
      const info = this.record[key];
      if (info.area >= area && info.price <= price && info.rooms === rooms) {
        list.push(key)
      }
    }
    // 排序（倒序排）
    // 序号升序
    list.sort((a, b) => a - b)
    // orderby（倒序排，优先级高的依据最后排）
    for (let i = orderBy.length - 1; i >= 0; i--) {
      const rule = orderBy[i]
      if (rule[0] === 3) { // address
        list.sort((a, b) => {
          const aDist = Math.abs(this.record[a].address[0] - address[0]) + Math.abs(this.record[a].address[1] - address[1])
          const bDist = Math.abs(this.record[b].address[0] - address[0]) + Math.abs(this.record[b].address[1] - address[1])
          if (rule[1] === 1) {
            return aDist - bDist
          } else {
            return bDist - aDist
          }
        })
      } else if (rule[0] === 2) { // price
        list.sort((a, b) => {
          const aPrice = this.record[a].price
          const bPrice = this.record[b].price
          if (rule[1] === 1) {
            return aPrice - bPrice
          } else {
            return bPrice - aPrice
          }
        })
      } else { // area
        list.sort((a, b) => {
          const aArea = this.record[a].area
          const bArea = this.record[b].area
          if (rule[1] === 1) {
            return aArea - bArea
          } else {
            return bArea - aArea
          }
        })
      }
    }
    return list
  }
}
const t = new RentingSystem();

const obj = {}
new Array('deleteRoom', 'addRoom', 'queryRoom').forEach(key => {
  obj[key] = function (...args) {
    console.log(t[key](...args))
  }
})

obj.deleteRoom(10); // 返回 false

obj.addRoom(3, 24, 200, 2, [0, 1]); // 返回 true

obj.addRoom(3, 24, 500, 2, [0, 1]); // 返回 false

obj.addRoom(3, 27, 500, 4, [1, 1]); // 返回 false

obj.addRoom(1, 27, 500, 4, [20, 43]) // 返回 true

obj.addRoom(6, 35, 227, 4, [2, 4]) // 返回 true

obj.addRoom(9, 20, 3540, 4, [4, 321]) // 返回 true

obj.queryRoom(25, 900, 4, [10, 1], [[1, 1], [2, -1], [3, 1]]) // 查询系统中面积大于等于 25，月租金小于等于 900，卧室数为 4 的房源，先按照面积升序排列，接着按月租金降序排列，最后按曼哈顿距离升序排列。返回 [3,1,6]。

obj.queryRoom(25, 900, 4, [10, 1], []) // 查询系统中面积大于等于 25，月租金小于等于 900，卧室数为 4 的房源，由于orderBy为空，则按房源编号升序排列。返回 [1,3,6]。