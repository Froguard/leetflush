// 假设有一台本地机器，无法做加减乘除运算（包括位运算），因此无法执行 a + b、a+ = 1 这样的 JS 代码，
// 然后我们提供一个服务器端的 HTTP API，可以传两个数字类型的参数，响应结果是这两个参数的和，
// 这个 HTTP API 的 JS SDK（在本地机器上运行）的使用方法如下：
// asyncAdd(3, 5, (err, result) => {
//   console.log(result); // 8
// });
// 要求：现在要求在本地机器上实现一个 sum 函数，支持以下用法：
// (async () => {
//   const result1 = await sum(1, 4, 6, 9, 2, 4);
//   const result2 = await sum(3, 4, 9, 2, 5, 3, 2, 1, 7);
//   const result3 = await sum(1, 6, 0, 5);
//   console.log([result1, result2, result3]); // [26, 36, 12]
// })();

/* --- 题设开始 --- */
/**
 * 异步加函数
 * @param {number} a
 * @param {number} b
 * @param {function} callback(err, res)
 */
function asyncAdd(a, b, callback) {
  let res = a + b;
  setTimeout(() => callback(null, res), 0);
}
// test
(async () => {
  let sum = sum3;
  const result1 = await sum(1, 4, 6, 9, 2, 4);
  const result2 = await sum(3, 4, 9, 2, 5, 3, 2, 1, 7);
  const result3 = await sum(1, 6, 0, 5);
  console.log([result1, result2, result3]); // [26, 36, 12]
})();
/* --- 题设结束 --- */

// 方法一：立即执行函数 IIF
function sum1(...args) {
  return new Promise(resolve => {
    let s = 0;
    function add(i) {
      // 用一个 IIF立即执行函数来暂存住 i 的值，不太优雅！
      (function (n) {
        asyncAdd(s, args[n], (_, result) => {
          if (n < args.length) {
            s = result;
            add(n + 1);
          } else {
            resolve(s);
          }
        });
      })(i);
    }
    add(0);
  });
}

// 方法二，局部作用域变量
function sum2(...args) {
  return new Promise(resolve => {
    let s = 0;
    function add(i) {
      const n = i; // 用一个具有局部作用域的 const(或let) 变量 n 暂存索引值，就不需要用IIF来暂时存变量了，递归写法也不太优雅
      asyncAdd(s, args[n], (_, result) => {
        if (n < args.length) {
          s = result;
          add(n + 1);
        } else {
          resolve(s);
        }
      });
    }
    add(0);
  });
}

// 方法三，写法上相对优雅一些
async function sum3(...args) {
  let s = 0;
  for (let a of args) {
    // 将单个 asyncAdd 回调形式，包装成 promise 形式
    s = await new Promise(resolve => asyncAdd(s, a, (_, res) => resolve(res)));
  }
  return s;
}
