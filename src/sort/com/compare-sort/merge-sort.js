/**
 * 归并排序
 *
 * 核心思想：
 * 1. 拆分：将一个数组拆分成左右两个子序列，然后再对子序列进行重复拆分，直至拆出来的子序列都只包含一个元素
 * 2. 合并：将这些单元素的子序列进行合并，然后将合并之后的子序列合并，一直合并到最后一个大序列
 *         合并的过程中，会对两个待合并的子序列进行排序比较操作
 *
 * 归并排序是一种典型的分治算法
 *
 * 1. 最快时间 O(NlogN)
 * 2. 最慢时间 O(NlogN)
 * 3. 平均时间 O(NlogN)
 *
 * 经典应用场景：数组中的逆序对，当数组长度非常长的时候，使用归并排序依旧可以拿到 O(NlogN) 的时间效率
 * 而相比之下，使用快排时候，利用交换次数来计数，求取逆序对数量，也能求出来，但是大概率会超时！！！
 *
 * @param {Array<number>} nums
 * @param {Boolean} isDesc 是否为降序，默认位升序，即false
 * @returns {Array<number>} nums
 */
function mergeSort(nums, isDesc = false) {
  if (nums.length <= 1) {
    return nums;
  }
  let { left, right } = splitArr(nums);
  return mergeArr(mergeSort(left, isDesc), mergeSort(right, isDesc), isDesc);
}

// 将数组一分为二
function splitArr(arr) {
  const len = arr.length;
  if (len <= 1) {
    throw new Error('目标数组不可拆分');
  } else {
    let mid = parseInt(len / 2); // 其实此处不一定要均分，只要确保拆分出来的两个数组的长度>=1即可
    return {
      left: arr.slice(0, mid),
      right: arr.slice(mid, len),
    };
  }
}

// 合并两个有序数组，并保证其顺序（arr1和arr2的排序方式是样的，即要么都是升序，要么都是降序）
function mergeArr(arr1, arr2, isDesc = false) {
  let res = [];
  const len1 = arr1.length;
  const len2 = arr2.length;
  let i1 = 0;
  let i2 = 0;
  // 双指针下标
  while (i1 < len1 && i2 < len2) {
    let a1 = arr1[i1],
      a2 = arr2[i2];
    if (isDesc ? a1 > a2 : a1 < a2) {
      res.push(a1);
      i1++;
    } else {
      res.push(a2);
      i2++;
      // count += LEN1-i1; // 逆序对个数计数，count变量在最外围
    }
  }
  while (i1 < len1) {
    res.push(arr1[i1]);
    i1++;
  }
  while (i2 < len2) {
    res.push(arr2[i2]);
    i2++;
  }
  return res;
}

console.log(mergeSort([1, 1, 4, 7, 0, 9, -911, -1, 2, 3])); //
