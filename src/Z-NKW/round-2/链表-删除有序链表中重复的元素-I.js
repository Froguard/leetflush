/**
 * 删除有序链表中重复的元素-I
 * // https://www.nowcoder.com/practice/c087914fae584da886a0091e877f2c79?tpId=295&tqId=664&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
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
  const oldVals = getValsByNode(head);
  const newVals = [...new Set(oldVals)];
  resetNodeByVals(head, newVals);
  return head;
}

/**
 * 根据链表求出每个节点的值，然后以数组返回
 * @param {ListNode} head
 * @returns {Array<number>} values 链表中每个节点的值所组成的数组
 */
function getValsByNode(head) {
  const values = [];
  let cur = head;
  while (cur) {
    const { val, next } = cur;
    values.push(val);
    cur = next;
  }
  return values;
}

/**
 * 根据新的值列表，重置链表
 * - 需要要求 head 的长度 >= values 的长度
 * - 当 values 长度比 head 长度短时，以 values 为准，即head链表可能会被改变
 * @param {ListNode} head
 * @param {Array<number>} values
 * @returns {ListNode} 原链表的首节点， 即 head
 */
function resetNodeByVals(head, values) {
  let cur = head;
  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    if (!cur) {
      break;
    }
    cur.val = val;
    if (i === values.length - 1) {
      cur.next = null; // 重要，必须保障末尾元素的 next 置空，让 head 的长度和 values 的长度强制一致！
    } else {
      cur = cur.next;
    }
  }
  return head;
}

module.exports = {
  deleteDuplicates: deleteDuplicates,
};
