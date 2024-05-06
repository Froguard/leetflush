// https://leetcode.cn/problems/check-if-object-instance-of-class/description/
/**
请你编写一个函数，检查给定的值是否是给定类或超类的实例。

可以传递给函数的数据类型没有限制。例如，值或类可能是  undefined 。

示例 1：
输入：func = () => checkIfInstance(new Date(), Date)
输出：true
解释：根据定义，Date 构造函数返回的对象是 Date 的一个实例。
示例 2：
输入：func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstance(new Dog(), Animal); }
输出：true
解释：
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog 是 Animal 的子类。因此，Dog 对象同时是 Dog 和 Animal 的实例。

示例 3：
输入：func = () => checkIfInstance(Date, Date)
输出：false
解释：日期的构造函数在逻辑上不能是其自身的实例。

示例 4：
输入：func = () => checkIfInstance(5, Number)
输出：true
解释：5 是一个 Number。注意，"instanceof" 关键字将返回 false。
*/

// ts-node ./src/checkIfInstanceOf.ts

/**
 * 检查是否为实例
 * @param {any} obj
 * @param {any} classFunction
 * @returns {boolean}
 */
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  // 再判空一下
  if (obj === null || obj === undefined /* || obj !== obj*/ || classFunction === null || classFunction === undefined) {
    return false;
  }
  // 对于 classFuntion 也需要判定一下
  if (typeof classFunction !== 'function') {
    return false;
  }
  // 优先使用默认的，避免情况误判，如箭头函数，没有prototype
  if (obj instanceof classFunction) {
    return true;
  }
  // 最后走原型链判定
  let __proto__ = Object.getPrototypeOf(obj);
  const prototype = classFunction.prototype;
  // eslint-disable-next-line no-constant-condition
  while (1) {
    if (__proto__ === null || __proto__ === undefined) {
      return false;
    }
    if (__proto__ === prototype) {
      return true;
    }
    __proto__ = Object.getPrototypeOf(__proto__); // 持续往回找父类型
  }
  return false;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

checkIfInstanceOf(new Date(), Date); // true
checkIfInstanceOf(Date, Date); // false

checkIfInstanceOf(5, Number); // true

checkIfInstanceOf({}, Object); // true
checkIfInstanceOf(Object.create(null), Object); // false

class Animal {}
class Dog extends Animal {}
checkIfInstanceOf(new Dog(), Animal); // true
