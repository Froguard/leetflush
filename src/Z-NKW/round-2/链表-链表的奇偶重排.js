/**
 * 链表的奇偶重排【中等】
 * // https://www.nowcoder.com/practice/02bf49ea45cd486daa031614f9bd6fc3?tpId=295&tqId=1073463&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
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
function oddEvenList(head) {
  const values = getValuesByListNode(head);
  const res = [];
  for (let i = 0; i < values.length; i += 2) {
    res.push(values[i]);
  }
  for (let j = 1; j < values.length; j += 2) {
    res.push(values[j]);
  }
  let cur = head;
  for (let i = 0; i < res.length; i++) {
    cur.val = res[i];
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
  oddEvenList: oddEvenList,
};
