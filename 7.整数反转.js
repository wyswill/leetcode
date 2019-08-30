/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isFu = false;
  if (x < 0) {
    x = -x;
    isFu = true;
  }
  let temp = String(x);
  let resArr = [];
  for (let i = 0; i < temp.length; i++) {
    resArr.push(temp[i]);
  }
  let res = resArr.reverse();

  for (let i = 0; i < res.length; i++) {
    if (res[0] > 0) break;
    else if (res[i] == 0) res.shift();
  }
  if (isFu) {
    resArr.unshift("-");
  }
  let r = Number(resArr.join(""));
  if (r > Math.pow(2, 31) - 1 || r < -Math.pow(2, 31)) return 0;
  else return r;
};
