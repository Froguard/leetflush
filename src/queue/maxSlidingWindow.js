// https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
// https://leetcode.cn/problems/sliding-window-maximum/description/
/**
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7]
解释:

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 
提示：
你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
注意：本题与主站 239 题相同：https://leetcode-cn.com/problems/sliding-window-maximum/【困难】
本题为简单的原因在于审核要求，本题允许暴力求解答案，而239不允许暴力求解，会超时超限等而失败！！！！！！！！
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 方法一，暴力破解法，在遇到数据量大的时候，会超时
  function getMax(arr) {
    return arr.reduce((acc, n) => {
      return Math.max(acc, n);
    }, arr[0]);
  }
  if (k === 0 || !nums.length) {
    return [];
  }
  if (nums.length == k) {
    return [getMax(nums)];
  }
  let res = [];
  let window = null;
  for (let i = 0; i <= nums.length - k; i++) {
    window = nums.slice(i, i + k);
    let max = getMax(window);
    res.push(max);
  }
  return res;
  // TODO：方法二：使用单调队列解决
};

console.log(maxSlidingWindow([9, 11], 2)); // [ 11 ]
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [ 3, 3, 5, 5, 6, 7 ]
