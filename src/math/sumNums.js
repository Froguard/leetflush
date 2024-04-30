// https://leetcode-cn.com/problems/qiu-12n-lcof
/**
等差数列的 前 N 项和
求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

示例 1：
输入: n = 3
输出: 6

示例 2：
输入: n = 9
输出: 45
 
限制：
1 <= n <= 10000
*/
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  // 数学知识：Sn = n * (a1+an) / 2   首和位2元素相加之和的一半，在乘以N
  return (n * (1 + n)) / 2;
};
