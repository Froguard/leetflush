// https://leetcode-cn.com/problems/largest-perimeter-triangle
/**
三角形的最大周长

给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 0。

示例 1：
输入：[2,1,2]
输出：5

示例 2：
输入：[1,2,1]
输出：0

示例 3：
输入：[3,2,3,4]
输出：10

示例 4：
输入：[3,6,2,3]
输出：8
 
提示：
3 <= A.length <= 10000
1 <= A[i] <= 10^6
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  if (!nums || nums.length < 3) {
    return 0;
  }
  let max = 0,
    sum = 0;
  // 逆序排序
  nums.sort((a, b) => b - a);
  const len = nums.length;
  let a, b, c;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      if (j === i) {
        continue;
      }
      for (let k = j + 1; k < len; k++) {
        if (k === i || k === j) {
          continue;
        }
        a = nums[i];
        b = nums[j];
        c = nums[k];
        // if (isTriangle(a, b, c)) {
        if (a < b + c) {
          // 【精华1】：因为数组已经排过序了，所以 a>=b>=c 已经成立，要想能够组成三角形，只需要判定“小的两数a+b之和是否大于a”即可
          sum = a + b + c;
          max = Math.max(max, sum);
          return max;
        } else {
          break; // 【精华2】：对于第三个数c，如果第一次判断就不能满足的话，需要果断的break，因为后边的数会越来越小
        }
      }
    }
  }
  return max;
};
/**
 * 本题用不上这个函数
 * 判断是不是三角形
 * 三角形任意两边之和大于第三遍，任意两边之差小于第三边
 */
function isTriangle(a, b, c) {
  if (
    !(a + b > c) ||
    !(a + c > b) ||
    !(c + b > a) ||
    !(Math.abs(a - b) < c) ||
    !(Math.abs(a - c) < b) ||
    !(Math.abs(c - b) < a)
  ) {
    return false;
  } else {
    return true;
  }
}

let { data, answer } = require('./largestPerimeter-data.json');
console.log(largestPerimeter(data) === answer); // 3700
