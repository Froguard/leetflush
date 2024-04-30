//
/**

*/
/**
 * @param {string[]} words
 * @return {string}
 */
// TODO: 未完成！！！！！
var longestWord = function (words) {
  if (words.length === 1) {
    return words[0];
  }
  words.sort((a, b) => {
    if (a.charCodeAt(0) === b.charCodeAt(0)) {
      // 同一个首字母开头
      if (a.length === b.length) {
        return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
      } else {
        return a.length - b.length;
      }
    } else {
      return a.charCodeAt(0) - b.charCodeAt(0);
    }
  });
  console.log(words);
  let res = words[0];
  for (let i = 1; i < words.length; i++) {
    if (isIncrease(words[i - 1], words[i])) {
      res = words[i];
    } else {
      break;
    }
  }
  return res;
};

function isIncrease(s, b) {
  return s === b.substr(0, b.length - 1);
}

let a1 = [
  'b',
  'br',
  'bre',
  'brea',
  'break',
  'breakf',
  'breakfa',
  'breakfas',
  'breakfast',
  'l',
  'lu',
  'lun',
  'lunc',
  'lunch',
  'd',
  'di',
  'din',
  'dinn',
  'dinne',
  'dinner',
];
let a2 = ['m', 'mo', 'moc', 'moch', 'mocha', 'l', 'la', 'lat', 'latt', 'latte', 'c', 'ca', 'cat'];
