// https://leetcode.cn/problems/array-upper-bound/

/*
数组的上界 lastIndexOf

请你编写代码实现一个数组方法，任何数组都可以调用 upperBound() 方法，并返回给定目标数字的最后一个索引。nums 是一个可能包含重复数字的按升序排序的数组。如果在数组中找不到目标数字，则返回-1。

示例 1：
输入：nums = [3,4,5], target = 5
输出：2
解释：目标值的最后一个索引是 2

示例 2：
输入：nums = [1,4,5], target = 2
输出：-1
解释：因为数组中没有数字 2，所以返回 -1。

示例 3：
输入：nums = [3,4,6,6,6,6,7], target = 6
输出：5
解释：目标值的最后一个索引是 5
 
提示：
1 <= nums.length <= 104
-104 <= nums[i], target <= 104
nums 按升序排序。
 
TODO: 进阶：你能编写一个时间复杂度为 O(log n) 的算法吗？
 
*/

// 调试命令: ts-node ./src/array/upperBound.ts

declare global {
  interface Array<T> {
    upperBound(target: number): number;
  }
}

Array.prototype.upperBound = function (target): number {
  // 方法一：原生能力
  // return this.lastIndexOf(target);
  // 方法二：循环
  const LEN = this.length;
  const isTarNaN = isNaNVal(target);
  for (let i = LEN - 1; i >= 0; i--) {
    const ele = this[i];
    if (isTarNaN && isNaNVal(ele)) {
      return i;
    } else if (target === ele) {
      return i;
    } else {
      continue;
    }
  }
  return -1;
  // 方法三：由于数组本身是有序的，所以可以采用二分查找
};

function isNaNVal(obj: any) {
  return obj !== obj;
}

// [3,4,5].upperBound(5); // 2
// [1,4,5].upperBound(2); // -1
// [3,4,6,6,6,6,7].upperBound(6) // 5
