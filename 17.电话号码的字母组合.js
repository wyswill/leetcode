/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const db = new Map([
      ["2", "abc"],
      ["3", "def"],
      ["4", "ghi"],
      ["5", "jkl"],
      ["6", "mno"],
      ["7", "pqrs"],
      ["8", "tuv"],
      ["9", "wxyz"],
    ]),
    regist = new Set(),
    resArr = [];
  if (digits.length < 2) return db.get(digits).split("");
  if (digits !== "" || digits) {
    const arr = digits.split("");
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const k = `${arr[i]}${arr[j]}`;
        if (!regist.has(k)) {
          regist.add(k);
          add(db.get(arr[i]), db.get(arr[j]));
        } else continue;
      }
    }
  }
  function add(str1, str2) {
    if (str1 && str2) {
      for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
          resArr.push(str1[i] + str2[j]);
        }
      }
    }
  }
  return resArr;
};
// @lc code=end
let res = letterCombinations("234");
console.log(res);
