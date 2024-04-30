// https://leetcode-cn.com/problems/min-stack-lcci
/**
请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。

示例：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.values = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  return this.values.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.values.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.values[this.values.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return [...this.values].sort((a, b) => a - b)[0]; // 从小到大排序之后，取第一个数即可
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3.
console.log(minStack.pop()); // -3
console.log(minStack.top()); // 0.
console.log(minStack.getMin()); // -2.
