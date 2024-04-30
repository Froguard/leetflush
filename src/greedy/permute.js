// https://leetcode-cn.com/problems/permutations
/**
全排列

给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

nums.length 在 1~6 之间

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const LEN = nums.length;
  if (LEN <= 1) {
    return [nums];
  }

  let res = new Set(); // 尽量优先使用 set，其性能远高于数组！！！
  // let res = [];
  function fullPermutation(arr = [], waitList = []) {
    if (arr.length == LEN) {
      // !res.includes(str) && res.push(str); // 当list中有重复字符时，容易产生重复的排序情况，所以此处需要加唯一判断
      res.add(arr.join(','));
      return;
    }
    for (let i = 0; i < waitList.length; i++) {
      fullPermutation(
        arr.concat(waitList[i]),
        waitList.filter((a, idx) => idx != i && !arr.includes(a)),
      ); // 递归下一个
    }
  }
  fullPermutation([], nums);
  return [...res].map(m => m.split(','));
};

/**
 * Set 比 Array 快在哪里？
 * 1. 实现机制：
 *   - Array 使用的是索引
 *   - set是一个键的集合。set不使用索引，而是使用键对数据排序
 * 2. 查改删元素
 *   - Array数组用来搜索元素的方法时间复杂度为0(N)。换句话说，运行时间的增长速度与数据大小的增长速度相同。
 *   - Set用于搜索、删除和插入元素的方法的时间复杂度都只有O(1)，这意味着数据的大小实际上与这些方法的运行时间无关
 *   eg: 有实验测过，100w级别的元素集合
 *       - 查找元素的速度：Set 比 Array 平均块 7.5 倍
 *       - 添加元素的速度：Set 比 Array 平均块 6.7 倍
 *       - 删除元素的速度：Set 比 Array 平均块 75 倍！！！！
 * 3. 查找某些特殊元素，如NaN，使用数组的 includes 和 indexOf， lastIndexOf ，都不兼容 NaN，而Set可以
 */
