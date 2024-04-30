/**
 * 简单选择排序
 *
 * 核心思想：
 *
 *      “每趟从「右边待排子序列」中选出最小的值追加到「左边已排子序列」的末尾”
 *
 * 对于一个长度为n的关键字序列a0,a1,a2,a3,a4,a5...an
 * [a0,a1,a2,a3,...,an] 循环执行逻辑 ai，将 包含 ai 的右边子序列中的最值，放到左边已排好的序列的最末尾
 * eg：
 * - 对于a0，右边子序列为 [a0,a1,...,an],先选出最值，放到左边已排好的子序列，而a0前面没有子序列，直接放到最左边即可
 *
 * 特性：
 * - 平均时间复杂度：o(N^2),嵌套双循环
 * - 最好时间复杂度：o(N^2),每次要找最大最小肯定是要遍历一遍的
 * - 最坏时间复杂度：o(N^2)
 * - 空间复杂度：o(1)
 * - 稳定性：稳定的（在注释中已解释）
 *
 * 1. 最快时间 O(N^2)
 * 2. 最慢时间 O(N^2)
 * 3. 平均时间 O(N^2)
 *
 * @param {Array<number>} nums
 * @param {Boolean} isDesc 是否为降序，默认位升序，即false
 * @returns {Array<number>} nums
 */
function simpleSelectSort(nums, isDesc) {
  for (let i = 0; i < nums.length - 1; i++) {
    selectExtreme(nums, i, isDesc);
  }
  return nums;
}
//
function selectExtreme(arr, begin, calcMax = false) {
  let target = arr[begin];
  let targetPos = begin;
  for (let i = begin + 1; i < arr.length; i++) {
    const n = arr[i];
    if (calcMax ? n > target : n < target) {
      target = n;
      targetPos = i;
    }
  }
  if (targetPos !== begin) {
    arr.splice(targetPos, 1); // 删除该位置
    arr.splice(begin, 0, target); // 然后插入到 begin 位置上去
  }
}

console.log(simpleSelectSort([1, 1, 4, 7, 0, 9, -911, -1, 2, 3])); //
