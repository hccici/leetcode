/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    const map = new Map()
    let p = head
    // 第一次循环先创建所有节点，并做好映射
    while (p) {
        const copy = new Node(p.val, null, null)
        map.set(p, copy)
        p = p.next
    }
    // 第二次连接节点
    p = head
    while (p) {
        const copy = map.get(p)
        copy.next = p.next ? map.get(p.next) : null
        copy.random = p.random ? map.get(p.random) : null
        p = p.next
    }
    return head ? map.get(head) : null
};