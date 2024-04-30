// https://leetcode-cn.com/problems/rotate-list
/**
给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

示例 1：

输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
示例 2：

输入：head = [0,1,2], k = 4
输出：[2,0,1]
 
提示：
链表中节点的数目在范围 [0, 500] 内
-100 <= Node.val <= 100
0 <= k <= 2 * 109
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k == 0 || !head) {
    return head;
  }

  const oldHead = head;

  let calcInfo = calc(head, k);
  if (calcInfo) {
    let { target, last } = calcInfo;
    last.next = oldHead;
    const newHead = target.next;
    target.next = null;
    return newHead;
  } else {
    return head;
  }
};

function calc(head, k) {
  if (k == 0) {
    return false;
  }
  // 大体想法，双指针
  let last = head;
  let target = head;
  let i = 0;
  let tmp = head;
  while (tmp) {
    if (i > k) {
      target = target.next;
    }
    tmp = tmp.next;
    if (tmp) {
      last = tmp;
    }
    i++;
  }
  const LEN = i;
  if (k >= LEN) {
    k = k % LEN;
    return calc(head, k);
  } else {
    return { target, last };
  }
}
