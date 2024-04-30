// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof
/**
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

注意：此题对比原题有改动

示例 1:
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

示例 2:
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

说明：

题目保证链表中节点的值互不相同
若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let resNode = head;
  if (!head) {
    // 处理空节点
    return null;
  }
  if (head.val === val) {
    // 处理头部节点
    return head.next;
  }
  /**
   * 注意，由于是需要删除尾部节点last，而尾部节点last的删除并不是简单的将自己的next和val赋值，这个操作没用，而需要将last的上一个节点的next置为null；
   * 删除普通节点 target
   * 1. target不为尾部节点时：
   *      target.val = target.next.val;
   *      target.next = target.next.next;
   * 2. target为尾部节点时，需要特殊处理：
   *      targetPreNode.next = null; // targetPreNode 为 target 的上一个节点
   **/
  let target = head.next;
  while (target) {
    if (target.val === val) {
      if (target.next) {
        target.val = target.next.val;
        target.next = target.next.next;
      } else {
        head.next = null; // 处理尾部节点
      }
      break;
    }
    head = target;
    target = head.next;
  }
  return resNode;
};

// console.log(deleteNode(createLinkNode([4,5,1,9]), 1));
console.log(deleteNode(createLinkNode([4, 5, 1, 9]), 5));
// console.log(deleteNode(createLinkNode([-3,5,-99]), -99));
