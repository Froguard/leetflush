// https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal
/**
给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 补码运算 方法。

注意:

十六进制中所有字母(a-f)都必须是小写。
十六进制字符串中不能包含多余的前导零。如果要转化的数为0，那么以单个字符'0'来表示；对于其他情况，十六进制字符串中的第一个字符将不会是0字符。 
给定的数确保在32位有符号整数范围内。
不能使用任何由库提供的将数字直接转换或格式化为十六进制的方法。

示例 1：
输入: 26
输出: "1a"

示例 2：
输入: -1
输出: "ffffffff"
*/

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  // 先转换为二进制的01数组
  let bitArr = num2BitArr(num);

  // 然后在每4个数组元素组成一个group，去替换成16进制
  let res = [],
    h = '';
  for (let i = 0; i < bitArr.length; i += 4) {
    res.push(getHex(bitArr.slice(i, i + 4)));
  }
  // 精简前导 0，如 [0,...(多个0)...,1,0,1] ==> [1,0,1]（当全部都是0时，保留最后一位0，即[0,...(多个0)...,0] ==> [0]）
  while (res[0] === '0' && res.length > 1) {
    res.shift();
  }
  return res.join('');
};

// 工具函数：将数组转化为二进制01数组
function num2BitArr(num) {
  let bitArr = [];
  let i = 0;
  while (i < 32) {
    let b = num & (1 << i);
    bitArr.unshift(b ? 1 : 0); // b 不为 0 时，就记一次 1
    i++;
  }
  return bitArr;
}

// 工具函数：将二进制01数组，每4位进行转换，转化为16进制
function getHex(bits = []) {
  let sum = bits.reduce((acc, v, i) => {
    v = parseInt(v);
    if (v === 1) {
      acc += Math.pow(2, 3 - i);
    }
    return acc;
  }, 0);
  const codeA = 'a'.charCodeAt();
  if (sum < 10) {
    return '' + sum;
  } else {
    return String.fromCharCode(codeA + (sum - 10));
  }
}
