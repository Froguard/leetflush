// https://leetcode-cn.com/problems/single-number-ii
// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
/**
给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

示例 1：

输入：nums = [2,2,3,2]
输出：3
示例 2：

输入：nums = [0,1,0,1,0,1,99]
输出：99
 

提示：
1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 方法1，额外空间法
  let tmp = new Set();
  let obj = {};
  nums.forEach(n => {
    if (!tmp.has(n)) {
      // 这里不使用 !obj[n] 来判断，因为对象操作比较慢，使用set会快很多
      tmp.add(n);
      obj[n] = 1;
    } else {
      obj[n] && delete obj[n];
    }
  });
  return parseInt(Object.keys(obj)[0]);
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
