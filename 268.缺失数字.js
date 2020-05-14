/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length == 1) {
    if (nums[0] == 0) return 1;
    if (nums[0] == 1) return 0;
  }
  const db = [];
  nums.forEach((ele) => (db[ele] = ele));
  for (let i = 0; i < db.length; i++) {
    if (db[i] == undefined) return db[i - 1] + 1;
  }
  return db[db.length - 1] + 1;
};
console.log(missingNumber([0,1]));
// @lc code=end
