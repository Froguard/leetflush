// 没有这个题，字节改进过
/**
七进制数

给定一个整数，将其转化为36进制，并以字符串形式输出。

为什么是36进制？因为恰好 0-9加上a-z能够显示的下

扩展1：设计 62 进制， [0-9a-zA-Z] （36=10+26+26）
扩展2：设计 N 进制，注意这里的N，需要能够有对应的显示字符集合!!!
      - 如 二进制为[0,1] 十进制为[0-9]， 十六进制为[0-9a-f]，三十六进制为[0-9a-z]
      - N 进制的话，需要先想好，它的字符集是什么？

*/
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase36 = function (num) {
  if (num == 0) {
    return '0';
  }
  let flag = num < 0 ? '-' : '';
  let res = '',
    tmp,
    n = Math.abs(num);
  while (n > 0) {
    tmp = n % 36;
    res = '' + convert46(tmp) + res;
    n = Math.floor(n / 36);
  }
  return flag + res;
};
function convert46(n) {
  return n <= 9 ? `${n}` : String.fromCharCode(97 + (n - 10)); // cgardeCode: a-97 A-65 ;  ('a'.charCode(0)=97)
}

console.log(convertToBase36(71));
console.log(convertToBase36(1009));
console.log(convertToBase36(0));
console.log(convertToBase36(1));
console.log(convertToBase36(2));
console.log(convertToBase36(9));
console.log(convertToBase36(-9));
console.log(convertToBase36(-1));
