// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
// https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
/**
删除排序链表中的重复元素

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:
输入: 1->1->2
输出: 1->2

示例 2:
输入: 1->1->2->3->3
输出: 1->2->3
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
var deleteDuplicates = function (head) {
  const first = head;
  if (!first) {
    return null;
  }
  const checked = [first.val];
  let target = first.next;
  while (target) {
    let { val, next } = target;
    if (checked.includes(val)) {
      if (next) {
        // target 为中间节点
        target.val = next.val;
        target.next = next.next;
        continue; // 提前结束循环，主动触发下一轮检查，此处非常重要！！！
      } else {
        head.next = null; // target 为尾节点
        break; // 提前结束循环
      }
    } else {
      checked.push(val);
    }
    head = target;
    target = head.next;
  }
  return first;
};

console.log(deleteDuplicates(createLinkNode([]))); // null
console.log(deleteDuplicates(createLinkNode([1, 2, 3]))); // [1,2,3]
console.log(deleteDuplicates(createLinkNode([1, 1, 2, 3, 3]))); // [1,2,3]
console.log(deleteDuplicates(createLinkNode([1, 1, 1]))); // [1]
console.log(deleteDuplicates(createLinkNode([1, 1, 1, 1, 2, 2, 2, 3, 3, 3]))); // [1,2,3]
