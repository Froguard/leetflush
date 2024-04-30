// https://leetcode-cn.com/problems/strobogrammatic-number
/**
中心对称数，（回文字符）
中心对称数是指一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。

请写一个函数来判断该数字是否是中心对称数，其输入将会以一个字符串的形式来表达数字。

示例 1:
输入: num = "69"
输出: true

示例 2:
输入: num = "88"
输出: true

示例 3:
输入: num = "962"
输出: false

示例 4：
输入：num = "1"
输出：true
 */
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  // 解释，6反过来是9，8翻过来是8，0翻过来是0，1翻过来是1
  if (num.length === 1) {
    return '801'.includes(num);
  }
  // 此处需要对 6 和 9 这样的颠倒数进行判定
  let ns = num.split('');
  let rns = [...ns].reverse();
  let correct = true;
  for (let i = 0; i < ns.length; i++) {
    let a = ns[i],
      b = rns[i];
    if (
      (a == '6' && b == '9') ||
      (a == '9' && b == '6') ||
      (a == '8' && b == '8') ||
      (a == '1' && b == '1') ||
      (a == '0' && b == '0')
    ) {
      continue;
    } else {
      correct = false;
      break;
    }
  }
  return correct;
};

console.log(isStrobogrammatic('69')); // true
console.log(isStrobogrammatic('88')); // true
console.log(isStrobogrammatic('1')); // true

console.log('---');

console.log(isStrobogrammatic('962')); // false
console.log(isStrobogrammatic('2')); // false
console.log(isStrobogrammatic('3')); // false
console.log(isStrobogrammatic('33')); // false
