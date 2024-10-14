const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const lines = [];

rl.on('line', line => lines.push(line));

rl.on('close', () => {
  const [n, arr] = lines;
  const nums = arr.split(/\s+/);
  let c1 = 0;
  let c5 = 0;
  let c10 = 0;
  for (const s of nums) {
    if (s === '1') {
      c1++;
    } else if (s === '5') {
      c5++;
    } else if (s === '10') {
      c10++;
    } else {
      continue;
    }
  }
  console.log(c1, c5, c10);
});
