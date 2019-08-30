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
  const lomaMap = new Map();
  lomaMap
    .set("I", 1)
    .set("V", 5)
    .set("X", 10)
    .set("L", 50)
    .set("C", 100)
    .set("D", 500)
    .set("M", 1000);
  let res = 0;
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
