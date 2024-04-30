/**
 * 【方法二】：push的时候，直接s1存储下来，然后pop的时候，将s1循环pop出来，push进入s2，然后s2.pop
 *
 *  假设当前queue中内容为[0,1,2,3]执行：
 *  queue.push(4);
 *  queue.pop();
 *
 *                        第1步：
 *                    直接push进s1
 *        [3]             [4]                  [4]
 * stack1 [2]             [3]                  [3]
 *                                             [2]               []
 *
 *                ===>            ===>                  ===>
 *                                           第2步
 *                                         判断s2是否有元素，
 *                                         有的话直接pop
 *                                             0
 *        [0]             [0]                 [↑]
 * stack2 [1]             [1]                 [1]                 [1]
 *
 * 当 s2 中没有元素的时候，需要 s1 进行补充，方法是 s1 循环 pop 出元素，push 进 s1。queue.length = s1.length + s2.length
 *
 * 特别注意，peek的实现和pop一样，需要注意的是，借助中间变量 tmp = this.stack2.pop() 之后，需要 this.stack2.push(tmp); 然后 return tmp;
 *
 */

/**
 * Initialize your data structure here.
 */
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

/** test */
var obj = new MyQueue();
['a', 'b', 'c', 'd', 'e'].forEach(n => obj.push(n));

console.log(obj.pop()); // 'a'
console.log(obj.empty()); // false
console.log(obj.peek()); // 'b'
console.log(obj.pop()); // 'b'
console.log(obj.peek()); // 'c'
console.log(obj.pop()); // 'c'
console.log(obj.pop()); // 'd'
console.log(obj.peek()); // 'e'
console.log(obj.pop()); // 'e'
console.log(obj.empty()); // true
