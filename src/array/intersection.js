// https://leetcode-cn.com/problems/intersection-of-two-arrays
/**
两个数组的交集

给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

示例 2：
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]

说明：
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let shortArr, longArr;
  if (nums1.length <= nums2.length) {
    shortArr = nums1;
    longArr = nums2;
  } else {
    shortArr = nums2;
    longArr = nums1;
  }
  let res = [];
  for (let i = 0; i < shortArr.length; i++) {
    let s = shortArr[i];
    if (!res.includes(s) && longArr.includes(s)) {
      res.push(s);
    }
  }
  return res;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
