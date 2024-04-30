// https://leetcode-cn.com/problems/distribute-candies-to-people
/**
排排坐，分糖果。

我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。

给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。

然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 * n 颗糖果。

重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。

返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。

示例 1：
输入：candies = 7, num_people = 4
输出：[1,2,3,1]
解释：
第一次，ans[0] += 1，数组变为 [1,0,0,0]。
第二次，ans[1] += 2，数组变为 [1,2,0,0]。
第三次，ans[2] += 3，数组变为 [1,2,3,0]。
第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），最终数组变为 [1,2,3,1]。

示例 2：
输入：candies = 10, num_people = 3
输出：[5,2,3]
解释：
第一次，ans[0] += 1，数组变为 [1,0,0]。
第二次，ans[1] += 2，数组变为 [1,2,0]。
第三次，ans[2] += 3，数组变为 [1,2,3]。
第四次，ans[0] += 4，最终数组变为 [5,2,3]。
 
提示：
1 <= candies <= 10^9
1 <= num_people <= 1000
*/
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  if (num_people === 1) {
    return [candies];
  }
  // 方法一，按照题意循环操作求一把
  let res = [];
  let c, index;
  for (let i = 0; candies > 0; i++) {
    c = i + 1;
    c = Math.min(candies, c);
    candies -= c;
    index = i % num_people;
    if (res[index] === undefined) {
      res[index] = c;
    } else {
      res[index] += c;
    }
  }
  // 糖果有可能不够分，需要补上0。不过也可以在res初始化的时候先把0补上去，即：res=new Array(num_people).fill(0)
  while (res.length < num_people) {
    res.push(0);
  }
  return res;

  // 方法二，TODO: 数学分析一下res中的每一位数字的来源
  /**
   * 等差数列,前x项和,求和公式：Sx = x*a1 + x(x-1)*d/2
   *
   * - i=0, 1 + (n+1) + (2n+1) ... +
   * - i=1, 2 + (n+2) + (2n+2) ...
   * - ...
   * - i=n-2, (n-1) + (n+(n-1)) + (2n+(n-1))...
   * - i=n-1, n + (n+n) + (2n+n)...
   *
   * 规律：
   *   - 每个元素，值都是一个等差数列求和，差为n，不过不能保证完全匹配等差，有可能分到最后一次分到的数量是比等差最后一项少
   *   - 后一个元素比前一个元素
   *
   */
};
