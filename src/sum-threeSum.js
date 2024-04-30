// https://leetcode-cn.com/problems/3sum
/**
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]

提示：
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  // 先从小到大排序
  nums.sort((p, q) => p - q);
  /**
   * 一个优化点:
   * 由于相同元素允许重复出现，除开0这个数（0+0+0=0）之外的数来说，重复出现的次数大于等于3次就没有意义了，因为三数和为零
   * 将nums做一下“特殊去重”，把重复出现过两次的元素，降为2个，这样就能够缩小nums的大小
   * nums
   **/
  nums = nums.filter((v, i) => {
    if (v == 0) {
      return nums[i - 3] != 0; // 连续的0不超过3个（可以等于3个）
    }
    return !(nums[i - 1] == v && v == nums[i + 1]);
  });
  // console.log(nums);
  let unq = new Set();
  let impossiblePos = new Set();
  for (let i = 0; i < nums.length; i++) {
    // 循环遍历每个元素，检查除开他之外剩余的元素是否能有两个数能够加起来等于其负值
    // 即：降级为求两数和，找到数组剩余数字中，有两个数之和等于-a即可
    let a = nums[i];
    let matches = twoSum(nums, -a, i, impossiblePos);
    if (matches.length) {
      matches.forEach(m => {
        let [b, c] = m;
        let key = [a, b, c].sort((p, q) => p - q).join(',');
        unq.add(key);
      });
    } else {
      impossiblePos.add(i); // 把不可能有三数和的元素挑选出来，方便进行逻辑剪枝优化
    }
  }
  return [...unq].map(u => u.split(','));
};

// 在 nums 中，找到出来 pos 位置之外的两个数，这两个数的和为 target。找到所有这样的数对
function twoSum(nums, target, pos = 0, neednotCheck) {
  if (nums.length <= 2) {
    return [];
  }
  let res = [];
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    // 剪枝: 跳过不需要检查位置
    if (start == pos || neednotCheck.has(start)) {
      start++;
      continue;
    }
    if (end == pos || neednotCheck.has(end)) {
      end--;
      continue;
    }
    let a = nums[start];
    let b = nums[end];
    if (a + b == target) {
      res.push([a, b]);
      // 跳过相同的元素
      while (nums[start + 1] == a) {
        start++;
      }
      while (nums[end - 1] == b) {
        end--;
      }
      start++;
      end--;
      continue;
    } else {
      if (a + b > target) {
        end--;
      } else {
        start++;
      }
    }
  }
  return res;
}
