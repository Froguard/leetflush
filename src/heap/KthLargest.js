// https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/
/**
数据流中的第 K 大元素
设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

请实现 KthLargest 类：

KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。
 

示例：

输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
输出：
[null, 4, 5, 5, 8, 8]

解释：
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   //  4
kthLargest.add(5);   //  5
kthLargest.add(10);  //  5
kthLargest.add(9);   //  8
kthLargest.add(4);   //  8

提示，不需要考虑重复值

 */

/**
 * 初始化的时候先把顺序排好，从大到小
 * add的时候，直接插入到应该的顺序，避免重复排序
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.nums = nums.length ? nums.sort((a, b) => b - a) : nums; // 逆序，从大到小
  this.k = k;
  // console.log('init', this.nums);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  // this.nums 在初始化的时候就排序好了，不要浪费，所以在插入的时候，直接找到应该插入的位置即可
  let i;
  for (i = 0; i < this.nums.length; i++) {
    let n = this.nums[i] || 0;
    if (val >= n) {
      break;
    }
  }
  this.nums.splice(i, 0, val); // insert val to i
  return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kthLargest.add(3));  // 4
// console.log(kthLargest.add(5));  // 5
// console.log(kthLargest.add(10)); // 5
// console.log(kthLargest.add(9));  // 8
// console.log(kthLargest.add(4));  // 8

let kthLargest2 = new KthLargest(1, []);
console.log(kthLargest2.add(-3)); // -3
console.log(kthLargest2.add(-2)); // -2
console.log(kthLargest2.add(-4)); // -2
console.log(kthLargest2.add(0)); // 0
console.log(kthLargest2.add(4)); // 4
