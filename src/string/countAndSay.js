// https://leetcode-cn.com/problems/count-and-say
/**
给定一个正整数 n ，输出外观数列的第 n 项。

「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

你可以将其视作是由递归公式定义的数字字符串序列：

countAndSay(1) = "1"
countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
要 描述 一个数字字符串，首先要将字符串分割为 最小 数量的组，每个组都由连续的最多 相同字符 组成。然后对于每个组，先描述字符的数量，然后描述字符，形成一个描述组。要将描述转换为数字字符串，先将每组中的字符数量用数字替换，再将所有描述组连接起来。

示例 1：
输入：n = 1
输出："1"
解释：这是一个基本样例。

示例 2：
输入：n = 4
输出："1211"
解释：
countAndSay(1) = "1"
countAndSay(2) = 读 "1" = 一 个 1 = "11"
countAndSay(3) = 读 "11" = 二 个 1 = "21"
countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"
 
提示：
1 <= n <= 30
*/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // 方法一，循环算出值
  // 计算函数
  function calc(numStr) {
    // console.log('calc: ', numStr);
    if (numStr.length === 1) {
      return `1${numStr}`;
    }
    let nStr = ('' + numStr).split('');
    let res = [];
    let count = 1;
    let tmp = nStr[0];
    let cur = tmp;
    let i;
    for (i = 1; i < nStr.length; i++) {
      tmp = nStr[i];
      if (cur == tmp) {
        count += 1;
      } else {
        // res.push({ count, value: cur });
        res.push(`${count}${cur}`);
        cur = tmp;
        count = 1; // reset
      }
      // 最后一个数是无论如何都需要处理
      if (i === nStr.length - 1) {
        res.push(`${count}${cur}`);
      }
    }
    return res.join('');
  }

  let ca = ['', '1'];
  for (let i = 2; i <= 30; i++) {
    ca[i] = calc(ca[i - 1]);
  }

  return ca[n];
};

console.log(countAndSay(1)); // 1
console.log(countAndSay(2)); //
console.log(countAndSay(3)); //
console.log(countAndSay(4)); //
console.log(countAndSay(5)); //
console.log(countAndSay(6)); //
