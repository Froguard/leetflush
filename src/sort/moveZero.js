// https://leetcode-cn.com/problems/move-zeroes
/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
https://leetcode-cn.com/problems/move-zeroes
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 解法一：冒泡排序时候的冒泡规则，从“比较大小”改成“只要是0就冒泡”
  // 交换 i 和 j 元素的位置
  function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        swap(nums, i, j);
      }
    }
  }
  // 解法二：时间上较解法一要更加快一些
  // 循环删除遇到的0，并追加到末尾
  // 1.先要判断出末尾连续的0有几个，然后方便在下面的循环里边减少 splice 的次数
  let range = nums.length;
  while (nums[range] === 0) {
    range--;
  }
  // 2.检查前面的子序列（0~range-1）范围
  let i = 0;
  let end = range;
  while (i < end) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      end--;
    } else {
      i++;
    }
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
