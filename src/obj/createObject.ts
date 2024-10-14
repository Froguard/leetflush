// https://leetcode.cn/problems/create-object-from-two-arrays/

/*
从两个数组中创建对象 
 
给定两个数组 keysArr 和 valuesArr，返回一个新的对象 obj。obj 中的每个键值对都来自 keysArr[i] 和 valuesArr[i]。

如果前面的索引中存在重复的键，则应该跳过该键值对。换句话说，只有第一次出现的键会被添加到对象中。

如果键不是字符串，则应通过调用 String() 方法将其转换为字符串。

示例 1：
输入：keysArr = ["a", "b", "c"], valuesArr = [1, 2, 3]
输出：{"a": 1, "b": 2, "c": 3}
解释：键 "a"、"b" 和 "c" 分别与值 1、2 和 3 配对。

示例 2：
输入：keysArr = ["1", 1, false], valuesArr = [4, 5, 6]
输出：{"1": 4, "false": 6}
解释：首先，将 arr1 中的所有元素转换为字符串。我们可以看到有两个 "1" 的出现。使用第一次出现 "1" 的关联值：4。

示例 3：
输入：keysArr = [], valuesArr = []
输出：{}
解释：没有键，因此返回一个空对象。
 
提示：
keysArr 和 valuesArr 都是有效的 JSON 数组
2 <= JSON.stringify(keysArr).length, JSON.stringify(valuesArr).length <= 5 * 105
keysArr.length === valuesArr.length
*/

// 调试命令: ts-node ./src/obj/createObject.ts

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function createObject(keysArr: JSONValue[], valuesArr: JSONValue[]): Record<string, JSONValue> {
  const res: Record<string, JSONValue> = {};
  for (let i = 0; i < keysArr.length; i++) {
    const k = String(keysArr[i]);
    if (res[k] === undefined) {
      res[k] = valuesArr[i];
    }
  }
  return res;
}
