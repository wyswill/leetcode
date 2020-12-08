/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let res = true;
  for (let i = 0, j = s.length - 1; i < s.length, j >= i; i++, j--) {
    let str = s[i],
      end = s[j];
    if (!/[a-zA-Z]/.test(str)) {
      ++j;
      continue;
    }
    if (!/[a-zA-Z]/.test(end)) {
      --i;
      continue;
    }
    res = str == end;
    if (!res) return false;
  }
  return res;
};
// @lc code=end
let str = "OP";
console.log(isPalindrome(str));
