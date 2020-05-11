/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isFu = false;
  x < 0 ? ((x = Math.abs(x)), (isFu = true)) : x;
  let res = String(x).split("").reverse();
  let r = isFu ? -Number(res.join("")) : Number(res.join(""));
  if (r > Math.pow(2, 31) - 1 || r < -Math.pow(2, 31)) return 0;
  else return r;
};
console.log(reverse(-123));
