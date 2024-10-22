/**
 * 删除排序链表中的重复元素 II
 * // https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/
 */

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
var deleteDuplicates = function (head) {
  // 为方便进行双指针查找，在首节点左侧插入临时节点
  let zeroNode = { next: head }; // 不需要完整节点，主要是为了比对 next

  // 双指针查找
  let ptL = zeroNode;
  let ptR = zeroNode.next;
  //
  while (ptR?.next) {
    if (ptL.next.val === ptR.next.val) {
      // 遇到相同的，持续找，直到找到不同的，然后挪动两个指针
      while (ptL.next.val === ptR.next.val) {
        ptR = ptR.next;
        if (!ptR.next) {
          break;
        }
      }
      ptL.next = ptR.next;
    } else {
      ptL = ptL.next; // 正常挪动指针1
    }
    ptR = ptR.next; // 正常挪动指针2
  }
  return zeroNode.next;
};
