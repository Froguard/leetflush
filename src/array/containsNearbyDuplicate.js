// https://leetcode-cn.com/problems/contains-duplicate-ii
/**
存在重复元素 II

给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

示例 1:
输入: nums = [1,2,3,1], k = 3
输出: true

示例 2:
输入: nums = [1,0,1,1], k = 1
输出: true

示例 3:
输入: nums = [1,2,3,1,2,3], k = 2
输出: false
通过次数83,078提交次数201,054
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (k == 0 || nums.length <= 1) {
    return false;
  }
  let find = false;
  for (let i = 0; i < nums.length; i++) {
    if (find) {
      break;
    }
    let n = nums[i];
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      let m = nums[j];
      if (m == n) {
        find = true;
        break;
      }
    }
  }
  return find;
};
