// 交换数组中，i 元素和 j 元素
function swap(arr, i, j) {
  // 方法一，使用中间变量的方式：通用性较好，i和j元素可以为任何类型的元素
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;

  // 方法二，js解构写法：通用性较好，i和j元素可以为任何类型的元素
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // 方法三四均只适用于数字元素

  // 方式三，如果元素都是数字，可以用加减法
  arr[i] = arr[i] + arr[j];
  arr[j] = arr[i] - arr[j];
  arr[i] = arr[i] - arr[j];

  // 方法三，变种，换汤不换药，只是把加减顺序调一下
  arr[i] = arr[i] - arr[j];
  arr[j] = arr[i] + arr[j];
  arr[i] = arr[j] = arr[i];

  // 方法四，如果元素都是数字,位^异或操作
  /**
   * a^b = b^a
   * a^a = 0
   * a^0 = a
   */
  arr[i] = arr[i] ^ arr[j]; // a1 = a ^ b
  arr[j] = arr[j] ^ arr[i]; // b1 = b ^ a1 = b ^ a ^ b = b^b ^ a = 0 ^ a = a
  arr[i] = arr[i] ^ arr[j]; // a1 = a1 ^ b1 = a^b ^ a = a^a ^ b = 0 ^ b = b
  /**
   * 疑惑操作，的其他应用：求取一个数组中唯一不重复的数字
   * a^a^X^b^c^b^c^d^e^c^e = a^a^b^b^c^c^d^d^e^e^X = 0^0^0^0^0^X = 0^X
   * 所有元素一起异或即可
   */
}
