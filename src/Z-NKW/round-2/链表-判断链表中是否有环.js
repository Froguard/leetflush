/**
 * 判断链表中是否有环【简单】
 * // https://www.nowcoder.com/practice/650474f313294468a4ded3ce0f7898b9?tpId=295&tqId=605&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/linked-list-cycle
 */
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @return bool布尔型
 */
function hasCycle(head) {
  let tmp = [];
  while (head && !tmp.includes(head)) {
    tmp.push(head);
    head = head.next;
  }
  return head != null;
}
module.exports = {
  hasCycle: hasCycle,
};
