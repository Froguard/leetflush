/**
 * 用两个栈实现队列
 * // https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=295&tqId=23281&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 */

/**
 * 栈：先进后出，eg：叠盘子，先碟的盘子在底部，只能最后取出来
 * 队列：先进先出，eg：排队买票，先到的人先买到票，然后先从出口出去
 */

const values = [];

function push(node) {
  return values.push(node);
}
function pop() {
  return values.shift();
}
module.exports = {
  push: push,
  pop: pop,
};
