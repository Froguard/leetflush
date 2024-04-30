// https://leetcode-cn.com/problems/binary-search
/**
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

示例 1:
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4

示例 2:
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
 
提示：
你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 方法一，递归
  // let pos = -1;
  // function find(from, to) {
  //     const len = (to - from + 1);
  //     if (len === 0) {
  //         return;
  //     }
  //     if (len === 1) {
  //         pos = nums[from] === target ? from : pos;
  //         return;
  //     }
  //     if (len === 2) {
  //         let f = nums[from],
  //             t = nums[to];
  //         pos = f === target ? from : (t === target ? to : pos);
  //         return;
  //     }
  //     let midPos = from + parseInt(len / 2);
  //     let midNum = nums[midPos];
  //     if (midNum === target) {
  //         pos = midPos;
  //     } else if (midNum < target) {
  //         find(midPos+1, to);
  //     } else {
  //         find(from, midPos-1);
  //     }
  // }
  // find(0, nums.length - 1);
  // return pos;
  // 方法二，循环
  let from = 0,
    to = nums.length - 1;
  while (from <= to) {
    let p = from + Math.floor((to - from) / 2);
    let n = nums[p];
    if (n === target) {
      return p;
    } else if (n < target) {
      from = p + 1;
    } else {
      to = p - 1;
    }
  }
  return -1;
};

console.log(search([], 9)); // -1
console.log(search([0], 9)); // -1
console.log(search([0, 2], 9)); // -1
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
