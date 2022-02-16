/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const first = strs[0];
  let chart = "";
  for (let i = 0; i < first.length; i++) {
    let res = strs.every((ele) => ele.startsWith(chart));
    if (!res) break;
    chart += first[i];
  }
  console.log(chart);
};
let data = ["dog", "racecar", "car"],
  data2 = ["flower", "flow", "flight"];
let res = longestCommonPrefix(data2);
