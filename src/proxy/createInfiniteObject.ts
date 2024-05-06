// https://leetcode.cn/problems/infinite-method-object/

/*
无穷方法对象 
 
请你编写一个函数，返回一个 无穷方法对象 。

无穷方法对象 被定义为一个对象，它允许您调用任何方法，并始终返回方法的名称。

例如，如果执行 obj.abc123() ，它将返回 "abc123" 。

示例 1：
输入：method = "abc123"
输出："abc123"
解释：
const obj = createInfiniteObject();
obj['abc123'](); // "abc123"
返回的字符串应始终与方法名称匹配。

示例 2：
输入：method = ".-qw73n|^2It"
输出：".-qw73n|^2It"
解释：返回的字符串应始终与方法名称匹配。

提示：
0 <= method.length <= 1000
*/

// 调试命令: ts-node ./src/proxy/createInfiniteObject.ts

function createInfiniteObject(): Record<string, () => string> {
  return new Proxy(
    {}, // origin obj
    {
      // handler desc
      get(obj: any, prop: string) {
        return () => prop;
      },
    },
  );
}

/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */
