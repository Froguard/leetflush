// https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked
/**
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

示例 1：
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

示例 2：
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

提示：
0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const LEN = nums.length;
  if (LEN <= 1) {
    return LEN;
  }
  //
  const HALF = LEN / 2;
  nums.sort((a, b) => a - b);
  console.log('sorted:', nums);
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    if (max > HALF || max >= LEN - i) {
      break;
    }
    max = Math.max(max, getKeepCount(nums, i));
  }
  return max;
};

/**
 * 获取从位置 pos 元素作为开始，能够连续的最大串长度
 * @param {number[]} nums
 * @param {number} pos
 * @returns
 */
function getKeepCount(nums, pos) {
  let keepCount = 1;
  for (let i = pos + 1; i < nums.length; i++) {
    const distance = nums[i] - nums[i - 1];
    if (distance === 1) {
      keepCount++;
    } else if (distance === 0) {
      // 前后相等也算连续，但是不计数
      continue;
    } else {
      break;
    }
  }
  return keepCount;
}

console.log(longestConsecutive([1, 2, 0, 1]));
