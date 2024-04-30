// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
/**
字符串的排列

输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 
限制：
1 <= s 的长度 <= 8
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const LEN = s.length;
  if (LEN <= 1) {
    return [s];
  }
  let list = s.split('');
  let res = new Set(); // 尽量优先使用 set，其性能远高于数组！！！
  // let res = [];
  function fullPermutation(str = '', waitList = []) {
    if (str.length == LEN) {
      // !res.includes(str) && res.push(str); // 当list中有重复字符时，容易产生重复的排序情况，所以此处需要加唯一判断
      res.add(str);
      return;
    }
    for (let i = 0; i < waitList.length; i++) {
      fullPermutation(
        str + waitList[i],
        waitList.filter((a, idx) => idx != i),
      ); // 递归下一个
    }
  }
  fullPermutation('', list);
  return [...res];
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
