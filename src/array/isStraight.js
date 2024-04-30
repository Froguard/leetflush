// https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof
/**
从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

示例 1:

输入: [1,2,3,4,5]
输出: True
 
示例 2:

输入: [0,0,1,2,5]
输出: True
 
限制：

数组长度为 5 

数组的数取值为 [0, 13] .
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  // 先从小到大排序
  nums.sort((a, b) => a - b);
  let countZero = 0;
  while (nums[0] == 0) {
    countZero++;
    nums.shift(); // 注意本题测试用例有点不讲武德，它的大小王，并不会只有2个，可能5张都是王
  }
  // 检查是否有重复
  if (nums.length != new Set(nums).size) {
    return false;
  }
  // 只有1张数字牌，或者没有数字牌
  if (nums.length <= 1) {
    return true;
  }
  // 有2张数字牌
  if (nums.length == 2) {
    return nums[1] - nums[0] <= 4;
  }

  // 检查相邻元素差值之和
  let distances = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 != nums[i]) {
      distances += nums[i] - nums[i - 1] - 1;
    }
  }
  return distances <= countZero;
};
