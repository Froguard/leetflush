/**
 * 快速排序 极简版
 * @param {number[]} nums
 * @param {boolean} isDesc 是否降序
 *
 * 1. 最快时间 O(NlogN)
 * 2. 最慢时间 O(N^2)
 * 3. 平均时间 O(NlogN)
 */
function quickSort(nums, isDesc = false) {
  // 对 nums 中的 第 low 位到第 hight 位组成的序列（同时包含low，high），进行排序
  function quick(low, high) {
    if (isDesc ? low > high : low < high) {
      // 1.先一轮操作下来让小于 pivot 的所有元素放在 pivot 的左边，大的放右边。这个过程中，pivot 也有可能被移动，即其坐标可能会移动
      let pivotPos = low;
      while (isDesc ? low > high : low < high) {
        let pivot = nums[low];
        if (isDesc ? pivot < nums[low + 1] : pivot > nums[low + 1]) {
          swap(nums, low, low + 1);
          pivotPos = low + 1; // 更新
        }
        low++;
      }
      // 2.然后递归的对 pivot 左边子序列，以及 pivot 右边的子序列，分别进行递归排序
      quick(0, pivotPos - 1);
      quick(pivotPos + 1, high);
    }
  }

  quick(0, nums.length - 1);
  return nums;
}

/**
 * 快速排序
 * @param {Array<number>} nums
 * @param {Boolean} isDesc 是否为降序，默认位升序，即false
 * @returns {Array<number>} nums
 */
function quickSort2(nums, isDesc = false) {
  quick(nums, 0, nums.length - 1, isDesc);
  return nums;
}
function quick(arr, leftPos, rightPos, isDesc) {
  if (arr.length <= 1) {
    return;
  }
  const pivotPos = partitionDeal(arr, leftPos, rightPos, isDesc);
  if (leftPos < pivotPos - 1) {
    quick(arr, leftPos, pivotPos - 1, isDesc);
  }
  if (pivotPos < rightPos) {
    quick(arr, pivotPos, rightPos, isDesc);
  }
}

// 分区处理函数，同时包含了「对比」&「交换」元素 的功能
function partitionDeal(arr, leftPos, rightPos, isDesc) {
  const pivotPos = Math.floor((leftPos + rightPos) / 2); // (leftPos + (rightPos - legtPos) / 2) 的简化
  const pivot = arr[pivotPos];
  let l = leftPos,
    r = rightPos;
  while (l <= r) {
    while (isDesc ? arr[l] > pivot : arr[l] < pivot) {
      l++;
    }
    while (isDesc ? pivot > arr[r] : pivot < arr[r]) {
      r--;
    }
    if (l <= r) {
      l !== r && swap(arr, l, r);
      l++;
      r--;
    }
  }
  let newPivotPos = l;
  return newPivotPos;
}

// 交换 i 和 j 元素的位置
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

console.log(quickSort([1, 1, 4, 7, 0, 9, -911, -1, 2, 3])); //
