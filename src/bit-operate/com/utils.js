/**
 * 获取一个有符号数的符号位
 * @param {number} num
 * @returns {number} 0 or 1
 */
function getSign(num) {
  // 方法1
  // return num >= 0 ? 0 : 1;
  // 方法2
  // console.log('对于正数n,进行 n & 1<<31，结果总为0', 100 & 1 << 31);
  // console.log('对于负数n,进行 n & 1<<31，结果不为0', -100 & 1 << 31);
  return num & (1 << 31 === 0) ? 1 : 0;
}

//
//
/**
 * 原码表示：
 *   正：6  --> [0, ...(28个0)..., 1,1,0]
 *   负：-6 --> [1, ...(28个0)..., 1,1,0] // 和正数唯一区别在于符号位
 * 补码表示：
 *   正：6  --> [0, ...(28个0)..., 1,1,0] // 正数不变
 *   负：-6 --> [1, ...(28个1)..., 0,1,0] // 负数为反码+1
 * @param {number} num
 * @param {booelan} useComplement 是否使用补码表示，默认false，即默认使用原码表示
 * @return {numbers[]}
 */
function num2BitArr(num, useComplement = false) {
  let bitArr = [];
  let i = 0;
  while (i < 32) {
    let b;
    if (useComplement) {
      // 1.补码表示法
      b = num & (1 << i);
      bitArr.unshift(b ? 1 : 0); // b 不为 0 时，就记一次 1
    } else {
      // 1.正码（或叫原码）表示法
      if (i === 31) {
        // 最高位必须为符号位
        b = num > 0 ? 0 : 1; // 正数符号位为0，负数符号位为1
      } else {
        b = Math.abs(num) & (1 << i);
      }
      bitArr.unshift(b ? 1 : 0);
    }
    i++;
  }
  return bitArr;
}

/**
 *
 * @param {number[]} bitArr
 * @param {boolean} hasSignFlag
 * @return {numbers}
 */
function bitArr2Num(bitArr = [], hasSignFlag = false) {
  let num = 0;
  let i = 0;
  let acc = 0;
  while (i < 32) {
    if (bitArr[i] === 1) {
      if (hasSignFlag) {
        num = num | (1 << (32 - 1 - i)); // 有符号位时
      } else {
        acc += Math.pow(2, i); // 处理无符号位时
      }
    }
    i++;
  }
  return num;
}
// 正数的 原码==反码==补码
let b6a = num2BitArr(6);
console.log(b6a); // 0...0,110
let b6b = num2BitArr(6, true);
console.log(b6b); // 0...0,110

// 负数：
// 原码 = 符号位不变(为1)，其余位和对应正数其余余位一样
// 反码 = 符号位不变(为1)，其余位在对应正数其余余位取反
// 补码 = 反码 + 1
let nb6a = num2BitArr(-6);
console.log(nb6a); // 10...0,110
let nb6b = num2BitArr(-6, true);
console.log(nb6b); // 11...1,010
// console.log(bitArr2Num(b6));

/**
 * 将二进制01数组，每4位进行转换，转化为16进制
 *   [0,0,0,1] --> '1'
 *   [0,1,0,1] --> '5'
 *   [1,0,1,0] --> 'a'
 *   [1,0,1,1] --> 'b'
 *   ...
 * @param {number[]} bits
 * @returns {string}
 */
function convert4bitToHex(bits = []) {
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

/**
 * 将数字转化为16进制
 * @param {number} num
 * @returns {string}
 */
function convertNumToHex(num) {
  // 先转换为二进制的01数组,负数以补码表示
  let bitArr = num2BitArr(num, true);

  // 然后在每4个数组元素组成一个group，去替换成16进制
  let res = [],
    h = '';
  for (let i = 0; i < bitArr.length; i += 4) {
    res.push(convert4bitToHex(bitArr.slice(i, i + 4)));
  }
  // 精简前导 0，如 [0,...(多个0)...,1,0,1] ==> [1,0,1]（当全部都是0时，保留最后一位0，即[0,...(多个0)...,0] ==> [0]）
  while (res[0] === '0' && res.length > 1) {
    res.shift();
  }
  return res.join('');
}

module.exports = {
  getSign,
  num2BitArr,
  bitArr2Num,
  convert4bitToHex,
  convertNumToHex,
};
