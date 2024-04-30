// https://leetcode-cn.com/problems/sqrtx
/**
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:
输入: 4
输出: 2

示例 2:
输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
     由于返回类型是整数，小数部分将被舍去。

*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 方法一，内置函数
  return Math.floor(Math.sqrt(x));

  // 方法二，投机取巧
  // return parseInt(x ** 0.5); // x**n 表示 x^n 即 x的n次方，数学告诉我们，当 n=1/2 时，为开根号

  // 方法三，TODO：牛顿迭代法
};
