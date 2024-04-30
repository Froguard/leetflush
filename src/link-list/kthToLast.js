// https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci
// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/submissions/
/*
实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

注意：本题相对原题稍作改动

示例：
输入： 1->2->3->4->5 和 k = 2
输出： 4

说明：
给定的 k 保证是有效的。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { ListNode, createLinkNode } = require('./com/LinkNode');
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  if (!head) {
    return null;
  }
  let list = [];
  while (head) {
    list.push(head);
    head = head.next;
  }
  return list[list.length - k].val; // 上述两个题区别，第二个题返回的是Node节点，而不是val
};
