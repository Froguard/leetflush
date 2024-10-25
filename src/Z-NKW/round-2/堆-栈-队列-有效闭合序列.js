/**
 * 有效括号序列
 * // https://www.nowcoder.com/practice/37548e94a270412c8b9fb85643c8ccc2?tpId=295&tqId=726&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 * // ../stack/isValid.js
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return bool布尔型
 */
function isValid(s) {
  if (!s || s.length % 2 !== 0) {
    return false;
  }
  /**
   * 核心思想：采用栈结构，读取到【左括号字符】时，进行对应该正确【右闭合字符】进行预测
   *       - 每次发现【右闭合字符】，和栈顶比较，即符合预期则判断正常闭合。直到栈清空，表示所有都闭合了
   */
  let stack = [];
  /*outerForLoop: */
  for (let c of s) {
    switch (c) {
      case '{': {
        stack.push('}'); // 进栈
        break;
      }
      case '(': {
        stack.push(')'); // 进栈
        break;
      }
      case '[': {
        stack.push(']'); // 进栈
        break;
      }
      default: {
        if (stack.length === 0 || c != stack.pop()) {
          return false;
          // break outerForLoop;
        }
        break;
      }
    }
  }
  return stack.length === 0;
}
module.exports = {
  isValid: isValid,
};
