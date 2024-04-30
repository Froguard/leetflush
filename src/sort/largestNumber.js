// https://leetcode-cn.com/problems/largest-number
/**
给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

示例 1：

输入：nums = [10,2]
输出："210"
示例 2：

输入：nums = [3,30,34,5,9]
输出："9534330"
示例 3：

输入：nums = [1]
输出："1"
示例 4：

输入：nums = [10]
输出："10"
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.length == 1) {
    return String(nums[0]);
  }
  nums.sort((a, b) => {
    return compare('' + a, '' + b);
  });
  // 消除 0 的情况
  while (nums.length > 1 && nums[0] == 0) {
    nums.shift();
  }
  return nums.join('');
};

function compare(numStr1, numStr2) {
  // n1 在 n2 前面 return -1
  // n1 在 n2 后面 return 1
  // n1 和 n2 无所谓前后关系 return 0;
  if (numStr1 === numStr2) {
    return 0;
  } else {
    let res12 = parseInt(`${numStr1}${numStr2}`);
    let res21 = parseInt(`${numStr2}${numStr1}`);
    return res12 > res21 ? -1 : 1;
  }
}
