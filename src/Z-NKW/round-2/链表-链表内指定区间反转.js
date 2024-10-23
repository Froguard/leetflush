/**
 * 链表内指定区间反转【中等】
 * // https://www.nowcoder.com/practice/b58434e200a648c589ca2063f1faf58c?tpId=295&tqId=654&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
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
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
function reverseBetween(head, m, n) {
  if (!head) {
    return head;
  }
  if (m === n) {
    return head;
  }
  m = m - 1;
  n = n - 1;
  const vals = getValsByNode(head);
  const leftPart = vals.slice(0, m);
  const middlePart = vals.slice(m, n + 1);
  const rightPart = vals.slice(n + 1);
  // console.log(leftPart);
  // console.log(middlePart);
  // console.log(rightPart);
  middlePart.reverse();
  const newValues = leftPart.concat(middlePart).concat(rightPart);
  console.log(newValues);

  return resetNodeByVals(head, newValues);
}

// 根据新的值列表，重置链表（当values长度和head长度不一致时，以values为准，即head链表可能会被改变）
function resetNodeByVals(head, values) {
  let cur = head;
  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    cur.val = val;
    if (i === values.length - 1) {
      cur.next = null;
    } else {
      cur = cur.next;
    }
  }
  return head;
}

// 根据链表求出每个节点的值，然后以数组返回
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

module.exports = {
  reverseBetween: reverseBetween,
};
