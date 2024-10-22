/**
 * 单链表的排序【中等】
 * // https://www.nowcoder.com/practice/f23604257af94d939848729b1a5cda08?tpId=295&tqId=1008897&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/sort-list
 * // https://leetcode-cn.com/problems/insertion-sort-list/
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
 * @param head ListNode类 the head node
 * @return ListNode类
 */
function sortInList(head) {
  if (!head) {
    return null;
  }
  // 1.先取数
  let values = getValuesByListNode(head);
  // 2.再排序
  values.sort((a, b) => a - b);
  // 3.再转回链表（这里为了省空间，可以直接在老链表上进行改值，不额外增加空间）
  let cur = head;
  for (let i = 0; i < values.length; i++) {
    cur.val = values[i];
    cur = cur.next;
  }
  return head;
}
// 获取链表中每个节点的值，并组成数组
function getValuesByListNode(head) {
  let values = [];
  let cur = head;
  while (cur) {
    values.push(cur.val);
    cur = cur.next;
  }
  return values;
}

module.exports = {
  sortInList: sortInList,
};
