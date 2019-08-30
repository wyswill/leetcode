/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const len = s.length;
  if (len % 2) return false;

  const parentheses = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  const leftParenthese = [],
    regex = /\{|\[|\(/;

  for (let i = 0; i < len; i++) {
    if (regex.test(s[i])) leftParenthese.push(s[i]);
    else {
      const left = leftParenthese.pop();
      if (parentheses[left] !== s[i]) return false;
    }
  }

  if (leftParenthese.length) return false;
  return true;
};
