/**
 * 插入排序
 *
 * 核心思想：
 *         “每趟将「目标元素」，插入放在「左边已排子序列」中最合适的位置上”
 *
 * 对于一个长度为n的关键字序列a0,a1,a2,a3,a4,a5...an，
 * [a0,a1,a2,a3,...,an] 循环执行逻辑，对于 ai，将 ai 插入到其前面的子序列 a0~ai-1 中，最合适的那个位置
 * eg：
 * - a0是第一个元素，其前面没有子序列，所以要跳开，直接从低2个元素开始，即a1
 * - 从第二个元素即 a1 开始看，将 a2 插入到左边子序列 [a0] 中
 * - ...
 *
 * 特点：
 * - 平均时间复杂度:o(N^2)这是显然的，标准的内外两层循环
 * - 最好时间复杂度：o(N),如果有序，那么每个元素都已经在在它的待排子序列的合适位置，不用找合适位置
 * - 最坏时间复杂度:o(N^2)
 * - 空间复杂度：o(1),因为需要常熟个临时变量
 * - 稳定性：稳定的
 *
 * 1. 最快时间 O(N)
 * 2. 最慢时间 O(N^2)
 * 3. 平均时间 O(N^2)
 *
 * @param {Array<number>} nums
 * @param {Boolean} isDesc 是否为降序，默认位升序，即false
 * @returns {Array<number>} nums
 */
function insertSort(nums, isDesc = false) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isDesc ? nums[j] > nums[i] : nums[j] < nums[i]) {
        continue;
      } else {
        insertIntoLeft(nums, j, i);
        break;
      }
    }
  }
  return nums;
}

// 往自己左边序列进行插入：insertPos < originPos
function insertIntoLeft(arr, insertPos, originPos) {
  const n = arr[originPos];
  // 先删除 n
  arr.splice(originPos, 1);
  // 然后再把 n 插到 insertPos
  arr.splice(insertPos, 0, n);
}

console.log(insertSort([1, 1, 4, 7, 0, 9, -911, -1, 2, 3]));
