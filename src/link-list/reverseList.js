// https://leetcode-cn.com/problems/reverse-linked-list
// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
/**
反转一个单链表。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 方法1：循环
  let firstNode = null;
  while (head) {
    firstNode = new ListNode(head.val, firstNode);
    head = head.next;
  }
  return firstNode;
  // 方法2，递归
  // TODO:
};

// test
let testNode = createLinkNode([1, 2, 3, 4, 5]);
console.log(testNode);
let reverseNode = reverseList(testNode);
console.log(reverseNode);
