// https://leetcode-cn.com/problems/implement-queue-using-stacks
/**
用stack去模拟实现队列

请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

  - void push(int x) 将元素 x 推到队列的末尾
  - int pop() 从队列的开头移除，并返回这个元素
  - int peek() 返回队列开头的元素，但不会移除这个元素
  - boolean empty() 如果队列为空，返回 true ；否则，返回 false
 
说明：
你只能使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。

进阶：
你能否实现每个操作均摊时间复杂度为 O(1) 的队列？换句话说，执行 n 个操作的总时间复杂度为 O(n) ，即使其中一个操作可能花费较长时间。

示例：
输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]

解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 
提示：
1 <= x <= 9
最多调用 100 次 push、pop、peek 和 empty
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）

 */

/**
 * 分析：
 * - 队列的特性，先进先出，有点类似于食堂窗口排队打饭，先排进去的人，在队头，会先打到饭
 * - 栈的特性，先进后出，有点类似于堆叠盘子，先放进去的盘子会在底部，然后越往后放进去的盘子，其位置越接近顶部，其中最后一个放进去的盘子处于最顶部，取盘子的时候会从顶部开始取，会先取它
 *
 *        <queue> "先进先出FIFO"   |         <stack> "先进后出FILO"
 *                                |
 *                   pop推出 0     |     push 3 推进             pop推出 3
 *                      ↑         |         ↓                      ↑
 *   [0]      [0]      [1]        |        [2]        [3]         [2]
 *   [1]  =>  [1]  =>  [2]        |        [1]   =>   [2]   =>    [1]
 *   [2]      [2]      [3]        |        [0]        [1]         [0]
 *    ↑       [3]                 |                   [0]
 *  push 3                        |
 *
 * 无论是栈还是队列，在js中都没有内置对象，都需要靠数组来模拟，而数组本身的push和pop就完全符合栈的特性
 *
 *        arr.push(3)          arr.pop()即3
 *            ↓                   ↑
 *            ↓        [3]       [3]
 * [2]       [2]       [2]       [2]       [2]
 * [1]  ==>  [1]  ==>  [1]  ==>  [1]  ==>  [1]
 * [0]       [0]       [0]       [0]       [0]
 *
 * 即：利用 array 的 push 和 pop 函数，天然就实现了栈的特性
 *
 * queue
 *
 *
 *
 * 【方法一】核心思想，始终保持内部的 stack2 中元素顺序是和 queue 要求一样, stack2的长度就是queue的长度
 *
 *  假设当前queue中内容为[0,1,2,3]执行：
 *  queue.push(4);
 *  queue.pop();
 *
 *                        第1步：                                  第3步
 *                    s2循环pop出元素                            s1循环pop出元素，
 *                    然后s1循环push进去                         然后s2循环push进去
 *                        [3]                  [3]                [ ]
 * stack1 [ ]             [2]                  [2]               empty
 *                        [1]                  [1]
 *                        [0]                  [0]
 *
 *                ===>            ===>                  ===>
 *                                           第2步
 *                                         将目标元素4，
 *                                         push到s2中
 *                                                                [0]
 *        [0]                                                     [1]
 * stack2 [1]                                                     [2]
 *        [2]            empty                                    [3]
 *        [3]             [ ]                  [4]                [4]
 *
 * 可以优化的点：上面的算法是保障了pop函数直接复用stack的pop，逻辑在push里边处理，但是循环次数较多
 *
 *
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
 * 具体实现详见 mockQueueByStack2.js
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
  if (this.stack2.length) {
    const len = this.stack2.length;
    // pop stack2 & push into stack1
    for (let i = 0; i < len; i++) {
      this.stack1.push(this.stack2.pop());
    }

    // push into stack2
    this.stack2.push(x);

    // pop stack1 & push into stack2
    for (let j = 0; j < len; j++) {
      this.stack2.push(this.stack1.pop());
    }
  } else {
    this.stack2.push(x);
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let tmp = this.stack2.length ? this.stack2.pop() : undefined;
  tmp && this.stack2.push(tmp);
  return tmp;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

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
