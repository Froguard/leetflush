//
/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 
示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /*
    分析，首先，这道题中：
    只会出现'{','[','(','}',']',')'这6种字符，且有可能出现嵌套
    我们可以直接把 '{}','()','[]'三种情况进行replace成''，最后如果符合规格的话，应该最后结果为空字符串
    s.replace(/(\{\})|(\[\])|(\(\))/g,'') === ''
    但需要注意，有嵌套情况需要处理，所以我们需要借助循环去多次replace然后check
    */
  if (!s || s.length % 2 !== 0) {
    return false;
  }
  // 方法一
  /*
    while (s && (s.includes('()') || s.includes('{}') || s.includes('[]'))) {
        s = s.replace(/\{\}/g, '').replace(/\(\)/g, '').replace(/\[\]/g, '');
    }
    return s === '';
    */

  // 方法二
  /*
    for (let i = 0; ; i++) {
        if (s === '') {
            // console.log('已满足', i);
            return true;
            // break;
        }
        const len1 = s.length;
        s = s.replace(/\{\}/g, '').replace(/\(\)/g, '').replace(/\[\]/g, '');
        if (s.length === len1) {
            // console.log('找不到成对出现的目标', i);
            break;
        }
    }
    // s && console.log(s);
    return s === '';
    */
  // 方法三
  /**
     使用栈方式，栈具有“先进后出”特性，来预测字符的配对，在输入过程中
     - 当输入左边部分字符时，将应该匹配的右边部分压栈，即碰到 '{' 时，将其应该匹配的右边部分 '}' 压栈
     - 当输入的是后边部分字符时，则通过从栈中去取回预测部分看看是否匹配上，匹配不上就是问题
     eg: {[()]} 在输入时，
     input：   {      [      (      )      ]      }
     stack:   |}|    |]|    |)|    |)|    |]|    |}|
          :          |}|    |]|    |]|    |}|
          :                 |}|    |}|
     这里用数组的push和pop函数模拟栈，push添加元素到队尾，pop去除队尾元素（同时删除该元素）
     */
  let stack = [];
  for (let c of s) {
    switch (c) {
      case '{': {
        stack.push('}'); // 进栈
        break;
      }
      case '(': {
        stack.push(')'); // 进栈
        break;
      }
      case '[': {
        stack.push(']'); // 进栈
        break;
      }
      default: {
        if (stack.length === 0 || c != stack.pop()) {
          return false;
        }
        break;
      }
    }
  }
  return stack.length === 0;
};

// true
console.log(isValid('()'));
console.log(isValid('{}'));
console.log(isValid('[]'));
console.log(isValid('[]{}()'));
console.log(isValid('{()}'));
console.log(isValid('(([]){})'));
console.log(isValid('([[][]{({}({}))}])'));

console.log('------');

// false
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('[]{}('));
