/**
 * 删除有序链表中重复的元素-II【中等】
 * // https://www.nowcoder.com/practice/71cef9f8b5564579bf7ed93fbe0b2024?tpId=295&tqId=663&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/
 */
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
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
 * @param head ListNode类
 * @return ListNode类
 */
function deleteDuplicates(head) {
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
}

module.exports = {
  deleteDuplicates: deleteDuplicates,
};
