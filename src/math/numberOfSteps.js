// https://leetcode-cn.com/problems/number-of-count-to-reduce-a-number-to-zero
/**
给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。

示例 1：
输入：num = 14
输出：6
解释：
步骤 1) 14 是偶数，除以 2 得到 7 。
步骤 2） 7 是奇数，减 1 得到 6 。
步骤 3） 6 是偶数，除以 2 得到 3 。
步骤 4） 3 是奇数，减 1 得到 2 。
步骤 5） 2 是偶数，除以 2 得到 1 。
步骤 6） 1 是奇数，减 1 得到 0 。

示例 2：
输入：num = 8
输出：4
解释：
步骤 1） 8 是偶数，除以 2 得到 4 。
步骤 2） 4 是偶数，除以 2 得到 2 。
步骤 3） 2 是偶数，除以 2 得到 1 。
步骤 4） 1 是奇数，减 1 得到 0 。

示例 3：
输入：num = 123
输出：12
 
提示：
0 <= num <= 10^6
*/
/**
 * @param {number} num
 * @return {number}
 */
const cached = Object.create(null); // {}
var numberOfSteps = function (num) {
  // 方法一：递归下的备忘录算法，将每次结果都缓存：用空间换时间
  const key = num;
  let c = cached[key];
  if (c === undefined) {
    if (num === 0) {
      c = 0;
    } else {
      let count = 0;
      if (num % 2 === 0) {
        count++;
        num /= 2;
      } else {
        count++;
        num -= 1;
      }
      count += numberOfSteps(num); // 采用递归，这样之前的用例产生出来的缓存值能够被用上
      c = count;
    }
    cached[key] = c;
  }
  return c;

  // 方法二，老老实实的计算，用循环
  // let count = 0;
  // while (num != 0) {
  // 	if (num % 2 == 0) {
  // 		num = num / 2;
  // 	} else {
  // 		num -= 1;
  // 	}
  //     count++;
  // }
  // return count;
};

console.log(numberOfSteps(14)); // 6
console.log(cached);
console.log(numberOfSteps(8)); // 4
console.log(cached);
console.log(numberOfSteps(123)); // 12
console.log(cached);
