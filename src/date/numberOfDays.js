// https://leetcode-cn.com/problems/number-of-days-in-a-month/
/**
指定年份 Y 和月份 M，请你帮忙计算出该月一共有多少天。

示例 1：
输入：Y = 1992, M = 7
输出：31

示例 2：
输入：Y = 2000, M = 2
输出：29

示例 3：
输入：Y = 1900, M = 2
输出：28

 */
/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
var numberOfDays = function (Y, M) {
  let map = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (
    ((Y % 4 == 0 && Y % 100 != 0) || Y % 400 == 0) && // 闰年
    M == 2 // 2月份
  ) {
    return 29;
  } else {
    return map[M - 1];
  }
};

console.log(numberOfDays(1992, 7)); // 31
console.log(numberOfDays(2000, 2)); // 29
console.log(numberOfDays(1990, 2)); // 28
