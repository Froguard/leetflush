// https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof
// https://leetcode-cn.com/problems/validate-stack-sequences/
/**
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

示例 1：
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

示例 2：
输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
 

提示：
0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed 是 popped 的排列。
*/
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const LEN_PUSH = pushed.length;
  const LEN_POP = popped.length;
  if (!LEN_PUSH && !LEN_POP) {
    return true;
  }
  if (LEN_PUSH == 1 && LEN_POP == 1) {
    return pushed[0] == popped[0];
  }

  let isCorrect = false;
  let stack = []; // 需要利用到一个辅助栈做检查
  let pushI = 0;
  let popI = 0;
  while (popI < LEN_POP) {
    // 如果下一个弹出的数字，不在辅助栈栈顶，则把pushed中的未入栈元素，压入辅助栈
    while (stack.length == 0 || stack[stack.length - 1] != popped[popI]) {
      if (pushI >= LEN_PUSH) {
        break;
      }
      stack.push(pushed[pushI]);
      pushI++;
    }
    // 如果所有的数字都压入辅助栈，但是仍然没有找到，则说明不是一个正确popped序列
    if (stack[stack.length - 1] != popped[popI]) {
      break;
    }
    stack.pop();
    popI++;
  }

  // 正常情况下，辅助栈会消耗光，同时popped序列也应该是被检查完的状态
  if (stack.length == 0 && popI >= LEN_POP - 1) {
    isCorrect = true;
  }

  return isCorrect;
};
