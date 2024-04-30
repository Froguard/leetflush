// https://leetcode-cn.com/problems/two-sum-iii-data-structure-design
/**
设计一个接收整数流的数据结构，该数据结构支持检查是否存在两数之和等于特定值。

实现 TwoSum 类：

TwoSum() 使用空数组初始化 TwoSum 对象
void add(int number) 向数据结构添加一个数 number
boolean find(int value) 寻找数据结构中是否存在一对整数，使得两数之和与给定的值相等。如果存在，返回 true ；否则，返回 false 。
 

示例：

输入：
["TwoSum", "add", "add", "add", "find", "find"]
[[], [1], [3], [5], [4], [7]]
输出：
[null, null, null, null, true, false]

解释：
TwoSum twoSum = new TwoSum();
twoSum.add(1);   // [] --> [1]
twoSum.add(3);   // [1] --> [1,3]
twoSum.add(5);   // [1,3] --> [1,3,5]
twoSum.find(4);  // 1 + 3 = 4，返回 true
twoSum.find(7);  // 没有两个整数加起来等于 7 ，返回 false
 

提示：

-105 <= number <= 105
-231 <= value <= 231 - 1
最多调用 5 * 104 次 add 和 find
*/
/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
  this.nums = [];
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  if (!this.nums.length) {
    this.nums.push(number);
  } else {
    let nums = this.nums;
    let i;
    for (i = 0; i < nums.length; i++) {
      if (number < nums[i]) {
        break;
      }
    }
    nums.splice(i, 0, number);
  }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  let nums = this.nums;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let a = nums[left];
    let b = nums[right];
    let sum = a + b;
    if (sum > value) {
      right--;
    } else if (sum < value) {
      left++;
    } else {
      return true;
    }
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
