// https://leetcode-cn.com/problems/max-stack
/**
设计一个最大栈数据结构，既支持栈操作，又支持查找栈中最大元素。

实现 MaxStack 类：

MaxStack() 初始化栈对象
void push(int x) 将元素 x 压入栈中。
int pop() 移除栈顶元素并返回这个元素。
int top() 返回栈顶元素，无需移除。
int peekMax() 检索并返回栈中最大元素，无需移除。
int popMax() 检索并返回栈中最大元素，并将其移除。如果有多个最大元素，只要移除 最靠近栈顶 的那个。
 

示例：

输入
["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
[[], [5], [1], [5], [], [], [], [], [], []]
输出
[null, null, null, null, 5, 5, 1, 5, 1, 5]

解释
MaxStack stk = new MaxStack();
stk.push(5);   // [5] - 5 既是栈顶元素，也是最大元素
stk.push(1);   // [5, 1] - 栈顶元素是 1，最大元素是 5
stk.push(5);   // [5, 1, 5] - 5 既是栈顶元素，也是最大元素
stk.top();     // 返回 5，[5, 1, 5] - 栈没有改变
stk.popMax();  // 返回 5，[5, 1] - 栈发生改变，栈顶元素不再是最大元素
stk.top();     // 返回 1，[5, 1] - 栈没有改变
stk.peekMax(); // 返回 5，[5, 1] - 栈没有改变
stk.pop();     // 返回 1，[5] - 此操作后，5 既是栈顶元素，也是最大元素
stk.top();     // 返回 5，[5] - 栈没有改变
 
提示：
-107 <= x <= 107
最多调用 104 次 push、pop、top、peekMax 和 popMax
调用 pop、top、peekMax 或 popMax 时，栈中 至少存在一个元素
 
进阶： 
试着设计解决方案：调用 top 方法的时间复杂度为 O(1) ，调用其他方法的时间复杂度为 O(logn) 。 
*/
/**
 * initialize your data structure here.
 */
var MaxStack = function () {
  // 方法一，使用 js 数组
  this.data = [];
  this.max = null;
  this.maxPos = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  return this.data.push(x);
};

/**
 * 返回栈顶，同时移除
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  return this.data.pop();
};

/**
 * 返回栈顶，无需移除
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.data[this.data.length - 1];
};

/**
 * 返回最大的值
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  this._calcMax();
  return this.max;
};

/**
 * 返回最大的值，并删除它
 * 如果有多个最大值，则选择离栈顶最近的那个进行删除
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  this._calcMax();
  const max = this.max;
  this.data.splice(this.maxPos, 1);
  return max;
};

// 自定义函数
MaxStack.prototype._calcMax = function () {
  let max = -Infinity,
    maxPos = 0;
  for (let i = this.data.length - 1; i >= 0; i--) {
    // 从末尾往前数，保证优先选择靠近栈顶(data[len-1])位置的
    let d = this.data[i];
    if (d > max) {
      max = d;
      maxPos = i;
    }
  }
  this.maxPos = maxPos;
  this.max = max;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

