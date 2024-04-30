// https://leetcode-cn.com/problems/add-binary
/**
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

示例 1:
输入: a = "11", b = "1"
输出: "100"

示例 2:
输入: a = "1010", b = "1011"
输出: "10101"
 

提示：
每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。
*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const len1 = a.length;
  const len2 = b.length;
  const len = Math.max(len1, len2);
  let nArr = [],
    c = 0,
    sum = 0;
  for (let i = 1; i <= len; i++) {
    let x = i > len1 ? 0 : parseInt(a[len1 - i]) || 0;
    let y = i > len2 ? 0 : parseInt(b[len2 - i]) || 0;
    // console.log(a,b,c);
    sum = x + y + c;
    c = parseInt(sum / 2);
    nArr.unshift(sum % 2);
  }
  c && nArr.unshift(c);
  return nArr.join('');
};

console.log(addBinary('11', '1')); // '100'
console.log(addBinary('1010', '1011')); // '10101'
