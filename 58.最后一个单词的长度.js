/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let wordArr = s.split(" ");
  let length = 0;
  if (wordArr.length) {
    length = wordArr[wordArr.length - 1].length;
  }
  return length;
};
console.log(lengthOfLastWord("Hello World"));
