/**
 * 合并两个排序的链表【简单】
 * // https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=295&tqId=23267&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * // https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 */
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 */
function Merge(pHead1, pHead2) {
  /**
   * 分析：
   * 1.两个链表，l1和l2，均为升序的
   * 2.l1和l2的顺序并不是递减，而是递增关系
   */
  // 深递归
  if (pHead1 === null) {
    return pHead2;
  } else if (pHead2 === null) {
    return pHead1;
  } else if (pHead1.val < pHead2.val) {
    pHead1.next = Merge(pHead1.next, pHead2);
    return pHead1;
  } else {
    pHead2.next = Merge(pHead1, pHead2.next);
    return pHead2;
  }
}
module.exports = {
  Merge: Merge,
};
