// https://leetcode-cn.com/problems/valid-perfect-square
/**
给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如  sqrt 。

示例 1：
输入：num = 16
输出：true

示例 2：
输入：num = 14
输出：false
 
提示：
1 <= num <= 2^31 - 1
*/
/**
 * 检查 num 是否为完全平方数
 * - 解释：如果一个数 num 可以表示为一个整数 x^2 即 x 的平方，则我们说 num 是一个「完全平方数」
 * @param {number} num
 * @return {boolean}
 */
let ps = new Set(); // 缓存已经被发现了的完全平方数，用set是因为set具有key唯一性
let max = 1;
var isPerfectSquare = function (num) {
  // 方法一：备忘录算法，缓存住结果
  // if (ps.has(num)) {
  //     console.log('缓存中');
  //     return true;
  // } else if (max * max > num) {
  //     console.log('已计算');
  //     return false;
  // } else {
  //     console.log('首次计算', max);
  //     for (let i = max; i * i <= num; i++) {
  //         ps.add(i*i);
  //         max = i;
  //     }// 注意，循环结束之后的 i 会比 max 大 1 的，所以不要在外面进行 max = i 赋值
  //     console.log('计算完毕', max);
  //     return max * max === num;
  // }

  // 方法二，即便不用库，其实也是可以开根号的，
  // 利用 x的y次方（即x^y），中，如果y是分数 1/n ,则 x^y = x^(1/n) 表示对x开n次方 num^0.5， 即 num**0.5
  // 然后对开完根号的结果进行判定是否为正数 对于整数 n 转换为 int 之后还是自己，而小数则不是
  let sqrt = num ** 0.5; // 精妙！！！
  return sqrt === parseInt(sqrt); // 也可以用 sqrt % 1 === sqrt 来判断 sqrt 是否是正数，小数对1取模结果会不为自己
};
