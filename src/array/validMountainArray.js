// https://leetcode-cn.com/problems/valid-mountain-array
/**
给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

arr.length >= 3
在 0 < i < arr.length - 1 条件下，存在 i 使得：
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 

示例 1：

输入：arr = [2,1]
输出：false
示例 2：

输入：arr = [3,5,5]
输出：false
示例 3：

输入：arr = [0,3,2,1]
输出：true
 

提示：

1 <= arr.length <= 104
0 <= arr[i] <= 104
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  let tops = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] == arr[i - 1]) {
      // 不能连续相等
      return false;
    }
    if (isTop(i, arr)) {
      tops++;
      if (tops > 1) {
        return false;
      }
    }
  }
  // 首尾元素不可以大于相邻元素
  if (arr[0] > arr[1] || arr[arr.length - 2] < arr[arr.length - 1]) {
    return false;
  }
  return tops == 1;
};

function isTop(i, arr) {
  let left = i == 0 ? -Infinity : arr[i - 1];
  let right = i == arr.length - 1 ? -Infinity : arr[i + 1];
  let cur = arr[i];
  return cur > left && cur > right;
}
