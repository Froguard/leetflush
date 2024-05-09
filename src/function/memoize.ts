//  https://leetcode.cn/problems/memoize/

/*
记忆函数 
 
请你编写一个函数 fn，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。

记忆函数 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。

你可以假设有 3 个可能的输入函数：sum 、fib 和 factorial 。

 sum 接收两个整型参数 a 和 b ，并返回 a + b 。假设如果参数 (b, a) 已经缓存了值，其中 a != b，它不能用于参数 (a, b)。例如，如果参数是 (3, 2) 和 (2, 3)，则应进行两个单独的调用。
 fib 接收一个整型参数 n ，如果 n <= 1 则返回 1，否则返回 fib (n - 1) + fib (n - 2)。
 factorial 接收一个整型参数 n ，如果 n <= 1 则返回  1 ，否则返回 factorial(n - 1) * n 。


示例 1：
输入：
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
输出：[4,4,1,3,2]
解释：
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum (2, 2);// "call" - 返回 4。sum() 被调用，因为之前没有使用参数 (2, 2) 调用过。
memoizedSum (2, 2);// "call" - 返回 4。没有调用 sum()，因为前面有相同的输入。
// "getCallCount" - 总调用数： 1
memoizedSum(1、2);// "call" - 返回 3。sum() 被调用，因为之前没有使用参数 (1, 2) 调用过。
// "getCallCount" - 总调用数： 2

示例 2：
输入：
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
输出：[2,6,2,2,6,2]
解释：
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - 返回 2。
memoFactorial(3); // "call" - 返回 6。
memoFactorial(2); // "call" - 返回 2。 没有调用 factorial()，因为前面有相同的输入。
// "getCallCount" -  总调用数：2
memoFactorial(3); // "call" - 返回 6。 没有调用 factorial()，因为前面有相同的输入。
// "getCallCount" -  总调用数：2

示例 3：
输入：
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
输出：[8,1]
解释：
fib(5) = 8 // "call"
// "getCallCount" - 总调用数：1
 
提示：
0 <= a, b <= 105
1 <= n <= 10
actions.length === values.length
actions[i] 为 "call" 和 "getCallCount" 中的一个
fnName 为 "sum", "factorial" 和 "fib" 中的一个
*/
// [uncommit]
// 调试命令: ts-node ./src/function/memoize.ts

type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache = new Map<string, any>();
  //
  return function (...args) {
    const key = args.map((a, i) => `${i}-${String(a)}`).join(',');
    let cachedVal: any = undefined;
    /**
     * 这里为什么不直接采用 get 到值之后，判断值是否为 undefined 去处理”是否存在“这个逻辑？
     * 因为结果为 undefined 也有可能被存起来
     * eg：
     * let c = new Map()
     * c.set('a', undefined);
     * c.get('a'); // undefined
     * c.has('a'); // true
     * 即，使用 has 会更加精准
     */
    if (cache.has(key)) {
      cachedVal = cache.get(key);
    } else {
      // @ts-ignore
      cachedVal = fn.call(this, ...args);
      cache.set(key, cachedVal);
    }
    return cachedVal;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
