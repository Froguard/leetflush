/**
 * 链表中环的入口结点【中等】
 * // https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4?tpId=295&tqId=23449&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */

/*
function ListNode(x){
    this.val = x;
    this.next = null;
}
*/

function EntryNodeOfLoop(pHead) {
  let checked = new Set();
  let cur = pHead;
  let target = null;
  while (cur) {
    if (checked.has(cur)) {
      target = cur;
      break;
    } else {
      checked.add(cur);
    }
    cur = cur.next;
  }
  return target;
}

module.exports = {
  EntryNodeOfLoop: EntryNodeOfLoop,
};
