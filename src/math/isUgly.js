/**
 * @param {nber} n
 * @return {boolean}
 */
var isUgly = function (n) {
  // 对能被2,3,5整除的数不断除2,3,5，最后剩1就是，剩0就不是
  if (n < 1) {
    return false;
  }
  while (n % 5 == 0) {
    n /= 5;
  }
  while (n % 3 == 0) {
    n /= 3;
  }
  while (n % 2 == 0) {
    n /= 2;
  }
  return n == 1;
};
