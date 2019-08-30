/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let firstStrArr = strs[0],
    pub_head;
  if (!firstStrArr || firstStrArr.length < 1 || firstStrArr.length < 0)
    return "";
  for (let i = 1; i < strs.length; i++) {
    pub_head = [];
    let curent = strs[i];
    for (let i = 0; i < firstStrArr.length; i++) {
      let ele = firstStrArr[i];
      if (ele === curent[i]) {
        pub_head.push(ele);
      }
    }
  }
  return pub_head.length > 0 ? pub_head.join("") : "";
};
