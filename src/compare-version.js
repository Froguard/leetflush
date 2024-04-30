/**
 * [uncommit]
 * 比较版本号，相等返回0，大于返回1，小于返回-1
 * @param {string} v1
 * @param {string} v2
 */
function compareVersion(v1, v2) {
  const list1 = v1.split('.');
  const list2 = v2.split('.');
  for (let i = 0; i < 3; i++) {
    const m = parseInt(list1[i]) || 0;
    const n = parseInt(list2[i]) || 0;
    if (m === n) {
      continue;
    } else {
      return m > n ? 1 : -1;
    }
  }
  return 0;
}
