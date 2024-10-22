/**
 * 判断一个链表是否为回文结构【简单】
 * // https://www.nowcoder.com/practice/3fed228444e740c8be66232ce8b87c2f?tpId=295&tqId=1008769&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
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
 * @param head ListNode类 the head
 * @return bool布尔型
 */
function isPail(head) {
  let s = []; // 正序数组
  let rs = []; // 反序数组
  while (head) {
    s.push(head.val);
    rs.unshift(head.val);
    head = head.next;
  }
  // 方法一：join
  return s.join('') == rs.join('');
  // 之所以可以采用字符串，因为字符串一般能够存储的长度为 2^31-1 (即2,147,483,647)，是大于 10^5 的

  // 方法二：循环
  // let isEq = true;
  // for (let i = 0; i < s.length; i++) {
  //     if (s[i]!=rs[i]) {
  //         isEq = false;
  //         break;
  //     }
  // }
  // return isEq;
}
module.exports = {
  isPail: isPail,
};
