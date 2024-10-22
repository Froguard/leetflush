/**
 * 链表相加（二）【中等】
 * // https://www.nowcoder.com/practice/c56f6c70fb3f4849bc56e33ff2a50b6b?tpId=295&tqId=1008772&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/add-two-numbers/
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
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
function addInList(head1, head2) {
  // 将链表转化为数字，相加之后求和
  const num1 = getValsFromListNode(head1);
  const num2 = getValsFromListNode(head2);
  // 然后将求得的和，转化回链表
  return createListNodeByNum(num1 + num2);
}

// 用数字创建链表，每一位表示链表的每个节点
function createListNodeByNum(num) {
  const str = num.toString();
  const res = new ListNode(parseInt(str[0]));
  let head = res;
  for (let i = 1; i < str.length; i++) {
    const tmpNode = new ListNode(parseInt(str[i]));
    head.next = tmpNode;
    head = tmpNode;
  }
  head.next = null;
  return res;
}

// 通过链表第一个节点，获取数组
function getValsFromListNode(ln) {
  let vals = [];
  let tmp = ln;
  while (tmp) {
    vals.push(tmp.val);
    tmp = tmp.next;
  }
  return BigInt(vals.join(''));
}

module.exports = {
  addInList: addInList,
};
