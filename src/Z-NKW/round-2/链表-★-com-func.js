/**
 * 根据新的值列表，重置链表（当values长度和head长度不一致时，以values为准，即head链表可能会被改变）
 * @param {ListNode} head
 * @param {Array<number>} values
 * @returns {listNode} 原链表的首节点， 即 head
 */
function resetNodeByVals(head, values) {
  let cur = head;
  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    cur.val = val;
    if (i === values.length - 1) {
      cur.next = null; // 重要，必须保障末尾元素的 next 置空，让 head 的长度和 values 的长度强制一致！
    } else {
      cur = cur.next;
    }
  }
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
