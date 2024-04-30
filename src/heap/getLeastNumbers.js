// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
/**
 最小的K个数
输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

示例 1：
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]

示例 2：
输入：arr = [0,1,2,1], k = 1
输出：[0]
 
限制：
0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000

 */

/**
 * 【注意】数字有可能重复，如 [1,1,2,2,3,3,4,4] 最小的三个数是，1,1,2
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 方法一，使用数组自带的排序功能
var getLeastNumbers = function (arr, k) {
  let tmp = [];
  let list = arr // arr.filter(a => (!tmp.includes(a) && tmp.push(a))) // 如果考虑去重
    .sort((a, b) => a - b);
  return list.slice(0, k);
};

// 方法二，使用"堆"
// var getLeastNumbers2 = function (arr, k) {
//   // TODO: 堆的实现
// };

// 测试
console.log(getLeastNumbers([3, 1, 1, 2, 2, 2, 0, 0], 2)); // [0,0]
// console.log(getLeastNumbers2([3, 1, 1, 2, 2, 2, 0, 0], 2)); // [0,0]
