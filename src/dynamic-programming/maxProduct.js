// https://leetcode-cn.com/problems/maximum-product-subarray
/**
最大子续乘积，最大子续积
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。


示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 方法一：贪心法
  /**
   * 思路： 求最大值，可以看成求被0拆分的各个子数组的最大值。
   *  - 当一个数组中没有0存在，则分为两种情况：
   *  - 1.负数为偶数个，则整个数组的各个值相乘为最大值；
   *  - 2.负数为奇数个，
   *     - 则从左边开始，乘到最后一个负数停止有一个“最大值”，
   *     - 从右边也有一个“最大值”，比较，得出最大值。
   */
  let defaultMax = nums.reduce((acc, v) => Math.max(acc, v), nums[0]);
  let max = defaultMax;
  // 正序
  let tmp = 1;
  for (let n of nums) {
    if (n == 0) {
      tmp = 1;
      continue;
    }
    tmp *= n;
    max = Math.max(max, tmp);
  }
  // 倒序
  tmp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == 0) {
      tmp = 1;
      continue;
    }
    tmp *= nums[i];
    max = Math.max(max, tmp);
  }
  return max;

  // 方法二：
  /*
    let res = -Infinity;
    let max = 1;
    let min = 1;
    for (let n of nums) {
        if (n < 0) {
            [max, min] = [min, max]; // swap
        }
        max = Math.max(n, max * n);
        min = Math.min(n, min * n);

        res = Math.max(res, max);
    }
    return res;
    */
};
