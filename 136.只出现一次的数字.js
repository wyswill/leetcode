/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const db = {},
    res = [];
  nums.forEach((ele) => (db[ele] ? db[ele]++ : (db[ele] = 1)));
  for (const i of Object.keys(db)) {
    if (db[i] == 1) res.push(Number(i));
  }
  return res;
};
console.log(singleNumber([1, 2, 1, 3, 2, 5]));
// @lc code=end
