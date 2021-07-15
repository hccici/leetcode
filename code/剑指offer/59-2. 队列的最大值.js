var MaxQueue = function () {
  this.list = []
  this._list = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this._list.length) {
    return this._list[0]
  }
  return -1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.list.push(value)
  let eP = this._list.length - 1
  while (eP >= 0) {
    if (this._list[eP] < value) {
      this._list.pop()
      eP--
    } else {
      eP = -1
    }
  }
  this._list.push(value)

};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.list.length === 0) {
    return -1
  } else {
    const r = this.list.shift()
    if (r === this._list[0]) {
      this._list.shift()
    }
    return r
  }
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
const t = new MaxQueue()
const arr = [1, 2, 7, 4, 5, 6, 8]
arr.forEach(val => {
  t.push_back(val)
})
arr.forEach(val => {
  console.log(t.pop_front())
  console.log(t.max_value())
})