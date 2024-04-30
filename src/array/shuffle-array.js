// https://leetcode-cn.com/problems/shuffle-an-array
/**
洗牌
给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。

实现 Solution class:

Solution(int[] nums) 使用整数数组 nums 初始化对象
int[] reset() 重设数组到它的初始状态并返回
int[] shuffle() 返回数组随机打乱后的结果
 

示例：

输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
 

提示：

1 <= nums.length <= 200
-106 <= nums[i] <= 106
nums 中的所有元素都是 唯一的
最多可以调用 5 * 104 次 reset 和 shuffle
*/
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.raw = nums;
  this.nums = nums.concat();
  this.LEN = this.raw.length;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.raw;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  // 方法一：全排列算法，生成所有的排列情况，然后随机返回其中一个。容易超时，超内存
  /*
    this.genRandomList();
    return this.randomList[ Math.floor(Math.random() * this.randomList.length) ];
    */
  // 方法二：洗牌算法：遍历数组，然后每次随机生成一个角标r(r范围0~i)，当发现r角标不为i的时候，交换r和i两个元素
  for (let i = 1; i < this.LEN; i++) {
    let rand = Math.floor(Math.random() * (i + 1)) % (i + 1);
    if (rand != i) {
      swap(rand, i, this.nums);
    }
  }
  return this.nums;
};

/**
 * 生成所有的随机排列结果
 */
Solution.prototype.genRandomList = function () {
  if (!this.randomList || !this.randomList.length) {
    this.randomList = permute(this.raw.concat());
  }
};

// 交换位置
function swap(i, j, arr) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// 全排列
function permute(arr = []) {
  const LEN = arr.length;
  if (LEN <= 1) {
    return arr;
  }
  let res = [];
  function _permutation(alreadyList = [], waitList = []) {
    if (alreadyList.length == LEN) {
      res.push(alreadyList);
      return;
    }
    for (let i = 0; i < waitList.length; i++) {
      let wi = waitList[i];
      let newAlreadyList = alreadyList.concat(wi);
      let newWaitlist = waitList.filter((_, idx) => idx != i);
      _permutation(newAlreadyList, newWaitlist);
    }
  }
  _permutation([], arr);
  return res;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
