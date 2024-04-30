// https://leetcode.cn/problems/sort-colors/description/?envType=study-plan-v2&envId=top-100-liked
/**
颜色分类
给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

必须在不使用库内置的 sort 函数的情况下解决这个问题。

示例 1：
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]

示例 2：
输入：nums = [2,0,1]
输出：[0,1,2]


提示：
n == nums.length
1 <= n <= 300
nums[i] 为 0、1 或 2

进阶：你能想出一个仅使用常数空间的一趟扫描算法吗？
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 方法1，简单粗暴用 sort
  // nums.sort();
  // 方法2，手写循环，找到 0,1,2 三种出现的次数；然后重新给 nums 赋值
  let count0 = 0;
  let count1 = 0;
  // let count2 = 0;
  for (const n of nums) {
    if (n === 0) {
      count0++;
    } else if (n === 1) {
      count1++;
    }
    // else {
    //  count2++;
    // }
  }
  // console.log({ count0, count1, count2 });
  for (let i = 0; i < nums.length; i++) {
    if (i < count0) {
      nums[i] = 0;
    } else if (count0 <= i && i < count0 + count1) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
  // 方法 3：没看懂的大神方案
  // let c0 = 0;
  // let c1 = 0;
  // let c2 = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   const ni = nums[i];
  //   if (ni === 0) {
  //     nums[c2++] = 2;
  //     nums[c1++] = 1;
  //     nums[c0++] = 0;
  //   } else if (ni === 1) {
  //     nums[c2++] = 2;
  //     nums[c1++] = 1;
  //   } else {
  //     nums[c2++] = 2;
  //   }
  // }
};
