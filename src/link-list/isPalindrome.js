// https://leetcode-cn.com/problems/palindrome-linked-list/
// https://leetcode-cn.com/problems/palindrome-linked-list-lcci/
/**
回文链表

请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let s = [];
  let rs = [];
  while (head) {
    s.push(head.val);
    rs.unshift(head.val);
    head = head.next;
  }
  // 方法一：join
  return s.join('') == rs.join('');
  // 方法二：循环
  // let isEq = true;
  // for (let i = 0; i < s.length; i++) {
  //     if (s[i]!=rs[i]) {
  //         isEq = false;
  //         break;
  //     }
  // }
  // return isEq;
};
