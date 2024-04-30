// https://leetcode-cn.com/problems/add-strings
/**
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  const len = Math.max(len1, len2);
  let nArr = [],
    c = 0,
    sum = 0;
  for (let i = 1; i <= len; i++) {
    let a = i > len1 ? 0 : parseInt(num1[len1 - i]) || 0;
    let b = i > len2 ? 0 : parseInt(num2[len2 - i]) || 0;
    // console.log(a,b,c);
    sum = a + b + c;
    c = parseInt(sum / 10);
    nArr.unshift(sum % 10);
  }
  c && nArr.unshift(c);
  return nArr.join('');
};

console.log(addStrings('0', '0')); // '0'
console.log(addStrings('102', '230')); // '332'
console.log(addStrings('9', '99')); // '108'
