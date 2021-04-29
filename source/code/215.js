class MinHeap {
    constructor() {
        this.heap = []
    }
    _getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    _getLeftIndex(index) {
        return 2 * index + 1
    }
    _getRightIndex(index) {
        return 2 * index + 2
    }
    _swap(i1, i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    _shiftUp(index) {
        if (index === 0) return // 如果是栈顶元素，就不操作了
        const parentIndex = this._getParentIndex(index)
        const parentData = this.heap[parentIndex]
        const curData = this.heap[index]
        if (curData < parentData) {
            this._swap(index, parentIndex)
            this._shiftUp(parentIndex)
        }
    }
    _shiftDown(index) {
        const leftIndex = this._getLeftIndex(index)
        const rightIndex = this._getRightIndex(index)
        // 如果左节点不存在，说明已经到最底了
        if (!this.heap[leftIndex]) return
        let compareIndex = leftIndex
        if (this.heap[leftIndex] > this.heap[rightIndex]) { // 2 > undifine false
            compareIndex = rightIndex
        }
        if (this.heap[index] > this.heap[compareIndex]) {
            this._swap(index, compareIndex)
            this._shiftDown(compareIndex)
        }
    }
    // 插入元素时，应该插入数组尾部，然后不断上移，直到移动到合适位置
    insert(data) {
        this.heap.push(data)
        this._shiftUp(this.heap.length - 1)
    }
    // 删除堆顶时，为了不破坏原有结构，用组尾替换组顶，删除组尾，并且堆顶开始下沉，直到出现在合适位置
    delete() {
        this.heap[0] = this.heap.pop()
        this._shiftDown(0)
    }
    size() {
        return this.heap.length
    }
    get() {
        return this.heap[0]
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const mh = new MinHeap()
    for (let i = 0; i < nums.length; i++) {
        mh.insert(nums[i])
        if (mh.size() > k) {
            mh.delete()
        }
    }
    return mh.get()
};