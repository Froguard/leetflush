// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof
/**
【重点题】在排序数组中查找数字 I

统计一个数字在排序数组中出现的次数。

示例 1:
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

示例 2:
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 
限制：
0 <= 数组长度 <= 50000
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length == 0) {
    return 0;
  }
  // 方法一 indexof，lastIndexOf
  let left = nums.indexOf(target);
  let right = nums.lastIndexOf(target);
  if (left != -1 && right != -1) {
    return right + 1 - left;
  } else {
    return 0;
  }
  // 方法二，老实巴交查找
  /*
    let count= 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            count++;
        }
        if (nums[i] > target) { // 逻辑剪枝
            break;
        }
    }
    return count;
    */
};
