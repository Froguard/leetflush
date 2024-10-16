/**
 * 斐波那契进阶变种（卡西尼不等式）
 *
 * - 在原有斐波那契数列基础上，将求解的结果换为 f(n - 1) * f(n + 1) - f(n) * f(n)
 *
 * 链接：https://ac.nowcoder.com/acm/contest/92882/F
 *
 * 题目描述
 * 设f[i]表示斐波那契数论的第i项
 * f[1]=1,f[2] =1,f[i] = f[i - 1] + f[i - 2]
 * 给定一个n求𝑓[𝑛−1]∗𝑓[𝑛+1]−𝑓[𝑛]^2
 *
 * 输入描述:
 * 一个整数n
 *
 * 输出描述:
 * 一个整数，表示答案
 * 示例1
 * 输入：4
 * 输出：1
 *
 * 备注:
 * - 对于30%的数据，𝑛⩽5
 * - 对于50%的数据，𝑛⩽10^5
 * - 对于80%的数据，𝑛⩽10^15
 * - 对于100%的数据，2⩽𝑛⩽10^1000000
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', line => {
  // const n = parseInt(line.trim()) || 0;
  //
  // 由“卡西尼恒等式”可知，f(n-1)*f(n-2) - f(n)^2 = (-1)^n →→→ 偶数时为1; 奇数时为-1
  const bigNum = BigInt(line.trim()); // 由于最大输入可能是 10^1000000, 常规存储无法满足，所以，这里上 BigInt
  console.log(bigNum % BigInt(2) === BigInt(0) ? 1 : -1);
  // console.log(calcExpr(bigNum));
});

/*
function isEven(bigNumber) {
  return bigNumber % BigInt(2) === BigInt(0);
}
function calcExpr(n) {
  const f0 = 0;
  const f1 = 1;
  const f2 = 1;
  const f3 = 2;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return f0 * f2 - f1 * f1; // -1
  } else if (n === 2) {
    return f1 * f3 - f2 * f2; // 1
  } else {
    // 方式1：数学特性
    // 由“卡西尼恒等式”可知，f(n-1)*f(n-2) - f(n)^2 = (-1)^n
    return isEven(n) ? 1 : -1;
    
    // 方式2：硬计算
    // const MOD = 1e9 + 7;
    // let fn_2 = f1;
    // let fn_1 = f2;
    // let curFn_1 = fn_1;
    // let fn = fn_1 + fn_2;
    // for (let i = 3; i <= n; i++) {
    //     fn = (fn_1 + fn_2) % MOD;
    //     curFn_1 = fn_1;
    //     // next loop
    //     fn_2 = fn_1;
    //     fn_1 = fn;
    // }
    // return curFn_1 ** 2 + curFn_1 * fn - fn ** 2;    
  }
}
*/
