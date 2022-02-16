/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let flag = true,
    i = 0,
    str = '',
    isWordReg = /\w/;
  while (i < s.length) {
    const chart = s[i];
    if (isWordReg.test(chart)) str += chart.toLocaleLowerCase();
    i++;
  }
  let sp = 0,
    ep = str.length - 1;
  while (sp !== ep) {
    if (str[sp] !== str[ep]) return false;
    sp++, ep--;
  }
  return flag;
}
// @lc code=end
console.log(isPalindrome('race a car'));
