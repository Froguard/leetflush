/**
 * 在原有斐波那契数列基础上，将结果换为 f(n-1) * f(n+1) - f(n) * f(n)
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  const n = parseInt(line.trim());
  // console.log(calcExpr(n));
  /**
   * 其实斐波那契数，有一个卡西尼恒等式（恰好是这个表达式的值）， f(n-1) * f(n+1) - f(n) * f(n) = (-1)^n;
   * 即：当 n 为偶数，则结果为1，反之则为-1
   *
   * - 卡西尼恒等式：https://oi-wiki.org/math/combinatorics/fibonacci/
   */
  console.log(n % 2 === 0 ? 1 : -1);
  process.exit();
});

// n >= 1
function calcExpr(n) {
  const f0 = 0;
  const f1 = 1;
  const f2 = 1;
  const f3 = 2;
  const f4 = 3;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return f0 * f2 - f1 * f1; // 0 * 1 - 1*1 = -1
  } else if (n === 2) {
    return f1 * f3 - f2 * f2; // 1*2 - 1*1 = 1
  } else if (n === 3) {
    return f2 * f4 - f3 * f3; // 1*3 - 2*2 = -1
  } else {
    const MOD = 1e9 + 7;
    // >= 3 时
    let fn_2 = f1; // f(n-2)
    let fn_1 = f2; // f(n-1)
    let curFn_1 = fn_1; // f(n-1) 记录
    let fn = f1 + f2;
    for (let i = 3; i <= n; i++) {
      fn = (fn_1 + fn_2) % MOD;
      curFn_1 = fn_1;
      // next loop
      fn_2 = fn_1;
      fn_1 = fn;
    }
    // f(n-1)*f(n+1) = f(n-1) * ( f(n-1) + f(n) ) = f(n-1)^2 + f(n-1)*f(n)
    // f(n-1)*f(n+1) - f(n)^2 = f(n-1)^2 + f(n-1)*f(n) - f(n)^2
    return (curFn_1 ** 2 + curFn_1 * fn - fn ** 2) % MOD;
    /**
     * 其实斐波那契数，有一个卡西尼恒等式（恰好是这个表达式的值）， f(n-1) * f(n+1) - f(n) * f(n) = (-1)^n;
     * 即：当 n 为偶数，则结果为1，反之则为-1
     *
     * - 卡西尼恒等式：https://oi-wiki.org/math/combinatorics/fibonacci/
     */
    // return n % 2 === 0 ? 1 : -1;
  }
}

/*
// console.log(calcExpr(0)); // 0
console.log('n=1时：', calcExpr(1)); // -1
console.log('n=2时：', calcExpr(2)); // 1
console.log('n=3时：', calcExpr(3)); // -1
console.log('n=4时：', calcExpr(4)); // 1
console.log('n=5时：', calcExpr(5)); // -1
console.log('n=6时：', calcExpr(6)); // 1
console.log('n=7时：', calcExpr(7)); // -1
console.log('n=8时：', calcExpr(8)); // 1
console.log('n=9时：', calcExpr(9)); // -1
console.log('n=10时：', calcExpr(10)); // 1
console.log('n=11时：', calcExpr(11)); // -1
console.log('n=12时：', calcExpr(12)); // 1
console.log('n=13时：', calcExpr(13)); // -1
console.log('n=14时：', calcExpr(14)); // 1
console.log('n=15时：', calcExpr(15)); // -1
console.log('n=16时：', calcExpr(16)); // 1
console.log('n=17时：', calcExpr(17)); // -1
console.log('n=18时：', calcExpr(18)); // 1
console.log('n=19时：', calcExpr(19)); // -1
console.log('n=20时：', calcExpr(20)); // 1
*/
