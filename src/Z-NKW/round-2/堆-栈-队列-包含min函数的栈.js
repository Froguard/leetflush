/**
 * 包含min函数的栈【简单】
 * // https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49?tpId=295&tqId=23268&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */

const values = [];

function push(node) {
  return values.push(node);
}

function pop() {
  return values.pop();
}

function top() {
  return values[values.length - 1];
}

function min() {
  return [...values].sort((a, b) => a - b)[0];
}

module.exports = {
  push: push,
  pop: pop,
  top: top,
  min: min,
};
