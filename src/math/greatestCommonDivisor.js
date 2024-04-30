/**
 * 最大公约数 gcd, greatComDiv, getGreatestCommonDivisor，
 * 求取数字 a 和 b 的最大公约数
 * @param {number} a
 * @param {number} b
 * @return {number} gcd
 * @example
 *  greatComDiv(1,2); // 1
 *  greatComDiv(3,4); // 1
 *  greatComDiv(2,4); // 2
 *  greatComDiv(50,100); // 50
 */
function greatComDiv(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  while (b !== 0) {
    const mod = a % b;
    a = b;
    b = mod;
  }
  return a;
}
