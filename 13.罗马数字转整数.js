/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const lomaMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ]);
  let res = 0;
  s = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    let curent = s[i],
      next = s[i + 1];
    if (lomaMap.get(next) > lomaMap.get(curent)) {
      res += lomaMap.get(next) - lomaMap.get(curent);
      i++; //当I的后面是V的时候跳过V的循环
    } else res += lomaMap.get(curent);
  }
  return res;
};
console.log(romanToInt("xxx"));
