/**
 * 冒泡排序
 * 每次冒泡，都会把剩余目标序列中的最值，通过不断的“节点间的比较&交换”的方式，追加左边已排序列后面，然后在对剩下的左边序列进行重复操作
 * 每一轮的核心思想和选择排序大体一样，只是区别在于操作手段，冒泡排序采取的是交换元素，选择排序采取的是选择极值
 *
 * 和选择排序有点类似是每一轮循环都会选出最值，放到已排序列后面
 * 但不同点是，冒泡是通过节点比较&交换，一轮下来之后，待排序的序列位置是被优化过的，而选择排序仅仅是把极值选出来了，剩余的待排序序列位置是没有任何优化的！！！
 *
 *  特性：
 * - 平均时间复杂度：o(N^2),嵌套双循环
 * - 最好时间复杂度：o(N),若已经有序，那么第一趟就排好了
 * - 最坏时间复杂度：o(N^2)
 * - 空间复杂度：o(1)
 * - 稳定性：稳定的（在注释中已解释）
 *
 * 1. 最快时间 O(N)
 * 2. 最慢时间 O(N^2)
 * 3. 平均时间 O(N^2)
 *
 * @param {Array<number>} nums
 * @param {Boolean} isDesc 是否为降序，默认位升序，即false
 * @returns {Array<number>} nums
 */
function bubbleSort(nums, isDesc = false) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //
      let ai = nums[i];
      let aj = nums[j];
      if (isDesc ? ai < aj : ai > aj) {
        swap(nums, i, j);
      }
    }
  }
  return nums;
}
// 交换 i 和 j 元素的位置
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

console.log(bubbleSort([1, 4, 7, 0, 9, -1, 2, 3]));
