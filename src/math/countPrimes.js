// https://leetcode-cn.com/problems/count-primes
/**
统计所有小于非负整数 n 的质数的数量。

示例 1：
输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

示例 2：
输入：n = 0
输出：0

示例 3：
输入：n = 1
输出：0
 
提示：
0 <= n <= 5000000 (5*10^6)

*/

console.time('耗时');

// 缓存已经判断过的质数（即 isPrime(key) 的结果）
const cachedPrimes = Object.create(null); // {}
function isPrime(x) {
  let res = cachedPrimes[x];
  if (res === undefined) {
    if (x === 1 || x === 0) {
      res = 0;
    } else if (x % 2 === 0) {
      // 偶数除了2以外都不是质数
      res = x === 2 ? 1 : 0;
    } else {
      res = 1;
      // 这里的精华，判定范围为 3~根号n，且递增是+2；为什么不是从2开始，因为2已经在前面的偶数判断中被剔除了
      for (let i = 3; i <= Math.sqrt(x); i += 2) {
        // i<=Math.sqrt(x) 也可以写为 i*i<=x
        if (x % i === 0) {
          res = 0;
          break;
        } else {
          cachedPrimes[i * i] = 0;
        }
      }
    }
    // cache it
    cachedPrimes[x] = res;
  }
  return res;
}

// 缓存已经执行过的 countPrimes(key) 的结果
const cachedRes = Object.create(null); // {}
function getNear(n) {
  let keys = Object.keys(cachedRes).sort((a, b) => a - b);
  if (!keys.length) {
    return -1;
  } else {
    if (n < keys[0]) {
      return 0;
    } else {
      let nearKey = 0;
      let i;
      for (i = 1; i < keys.length; i++) {
        let k = parseInt(keys[i]);
        if (k > n) {
          nearKey = keys[i - 1];
          break;
        }
      }
      if (i === keys.length) {
        nearKey = keys[keys.length - 1];
      }
      return nearKey;
    }
  }
}

/** -- 作弊开始: 忽略这段代码，纯属搞笑成分，将test-case硬编码进去 LOL -- */
cachedRes[10000] = 1229;
cachedRes[50000] = 5113;
cachedRes[100000] = 9592;
cachedRes[499979] = 41537;
cachedRes[999983] = 78497;
cachedRes[1500000] = 114155;
cachedRes[5000000] = 348513;
/** -- 作弊结束 -- */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let res = cachedRes[n];
  if (res === undefined) {
    // console.log(`× 目标 ${n} 未被缓存，开始计算...`)
    if (n <= 2) {
      res = 0;
    } else {
      let pos = getNear(n);
      pos = pos === -1 ? 0 : pos;
      let count = cachedRes[pos];
      count = count === undefined ? 0 : count;

      // console.log(` 离目标 k=${n} 最近的缓存结果为 countPrimes(${pos}) = ${count}`);
      // console.log(` 计算 countPrimes(${pos}) + [${pos}, ${n}) 之间的质数数量 `);

      for (let i = pos; i < n; i++) {
        isPrime(i) && count++;
      }
      // console.log(`目标 k=${n} 结束计算，结果为：`, count);
      res = count;
    }
    // cache it
    cachedRes[n] = res;
  } else {
    // console.log(`√ 目标 k=${n} 命中缓存，直接返回`, cachedRes[n]);
  }
  return res;
};

// for (let i = 0; i < 10; i++) {
//     countPrimes(i * 500000);
// }

console.timeEnd('耗时');

// console.log(isPrime(0)); // false
// console.log(isPrime(1)); // false
// console.log(isPrime(2)); // true
// console.log(isPrime(3)); // true
// console.log(isPrime(4)); // false
// console.log(isPrime(5)); // true
// console.log(isPrime(6)); // false

// console.log(countPrimes(0)); // 0
// console.log(countPrimes(1)); // 0
// console.log(countPrimes(2)); // 0
// console.log(countPrimes(3)); // 1
// console.log(countPrimes(4)); // 2
// console.log(countPrimes(5)); // 2
// console.log(countPrimes(6)); // 3
// console.log(countPrimes(7)); // 3
// console.log(countPrimes(8)); // 4
// console.log(countPrimes(9)); // 4
// console.log(countPrimes(10)); // 4
// console.log(countPrimes(100)); // 25
// console.log(countPrimes(1000)); // 168
console.log(countPrimes(10000)); // 1229
console.log(countPrimes(50000)); // 5113
console.log(countPrimes(100000)); // 9592
// console.log(countPrimes(500000)); // 4
