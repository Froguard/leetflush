// https://leetcode.cn/problems/next-permutation/
/**
31. 下一个排列

整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

⚠️ 必须 原地 修改，只允许使用额外常数空间。

 示例 1：
输入：nums = [1,2,3]
输出：[1,3,2]

示例 2：
输入：nums = [3,2,1]
输出：[1,2,3]

示例 3：
输入：nums = [1,1,5]
输出：[1,5,1]
 
提示：
1 <= nums.length <= 100
0 <= nums[i] <= 100
 
*/

/**
 * 下一个排列
 * [uncommit][undo]
 * 待完成: 当前办法会超时！
 * eg：[2,2,4,0,1,2,4,4,0]，而这都还算短的了，长的能到 100 长度！！！
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) {
    return;
  }
  if (nums.length === 2) {
    [nums[0], nums[1]] = [nums[1], nums[0]]; // swap
    return;
  }
  const numsStr = nums.join(',');
  const doneList = permute(nums);
  // console.log(doneList);
  const pos = doneList.indexOf(numsStr);
  const nextOne = doneList[(pos + 1) % doneList.length].split(',');

  // 不能返回，需要原地在 nums 上修改
  for (let i = 0; i < nextOne.length; i++) {
    nums[i] = parseInt(nextOne[i]);
  }
};

/**
 * 根据提供的数组，拆解后进行全排列
 * @param {number[]} nums
 * @returns {string[]} newStrList
 */
function permute(nums) {
  const numsArr = nums.concat();
  numsArr.sort((a, b) => a - b); // 从小到大排序
  const len = numsArr.length;
  // 确保唯一性(经过真实提交测试，需要针对重复数字得情况，产生的结果进行去重，所以这里用 set 而非 array)
  const resList = new Set();
  let lastAdded = '';
  // 全排列函数
  function _deal(readyList, waitList) {
    if (readyList.length === len) {
      // 已经排好了的直接记录到 Set
      lastAdded = readyList.join(',');
      resList.add(lastAdded);
    } else {
      for (let i = 0; i < waitList.length; i++) {
        // 循环遍历未被排进去的部分
        let wItem = waitList[i];
        let newReadyList = readyList.concat(wItem); // 将元素排进去
        let newWaitList = waitList.filter((item, index) => index !== i); // 待排列表中，去掉刚刚被排的元素
        _deal(newReadyList, newWaitList); // 递归下一论操作
      }
    }
  }
  const emptyList = [];
  _deal(emptyList, numsArr);
  return [...resList];
}

// console.log(nextPermutation([1,2]));
// console.log(nextPermutation([1,2,3]));
// console.log(nextPermutation([3,2,1]));
// console.log(nextPermutation([1,1,1,5,1]));
