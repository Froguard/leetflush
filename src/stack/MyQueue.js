// https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/
// 重复题，和 mockQueueByStack.js，代码一模一样
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  return this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 【注意这里】实现和方法一的peek不一样，不要漏掉了
  if (this.stack2.length === 0) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  let tmp = this.stack2.pop();
  this.stack2.push(tmp);
  return tmp;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // return (this.stack1.length + this.stack2.length) === 0;
  return !this.stack1.length && !this.stack2.length;
};
