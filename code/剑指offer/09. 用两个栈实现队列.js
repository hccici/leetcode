var CQueue = function () {
    this.q = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.q.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if(this.q.length === 0){
        return -1
    }
    return this.q.shift()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */