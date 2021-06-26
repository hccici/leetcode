/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.record = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  // 更新当前栈的最小值
  if (this.record.length) {
    let curMin = this.record[this.record.length - 1]
    if (curMin > x) {
      this.record.push(x)
    } else {
      this.record.push(curMin)
    }
  } else {
    this.record.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  // 恢复记录栈
  this.record.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.record[this.stack.length - 1]
};

/*
不要想着去维护一个有序列表，那样push、pop操作都会有On的操作。
只需要知道当前栈A的最小值是多少，出栈时要更新最小值，所以新建一个栈B来记录当前栈A中的最小值
 */