//
/**
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。

示例 2：
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。

示例 3：
输入：digits = [0]
输出：[1]
 
提示：
1 <= digits.length <= 100
0 <= digits[i] <= 9
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let d = digits.pop();
  let c = 1; // 进位
  let ds = []; // 结果存储
  while (d != undefined) {
    d += c;
    c = parseInt(d / 10);
    ds.unshift(d % 10);
    d = digits.pop();
  }
  c && ds.unshift(c); // 查看最后的进位
  return ds;
};

console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([0])); // [1]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([9, 9])); // [1,0,0]
console.log(plusOne([1, 2, 3])); // [1,2,4]
