// https://leetcode-cn.com/problems/decode-ways
/**
一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

'A' -> 1
'B' -> 2
...
'Z' -> 26
要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)
注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

题目数据保证答案肯定是一个 32 位 的整数。

示例 1：

输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2：

输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
示例 3：

输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
示例 4：

输入：s = "06"
输出：0
解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。
 

提示：

1 <= s.length <= 100
s 只包含数字，并且可能包含前导零。
*/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s == '0') {
    return 0;
  }
  if (s.length == 1) {
    return 1;
  }
  if (s.length > 1 && s[0] == '0') {
    return 0;
  }

  const LEN = s.length;
  let dp = [];
  dp[0] = 1;
  for (let i = 1; i <= LEN; i++) {
    /**
     *
     * dp[i] = part1 + part2
     * - part1 = s[i-1]=='0' ? 0 : dp[i-1]
     * - part2 ：当 s[i-2]和s[i-1]组成数字在 [10,26] 之间，且 i>=2 时，part2 = dp[i-2]
     * 即最好状况下： dp[i] = dp[i-1] + dp[i-2]
     **/
    let part1 = s[i - 1] == '0' ? 0 : dp[i - 1];
    let part2 = 0;
    if (i >= 2) {
      let n = parseInt(`${s[i - 2]}${s[i - 1]}`);
      if (10 <= n && n <= 26) {
        part2 = dp[i - 2];
      }
    }
    dp[i] = part1 + part2;
  }
  return dp[dp.length - 1]; // dp.pop();

  // let res = [];
  // let count = 0;
  // function parse(/*list = [], */index = 0) {
  //     const i = index;
  //     if (i >= LEN) { // i 超出边界时，表示已经遍历完成，此时记录一次结果就行
  //         count++;
  //         // res.push(list);
  //         return;
  //     }
  //     if (i < LEN) {
  //         let c = s[i];
  //         if (i+1 < LEN) {
  //             let nextC = s[i+1];
  //             if (nextC != '0') {
  //                 // 常规单字母组合
  //                 // let newList1 = list.concat(c);
  //                 parse(/*newList1, */i+1);
  //             }
  //             // 双字母情况
  //             if (c != '0') {
  //                 let num = parseInt(`${c}${nextC}`);
  //                 // console.log('nextC', nextC, 'num', num);
  //                 if (10 <= num && num <= 26) {
  //                     // let newList2 = list.concat(num);
  //                     parse(/*newList2, */i+2);
  //                 }
  //             }
  //         } else {
  //             // 常规单字母组合
  //             // let newList1 = list.concat(c);
  //             parse(/*newList1, */i+1);
  //         }
  //     }
  // }
  // parse(/*[], */ 0);
  // // console.log(res);
  // return count;
};
