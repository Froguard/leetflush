// https://leetcode-cn.com/problems/divisor-game/
/*
除数博弈
爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

选出任一 x，满足 0 < x < N 且 N % x == 0 。
用 N - x 替换黑板上的数字 N 。
如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 False。假设两个玩家都以最佳状态参与游戏。

示例 1：
输入：2
输出：true
解释：爱丽丝选择 1，鲍勃无法进行操作。

示例 2：
输入：3
输出：false
解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
 
提示：
1 <= N <= 1000
 */

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  /*
    dp[n] = !dp[n-x]
    - Alice 在 n 的位置能不能胜利，取决于 n - x 这个位置 Bob 能不能胜利
    - 如果 n - x 这个位置 Bot 无法胜利（即：dp[n-x]=false ），那 Alice 在位置 n 一定是能胜利的（即：dp[n]=true ）
     */
  // 获取一个数的约数集合，不包含自己
  function getDivisors(n) {
    let divs = [1];
    for (let i = 2; i < N; i++) {
      if (n % i === 0) {
        divs.push(i);
      }
    }
    return divs;
  }
  let dp = [];
  dp[0] = true; // 推出来的，因为 dp[1]=false, 1的约数集合为[1]，则 !dp[1-1]=false ==》 !dp[0]=false ==》 dp[0]=true
  for (let i = 1; i <= N; i++) {
    // 对于一个数i，只要在其约数集合里边找到存在一个x，这个x能够满足让下一轮(i-x)赢不了，就代表必赢（操作时选择这个x，然后让下一轮(i-x)赢不了，自然他就赢了）
    let hasExitX = false;
    for (let x of getDivisors(i)) {
      if (!dp[i - x]) {
        hasExitX = true;
        break;
      }
    }
    dp[i] = hasExitX;
  }
  return dp[N];
};

console.log(divisorGame(1)); // false
console.log(divisorGame(2)); // true
console.log(divisorGame(3)); // false
console.log(divisorGame(4)); // true
console.log(divisorGame(5)); // false
console.log(divisorGame(6)); // true
console.log(divisorGame(7)); // false
console.log(divisorGame(8)); // true
console.log(divisorGame(9)); // false
console.log(divisorGame(10)); // true

// 看出来没有，交替出现，即 n 为偶数时候肯定为true，n为奇数时候肯定为false，为什么？请看下面第二中解法

/**
 *
 * 另一种思路清奇的解法，吊炸天
 * 两条定理：
 * 1. 奇数的所有因数(或叫约数)，都是奇数
 * 2. 两个奇数相减，一定为偶数，即：奇数 - 奇数 = 偶数
 *
 * 如果N是奇数，因为奇数的所有因数都是奇数，因此 N 进行一次 N-x 的操作结果一定是偶数
 * 所以如果 a 拿到了一个奇数，那么轮到 b 的时候，b拿到的肯定是偶数，这个时候 b 只要进行 -1， 还给 a 一个奇数，那么这样子b就会一直拿到偶数，到最后b一定会拿到最小偶数2，a就输了。
 *
 * 所以如果游戏开始时Alice拿到N为奇数，那么她必输，也就是false。
 * 如果拿到N为偶数，她只用 -1，让bob 拿到奇数，最后bob必输，结果就是true。
 *
 * 答案如下
 *
 * var divisorGame = (N) => !(N&1); // 判断是否为偶数即可
 */
