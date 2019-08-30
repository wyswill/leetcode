/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let temp = String(x);
  let tempArr = [];
  for (let i = 0; i < temp.length; i++) {
    tempArr.push(temp[i]);
  }
  let res = tempArr.reverse().join("");
  if (res == temp) return true;
  else return false;
};
