/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.trim();
  let i = 0,
    res = "",
    regex = /\d/,
    symbo = /(\-)||(\+)/,
    max_mun = Math.pow(2, 31) - 1,
    min_mun = Math.pow(-2, 31),
    first = str[0];
  if (!(symbo.test(first) && regex.test(first))) return 0;
  while (i < str.length) {
    let curet = str[i];
    if (curet == "-" || curet == "+" || regex.test(curet)) {
      res += curet;
    }
    i++;
  }
  if (res > max_mun) return max_mun;
  if (res < min_mun) return min_mun;
  return Number(res);
};
console.log(myAtoi("words and 987"));
