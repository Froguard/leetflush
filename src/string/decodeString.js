// https://leetcode-cn.com/problems/decode-string
/**
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"
示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"
*/
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 方法一，递归
  let i = 0; // i 必须作为外部变量，以便在每一次dfs调用时获取到实时值，即公用
  function deal() {
    let res = '';
    let repeatCount = 0;
    while (i < s.length) {
      let c = s[i];
      if (c.match(/\d/)) {
        // 数字
        repeatCount = repeatCount * 10 + parseInt(c); // 数字不止一位，比如 123 就是三位数
      } else if (c == '[') {
        i++; // 跳到下一个坐标，然后再递归处理
        let innerStr = deal();
        res += repeat(innerStr, repeatCount); // 重复
        repeatCount = 0; // reset 0
      } else if (c == ']') {
        // 结束
        return res;
      } else {
        // 字符
        res += c;
      }
      i++;
    }
    return res;
  }
  return deal();

  // 方法二，循环 + 栈
  /**
   * - 循环遍历，记录已经求取字符（非数字，也非方框），并追加到 tmpStr 末尾中，用以表示当前需要被 repeat 的内容
   * - 将 '[' 右括号，其左边的内容 字符 + 数字，进行压栈，栈中内容表示两个信息：
   *     - 1.前面的已经拼装好了的字符串内容（已经做过repeat处理的，所以不会包含 [] 符号和数字）
   *     - 2.当前记录内容 tmpStr 需要重复的次数
   * 当遇到 ']' 右括号时，表示需要将 ”当前内容tmpStr" 进行 repeat 操作，次数为当前栈顶中记录的数字
   * 重新计算求取 tmpStr = str + repeat(tmpStr, count); // 其中 let [str, count] = stack.pop();
   */
  /*
    let tmpStr = '';
    let rptCount = 0;
    let stack = []; // 栈
    for (let c of s) {
        if (c.match(/\d/)) { // 数字
            rptCount = rptCount * 10 + parseInt(c);
        } else if (c == '[') { //
            stack.push([tmpStr, rptCount]);
            tmpStr = '';
            rptCount = 0;
        } else if (c == ']') {
            let [str, count] = stack.pop();
            tmpStr = str + repeat(tmpStr, count);
        } else {
            tmpStr += c;
        }
    }
    return tmpStr;
    */
};
// repeat 函数
function repeat(s, n) {
  return `${s}`.repeat(n);
}
