/**
 * 题目描述
 * 输入两个升序排列的序列，将两个序列合并为一个有序序列并输出。
 * 链接：https://ac.nowcoder.com/acm/problem/25323
 *
 * 数据范围: 1≤n,m≤1000
 * 序列中的值满足: 0≤val≤30000
 *
 * 输入描述:
 * 输入包含三行:
 * 第一行包含两个正整数n, m，用空格分隔。n表示第二行第一个升序序列中数字的个数，m表示第三行第二个升序序列中数字的个数。
 * 第二行包含n个整数，用空格分隔。
 * 第三行包含m个整数，用空格分隔。
 *
 * 输出描述:
 * 输出为一行，输出长度为n+m的升序序列，即长度为n的升序序列和长度为m的升序序列中的元素重新进行升序序列排列合并。
 *
 * 实例1：
 * 输入：
 * - 5 6
 * - 1 3 7 9 22
 * - 2 8 10 17 33 44
 * 输出：
 * - 1 2 3 7 8 9 10 17 22 33 44
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];
rl.on('line', line => lines.push(line));
rl.on('close', () => {
  const [line0, line1, line2] = lines;
  // const [m, n] = line0.split(/\s+/).map(Number);
  const nums1 = line1.split(/\s+/).map(s => parseInt(s)).filter(n => n || n === 0); // prettier-ignore
  const nums2 = line2.split(/\s+/).map(s => parseInt(s)).filter(n => n || n === 0); // prettier-ignore

  /*
	// 方式1
	const res = [...nums1, ...nums2];
	res.sort((a, b) => (a - b));
  */

  // /*
  // 方式2: 执行效率快一些
  const res = [];
  while (nums1.length || nums2.length) {
    let n;
    if (nums1.length && nums2.length) {
      const n1 = nums1[0];
      const n2 = nums2[0];
      n = n1 < n2 ? nums1.shift() : nums2.shift();
    } else {
      n = nums1.length ? nums1.shift() : nums2.shift();
    }
    res.push(n);
  }
  // */

  console.log(res.join(' '));
  process.exit();
});
