export function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

class NodeListUtil {
  constructor() { }
  getArray(head) {
    const arr = []
    let cur = head
    while (cur) {
      arr.push(cur.val)
      cur = cur.next
    }
    return arr
  }
}
export const nodeListUtil = new NodeListUtil()

export class NodeList {
  constructor(arr) {
    this._n = new ListNode()
    let cur = this._n
    arr.forEach(item => {
      cur.next = new ListNode(item)
      cur = cur.next
    })
  }
  getHead() {
    return this._n.next
  }
  getArray() {
    let head = this.getHead()
    return nodeListUtil.getArray(head)
  }
  toString() {
    console.log(this.getArray())
  }
}