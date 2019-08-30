/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let arr_str = "";
  digits.map(ele => {
    arr_str += ele;
  });
  arr_str = (Number(arr_str) + 1).toString();
  let res_arr = [];
  for (let i = 0; i < arr_str.length; i++) {
    let ele = arr_str[i];
    res_arr.push(Number(ele));
  }
  return res_arr;
};
console.log(plusOne([4, 3, 2, 9]));
