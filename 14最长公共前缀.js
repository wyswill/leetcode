//编写一个函数来查找字符串数组中的最长公共前缀。 
//
// 如果不存在公共前缀，返回空字符串 ""。 
//
// 示例 1: 
//
// 输入: ["flower","flow","flight"]
//输出: "fl"
// 
//
// 示例 2: 
//
// 输入: ["dog","racecar","car"]
//输出: ""
//解释: 输入不存在公共前缀。
// 
//
// 说明: 
//
// 所有输入只包含小写字母 a-z 。 
// Related Topics 字符串 
// 👍 1207 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function longestCommonPrefix(strs) {
  let comPre = "", first = strs.shift();
  if (!first) return comPre;
  for (let i = 0; i < first.length; i++) {
    let flag = strs.every(ele => ele[i] === first[i]);
    if (flag) comPre += first[i]; else return comPre;
  }
  return comPre;
}

//leetcode submit region end(Prohibit modification and deletion)

let d = ["flower", "flow", "flight"];
let res = longestCommonPrefix(d);
console.log(res);