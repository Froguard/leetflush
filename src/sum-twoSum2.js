// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof
/**
【重点题】和为s的两个数字

输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]

示例 2：
输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]

限制：
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^6
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 解法一，暴力列举，但是会超时！！！
/*
var twoSum = function(nums, target) {
    if(nums.length <= 1) {
        return [];
    }
    for(let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for (let j = i + 1; (a + nums[j]) <= target && j < nums.length; j++) {
            let b = nums[j];
            if ((a + b) == target) {
                return [a, b];
            }
            if ((a+b) > target) {
                break;
            }
        }
    }
    return [];
};
*/
// 解法二，由于数组是排序好的，那可以从两端来选择两个数，进行求和，如果和大了，调节右端坐标往左移，如果小了则调节左边坐标往右移，直至找到，或者两个坐标交叉时结束
const twoSum = function (nums, target) {
  if (nums.length <= 1) {
    return [];
  }
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const a = nums[start];
    const b = nums[end];
    if (a + b == target) {
      return [a, b];
    }
    if (a + b > target) {
      end--;
    } else {
      start++;
    }
  }
  return [];
};
