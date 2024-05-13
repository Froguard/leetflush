// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/

/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例 1：
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

示例 2：
输入：digits = ""
输出：[]

示例 3：
输入：digits = "2"
输出：["a","b","c"]

提示：
0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。 
 
*/
// 调试命令: ts-node ./src/greedy/letterCombinations.ts

const keyboard: (string[] | null)[] = [
  null,
  null,
  ['a', 'b', 'c'], // 2
  ['d', 'e', 'f'], // 3
  ['g', 'h', 'i'], // 4
  ['j', 'k', 'l'], // 5
  ['m', 'n', 'o'], // 6
  ['p', 'q', 'r', 's'], // 7
  ['t', 'u', 'v'], // 8
  ['w', 'x', 'y', 'z'], // 9
];

function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return [];
  }
  if (digits.length === 1) {
    return keyboard[+digits];
  }
  const nums: number[] = digits.split('').map(s => +s);
  // const res: string[] = [];
  const res = new Set<string>();

  function deal(readyStr: string, nextPos: number) {
    if (readyStr.length === nums.length) {
      // res.push(readyStr);
      res.add(readyStr);
      return;
    } else {
      const waitList = keyboard[nums[nextPos]];
      for (let i = 0; i < waitList.length; i++) {
        deal(readyStr + waitList[i], nextPos + 1);
      }
    }
  }
  deal('', 0);

  // return res;
  return [...res];
}

// console.log(letterCombinations(''));
// console.log(letterCombinations('2'));
// console.log(letterCombinations('23'));
// console.log(letterCombinations('456'));
// console.log(letterCombinations('789'));

console.log(letterCombinations('23456789'));
