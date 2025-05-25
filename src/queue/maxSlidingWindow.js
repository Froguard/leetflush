// https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
// https://leetcode.cn/problems/sliding-window-maximum/description/ 【困难】
/**
滑动窗口的最大值
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
注意：本题与主站 239 题相同：https://leetcode-cn.com/problems/sliding-wind-maximum/【困难】
本题为简单的原因在于审核要求，本题允许暴力求解答案，而239不允许暴力求解，会超时超限等而失败！！！！！！！！
*/
//
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  /*
  // 方法一，暴力破解法，在遇到数据量大的时候，会超时
  if (k === 0 || !nums.length) {
    return [];
  }
  const getMax = numList => Math.max(...numList);
  if (nums.length == k) {
    return [getMax(nums)];
  }
  const res = [];
  let wind = null;
  for (let i = 0; i <= nums.length - k; i++) {
    wind = nums.slice(i, i + k);
    let max = getMax(wind);
    res.push(max);
  }
  return res;
  */
  // 方法二：使用单调队列解决
  const res = [];
  const positions = []; // 存储索引值，确保递减
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    // 维护队列递减性：移除所有比当前元素小的队尾元素
    while (positions.length > 0 && n >= nums[positions[positions.length - 1]]) {
      positions.pop();
    }
    // 当前索引入队列
    positions.push(i);
    // 移除超出窗口范围的队首元素
    if (positions[0] < i + 1 - k) {
      positions.shift();
    }
    // 窗口形成时候，记录最大值（即队列第一个值就是）
    if (i >= k - 1) {
      const tmpMaxPos = positions[0];
      const tmpMaxOne = nums[tmpMaxPos];
      res.push(tmpMaxOne);
    }
  }
  return res;
};

console.log(maxSlidingWindow([9, 11], 2)); // [ 11 ]
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [ 3, 3, 5, 5, 6, 7 ]
