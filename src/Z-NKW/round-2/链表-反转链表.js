/**
 * 反转链表【简单】
 * // https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=295&tqId=23286&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
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
function ReverseList(head) {
  let preNode = null;
  while (head) {
    let tmpNode = new ListNode(head.val);
    tmpNode.next = preNode;
    preNode = tmpNode;
    head = head.next;
  }
  return preNode;
}
module.exports = {
  ReverseList: ReverseList,
};
