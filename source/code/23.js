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
        const parentData = this.heap[parentIndex].val
        const curData = this.heap[index].val
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
        if (this.heap[rightIndex] && (this.heap[leftIndex].val > this.heap[rightIndex].val)) { // 2 > undifine false
            compareIndex = rightIndex
        }
        if (this.heap[index].val > this.heap[compareIndex].val) {
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
        // 当堆只有一个元素时，直接返回
        if (this.heap.length === 1) {
            return this.heap.pop()
        }
        const r = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._shiftDown(0)
        return r
    }
    size() {
        return this.heap.length
    }
    get() {
        return this.heap[0]
    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const mh = new MinHeap()
    const nl = new ListNode()
    let p = nl
    for (let i = 0; i < lists.length; i++) {
        lists[i] && mh.insert(lists[i])
    }
    while (mh.size() > 0) {
        console.log(mh.size())
        const curN = mh.delete()
        p.next = curN
        p = p.next
        curN.next && mh.insert(curN.next)
    }
    return nl.next
};
const n1
mergeKLists()