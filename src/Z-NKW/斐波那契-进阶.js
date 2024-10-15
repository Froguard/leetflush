/**
 * 在原有斐波那契数列基础上，将结果换为 f(n - 1) * f(n + 1) - f(n) * f(n)
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  const n = parseInt(line.trim());
  console.log(f(n - 1) * f(n + 1) - f(n) * f(n));
  process.exit();
});

function f(n) {
  if (n <= 2) {
    return 1;
  }
  let fn_1 = 1;
  let fn_2 = 1;
  let sum = fn_1 + fn_2;
  for (let i = 3; i <= n; i++) {
    sum = (fn_1 + fn_2) % (1e9 + 7);
    fn_1 = fn_2;
    fn_2 = sum;
  }
  return sum;
}
