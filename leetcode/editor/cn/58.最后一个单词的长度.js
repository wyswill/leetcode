/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let endInd = 0,
    words = [];

  while (endInd < s.length) {
    let currentChart = s[endInd];
    if (currentChart == " ") {
      words.push(endInd);
    }
    endInd++;
  }
  let ind = words[words.length-1];
  console.log(ind);
  console.log(s.slice(ind, s.length));
};
console.log(lengthOfLastWord("    basdfasdf asdf  asdf"));
