// https://leetcode-cn.com/problems/maximum-subarray
// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
// https://leetcode-cn.com/problems/contiguous-sequence-lcci
/*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。


示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：
输入：nums = [1]
输出：1

示例 3：
输入：nums = [0]
输出：0

示例 4：
输入：nums = [-1]
输出：-1

示例 5：
输入：nums = [-100000]
输出：-100000
 
提示：
1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  /**
   * 方法一：循环中进行最大序列的尝试
   * 提示：
   * 1.先找到数组中的最大值元素，值为max，作为兜底的子序列（即该子序列是一个长度为1的序列，因为只包含这个最大值）
   * 2.从头开始遍历数组，计算数字相加的sum，并时刻对比max，更新掉max为最大
   *   - 当sum为0,并且遇到负数或者0的时候，直接continue跳过，因为其对于最大子序列没有帮助，即最大子序列包含上它要么没效果（0），要么是减分（-1）
   *     [?,?,A,(?,?,?,?)] 假设最大子序列为右半边的 (?,?,?,?) 表示，则 A <= 0 的时候，这个子序列都不能把A包进去
   *   - 当sum为负数时，说明已经加到子序列里边的元素之和已经算出了负值，则不应该要这个序列，要尝试重新开始添加子序列，即重置sum为0
   */
  let defaultMax = nums.reduce((acc, v) => Math.max(acc, v), nums[0]);
  let max = defaultMax,
    sum = 0,
    n;
  for (let i = 0; i < nums.length; i++) {
    n = nums[i];
    if (sum == 0 && n <= 0) {
      continue;
    }
    sum += n;
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;

  /* 方法二：动态规划
   * 提示：动态规划解题三步骤：1找状态，2定规律，3找初值
   * 1.dp[i] 表示“数组以第i个元素为结尾时候，该数组里边的最大子序列和”，而本题即可转化为，尝试以每一个元素为最后元素时候的子序列的和中，去找最大值，即 Max(dp[0]~dp[len-1])
   * 2.dp[i] 和 dp[i-1] 的关系？
   *   - 由于 dp[i] 就比 dp[i-1] 就相差了 nums[i] 这个元素，所以只需要看看这个元素加上之前的子序和，之后是增加了还是降低了
   *   - 注意，此处并不能单纯的判断 nums[i] 为正负数来决定其效果，因为 dp[i-1] 有可能是负的
   *     - eg: dp[i-1] = -100; nums[i] = 3; 那么最大子序和应该是 nums[i]，即 3
   *     - eg: dp[i-1] = -100; nums[i] = -3; 那么最大子序和应该是 nums[i]，即 -3
   *     - eg: dp[i-1] = 100; nums[i] = -3; 那么最大子序和应该是 dp[i-1] + nums[i]，即 97
   *     - eg: dp[i-1] = 100; nums[i] = 3; 那么最大子序和应该是 dp[i-1] + nums[i]，即 103
   *     - 推出规律为:
   *     -           dp[i] = Math.max( (dp[i-1]+nums[i]) , nums[i] );
   * 3.dp[0] 则为，以 nums[0] 为末尾元素的数组即 [ nums[0] ]，其包含的子序列只有一个，且该序列只有一个元素，所以最大值即为 nums[0]
   *   - 初值为：dp[0] = nums[0]
   **/
  // let dp = [ nums[0] ];
  // let max = dp[0];
  // for (let i = 1; i < nums.length; i++) {
  //     dp[i] = Math.max((dp[i-1]+nums[i]), nums[i]);
  //     max = Math.max(dp[i], max);
  // }
  // return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([0])); // 0
console.log(maxSubArray([-1])); // -1
console.log(maxSubArray([-100000])); // -100000
console.log(maxSubArray([-2, 1, -3, 4, 99, 2, 1, -5, 4])); // 106
