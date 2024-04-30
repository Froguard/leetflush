// https://leetcode-cn.com/problems/permutations-ii
/**
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 
提示：
1 <= nums.length <= 8
-10 <= nums[i] <= 10
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const LEN = nums.length;
  if (LEN == 1) {
    return [nums];
  }
  nums.sort((a, b) => a - b); // 为了和答案一样有规律
  let resList = new Set(); // 使用 set 去重
  // alreadyList 已经排进去的元素，waitList代拍进去的元素
  function fullPermute(alreadyList = [], waitList = []) {
    if (alreadyList.length === LEN) {
      resList.add(alreadyList.join(',')); // 防止重复
    } else {
      for (let i = 0; i < waitList.length; i++) {
        let wi = waitList[i];
        let newAlreadyList = alreadyList.concat(wi); // newAlreadyList = [...alreadyList, wi];
        let newWaitList = waitList.filter((_, index) => index != i); // 通过位置角标来排除，而非数值 val
        fullPermute(newAlreadyList, newWaitList);
      }
    }
  }
  fullPermute([], nums);

  return [...resList].map(str => str.split(',').map(a => parseInt(a)));
};
