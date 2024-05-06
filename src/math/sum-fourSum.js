// https://leetcode-cn.com/problems/4sum
/*
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：答案中不可以包含重复的四元组。

 

示例 1：

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
示例 2：

输入：nums = [], target = 0
输出：[]
 

提示：

0 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = nSum(nums, target, 4);
  // console.log(res);
  return res;
};

/**
 * // 直接上 n 数和 即，求取数组 nums 中，n个数之和为 target 的元素，的所有情况
 * 思路，循环遍历每一个元素i，然后递归的求取 n-1 个数和为 target-num[i] 的情况
 *
 * @param {number[]} nums 数组
 * @param {number} target 目标
 * @param {number} n n个数
 * @param {set} excludePoses 需要排除的下角标
 * @param {boolean} isSorted 是否已经排好序
 * @return {number[][]} 二维数组，每个item数组为，长度为n的数组
 */
function nSum(nums, target, n, excludePoses = new Set(), isSorted = false) {
  if (nums.length < n) {
    return [];
  }
  if (!isSorted) {
    nums.sort((p, q) => p - q); // 先从小到大排序
  }
  if (n == 2) {
    return twoSum(nums, target, excludePoses);
  }
  // console.log(n, excludePoses);
  let resSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (excludePoses.has(i)) {
      continue;
    } else {
      let tmpExcludePoses = new Set([i, ...excludePoses]); // 检查对象排除掉自己
      let tmp = nums[i];
      let newTarget = target - tmp;
      // console.log('i=', i, 'ele=', tmp, 'tar=', newTarget);
      let tmpOthers = nSum(nums, newTarget, n - 1, tmpExcludePoses, 1);
      // console.log('i=', i, 'length=', tmpOthers.length, ':', tmpOthers);
      if (tmpOthers.length) {
        tmpOthers.forEach(tots => {
          // if (tots.length == (n-1)) {
          let key = [tmp, ...tots].sort((a, b) => a - b).join(',');
          // console.log('i=', i, 'resItem=', key);
          resSet.add(key);
          // }
        });
      } else {
        excludePoses.add(i); // 不可能加和出目标值的元素，需要排除，避免重复计算
      }
    }
  }
  let resList = [...resSet].map(rs => rs.split(',').map(s => parseInt(s)));

  return resList;
}

// 确保入参 sortedAscNums 是已经排过序的数组，且从小到大排序
function twoSum(sortedAscNums = [], target, excludePoses = new Set()) {
  if (sortedAscNums.length < 2) {
    return [];
  }
  let res = [];
  let start = 0;
  let end = sortedAscNums.length - 1;
  let a, b, sum;
  // 从两边边界，往中间找
  while (start < end) {
    if (excludePoses.has(start)) {
      start++;
      continue;
    }
    if (excludePoses.has(end)) {
      end--;
      continue;
    }
    a = sortedAscNums[start];
    b = sortedAscNums[end];
    sum = a + b;
    if (sum == target) {
      res.push([a, b]);
      while (sortedAscNums[start + 1] == a) {
        start++;
      }
      while (sortedAscNums[end - 1] == b) {
        end--;
      }
      start++;
      end--;
      continue;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return res;
}
