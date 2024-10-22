/**
 * 两个链表的第一个公共结点(公共节点)【简单】
 * // https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46?tpId=295&tqId=23257&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/intersection-of-two-linked-lists
 * // https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
 * // https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  let listA = [],
    listB = [];
  while (pHead1 || pHead2) {
    if (pHead1 === pHead2) {
      return pHead1;
    }
    if (listA.includes(pHead2)) {
      return pHead2;
    }
    if (listB.includes(pHead1)) {
      return pHead1;
    }
    if (pHead1) {
      listA.push(pHead1);
      pHead1 = pHead1.next;
    }
    if (pHead2) {
      listB.push(pHead2);
      pHead2 = pHead2.next;
    }
  }
  return null;
}

module.exports = {
  FindFirstCommonNode: FindFirstCommonNode,
};
