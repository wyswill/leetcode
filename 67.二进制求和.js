/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = Number(a) + Number(b);
  let arr = (res + "").split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    let ele = Number(arr[i]);
    let next = Number(arr[i - 1]);
    if (ele > 1 && i > 0) {
      arr[i - 1] = next + 1;
      arr[i] = 0;
    }
    if (ele > 1 && i == 0) {
      arr[i] = 0;
      arr.unshift(1);
    }
  }
  return arr.join("");
};
let a = "101011";
let b = "1011";
console.log(addBinary(a, b));
