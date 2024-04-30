/**
 * 获取 一个数n，其对应的所有约数
 * [约数]:如果一个数x，它能够满足 n 能整除 x，即 n % x == 0, 那么说它是约数
 * @param {number} n
 */
function getDivisors(n) {
  let res = [1];
  for (let i = 2; i * i <= n; i++) {
    // for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      res.push(i);
      if (i * i != n) {
        res.push(n / i); // 另一个约数
      }
    }
  }
  res.push(n);
  return res;
}

for (let i = 1; i <= 100; i++) {
  console.log(getDivisors(i));
}

/**
 * 判断是否为质数
 * [质数]: 约数仅仅包含1和它本身的数，就是质数
 * - 所有的偶数，除了2以为都不是质数
 * - 0 和 1 不是质数
 * @param {number} n
 */
function isPrime(n) {
  if (n === 0 || n === 1) {
    return false;
  } else if (n % 2 === 0) {
    return n === 2; // 偶数里面只有2是质数，其余都不是
  } else {
    let res = true;
    for (let i = 3; i * i <= n; i += 2) {
      // 之所以递增为2，是因为前面偶数已经被判断过了
      // 从 [3, sqrt(n)] ,i以2递增，一旦发现有约数，则说明不是质数
      if (n % i === 0) {
        res = false;
        break;
      }
    }
    return res;
  }
}

//
module.exports = {
  isPrime,
  getDivisors,
};
