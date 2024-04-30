// https://leetcode-cn.com/problems/climbing-stairs/submissions/
// https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

*/

/**
 * 分析
 * 翻过去看，从最后一级梯子，即第n级梯子去看，由于每一次只能爬 1 级台阶，或 2级台阶
 * 所以，爬到第n级台阶，只有两大类情况
 * - 情况1：从 n - 1，一次爬了 1 步，上到了 n 级
 * - 情况2：从 n - 2，一次爬了 2 步，上到了 n 级
 * 继而：爬上 n 级台阶的方法数则是：爬上 (n-1) 级台阶方法数，加上 爬上 (n-2) 级台阶的方法数，两者之和
 * 持续反推：
 * - 当 n = 1 时，有 1 种方法
 * - 当 n = 2 时，有 2 种方法：“方法一、1 + 1”；“方法二、2”
 * - （只有 n 为 1 或 2 时，是最简形式的走法可以直接列出来，接下来就需要开始推算了）
 * - 当 n = 3 时，则开始有：“爬上 1 级台阶的方法数，即 1” + “爬上 2 级台阶的方法数，即 1” = 1 + 2 = 3，  f(3) = f(3-2) + f(3-1) => f(3) = f(1) + f(2)
 * - 当 n = 4 时，则开始有：“爬上 2 级台阶的方法数，即 1” + “爬上 3 级台阶的方法数，即 2” = 2 + 3 = 5，  f(4) = f(4-2) + f(4-1) => f(3) = f(2) + f(3)
 * - ...
 * - 规律：
 *     - f(n)=f(n−1)+f(n−2)，(n>=3)
 *     - f(1)=1, f(2)=2；即 "当n<=2时，f(n)=n"
 *
 */

const cached = new Map(); // 该变量为方法1.1用
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // if (n == 0){
  //     return 1;
  // }
  if (n <= 2) {
    return n;
  }
  // 方法1，【深度递归】
  // 深度递归会导致超时，因为时间复杂度较高，为 O(2^n)
  // return (climbStairs(n-2) + climbStairs(n-1)) % 1000000007; // 确保数字不超限制，取模;

  // 方法1.1（方法1的改进版）【备忘录算法】
  /**
    方法1中为什么会超时，是因为其执行次数是每次都分裂为两个子节点，接近与n层高度的二叉树的节点数，即2^n次，但如果细究可以发现，有一些节点是重复计算的
    比如: 计算 n = 5 时，f(5) = f(3) + f(4)
         计算 n = 4 时，f(5) = f(2) + f(3)，可以看出 f(3) 被计算了两次
    所以，这里我们可以对函数的计算结果进行进行缓存，这样已经计算过的就不需要重复计算了，直接return，这种以空间换时间的方法，叫做“备忘录算法”，此时算法复杂度降低到了O(n)
     */
  // 这里需要再外部增加缓存对象 cached
  /*
    if (cached.get(n)) {
        return cached.get(n);
    } else {
        let res = climbStairs(n-2) + climbStairs(n-1);
        cached.set(n, res);
        return res;
    }
    */

  // 方法2：【动态规划】复杂度 O(1)
  // 以 n = 3 开始算
  let f_n_2 = 1, // f(n-2)=f(3-2)=f(1)=1
    f_n_1 = 2, // f(n-1)=f(3-1)=f(2)=2
    fn;
  for (let i = 3; i <= n; i++) {
    fn = (f_n_2 + f_n_1) % 1000000007; // 确保数字不超限制，取模
    f_n_2 = f_n_1;
    f_n_1 = fn;
  }
  return fn;
};

console.log(climbStairs(10));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(44)); // 134903163
