// leetcode.cn/problems/repeat-string/
/**
编写代码实现字符串方法 string.replicate(x) ，它将返回重复的字符串 x 次。
请尝试在不使用内置方法 string.repeat 的情况下实现它。

 示例 1：
输入：str = "hello", times = 2
输出："hellohello"
解释："hello" 被重复了 2 次

示例 2：
输入：str = "code", times = 3
输出：codecodecode"
解释： "code" 被重复了 3 次

示例 3：
输入：str = "js", times = 1
输出："js"
解释："js" 被重复了 1 次

提示：
1 <= times <= 105
1 <= str.length <= 1000
进阶：为了简化分析，让我们假设连接字符串是一个常数时间操作 O(1)。考虑到这个假设，您能编写时间复杂度为 O(log n) 的算法吗？


*/
/**
 * @param {number} times
 * @return {string}
 */
String.prototype.replicate = function (times) {
  // return this.repeat(times);
  return new Array(times).fill(this).join('');
};
