// https://leetcode-cn.com/problems/remove-linked-list-elements
/*
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

示例 1：
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]

示例 2：
输入：head = [], val = 1
输出：[]

示例 3：
输入：head = [7,7,7,7], val = 7
输出：[]
 
提示：
列表中的节点在范围 [0, 104] 内
1 <= Node.val <= 50
0 <= k <= 50
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { ListNode, createLinkNode } = require('./com/LinkNode');
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let first = head;
  if (!first) {
    return null;
  }
  while (first && first.val === val) {
    first = first.next;
  }
  head = first;
  let target = head && head.next;
  while (target) {
    let next = target.next;
    let value = target.val;
    if (value == val) {
      if (next) {
        // target 为中间节点
        target.val = next.val;
        target.next = next.next;
        continue; // 提前结束循环，主动触发下一轮检查，此处非常重要！！！
      } else {
        head.next = null; // target 为尾节点
        break; // 提前结束循环
      }
    }
    head = target;
    target = head.next;
  }
  return first;
};

// console.log(removeElements(createLinkNode([]), 1)); // null
// console.log(removeElements(createLinkNode([1,2,3]), 2)); // [1,3]
// console.log(removeElements(createLinkNode([1,1,2,3,3]), 3)); // [1,1,2]
// console.log(removeElements(createLinkNode([1,1,1]), 1)); // null
console.log(removeElements(createLinkNode([1, 1, 1, 1, 2, 2, 2, 3, 3, 3]), 1)); // [2,2,2,3,3,3]
