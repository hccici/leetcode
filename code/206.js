/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    //  空节点直接返回
    if(!head){
        return head
    }
     var cp = head // 当前节点
     var lp = null // 左边节点
     var rp = head && head.next // 右边节点
     while(rp) {
         cp.next = lp
         lp = cp
         cp = rp
         rp = cp.next
     }
     // 这时cp指向了最后一个节点，但是还没有更新它的指向手动更新一下
     cp.next = lp
     return cp
};
var n4 = {val: 4,next: null}
var n3 = {val: 3,next: n4}
var n2 = {val: 2,next: n3}
var n1 = {val: 1,next: n2}

var s = reverseList(n1)
console.log(s)