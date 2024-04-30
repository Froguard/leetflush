// https://leetcode-cn.com/problems/maximum-product-of-three-numbers
/**
给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

示例 1：
输入：nums = [1,2,3]
输出：6

示例 2：
输入：nums = [1,2,3,4]
输出：24

示例 3：
输入：nums = [-1,-2,-3]
输出：-6
 
提示：
3 <= nums.length <= 104
-1000 <= nums[i] <= 1000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length === 3) {
    return nums[0] * nums[1] * nums[2];
  }
  nums.sort((a, b) => a - b);
  /*
   * 排序之后最大乘积就两种情况：
   * - 1、如果全是正数就是最后三个数相乘
   * - 2、如果有负数最大的乘积:
   *      - 正数超过三个及以上（即最后三个是正数）则最后三个数相乘 => nums[len-3] * nums[len-2] * nums[len-3]
   *      - 正数小于三个：
   *          - 正数只有1个：最小的两个数 * 最大的一个正数 => nums[0] * nums[1] * nums[len-1]
   *          - 正数只有2个：最小的两个数 * 最大的一个正数 => nums[0] * nums[1] * nums[len-1]
   */
  const len = nums.length;
  return Math.max(nums[len - 3] * nums[len - 2] * nums[len - 1], nums[0] * nums[1] * nums[len - 1]);
  // TODO：可优化的点，两轮冒泡排序算法，直接找出最大三个值，最小三个值
};
