/**
 * 链接：https://ac.nowcoder.com/acm/problem/208813
 *
 * 题目描述
 * 在一个排列中，如果一对数的前后位置与大小顺序相反，即前面的数大于后面的数，那么它们就称为一个逆序。一个排列中逆序的总数就称为这个排列的逆序数。
 * 比如一个元素个数为4的数列，其元素为2，4，3，1，则(2,1)，(4,3)，(4,1)，(3,1)是逆序，逆序数是4
 * 现在求给定数列的逆序数
 *
 * 输入描述:
 * - 第一行为N，表示数列的元素个数(N<=1000)
 * - 第二行为N个用空格隔开的整数,其值在int范围内
 *
 * 示例：
 * 输入：
 * - 4
 * - 2，4，3，1
 * 输出：
 * - 4
 */
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const lines = [];

rl.on('line', line => lines.push(line));

rl.on('close', () => {
  const [n, arr] = lines;
  const nums = arr.split(/\s+/).map(Number);
  // console.log({ n, nums });
  let count = 0;
  for (let i = n - 1; i >= 0; i--) {
    const cur = nums[i];
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > cur) {
        count++;
      }
    }
  }
  console.log(count);
});
