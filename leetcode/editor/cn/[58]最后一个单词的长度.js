//给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。 
//
// 如果不存在最后一个单词，请返回 0 。 
//
// 说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。 
//
// 
//
// 示例: 
//
// 输入: "Hello World"
//输出: 5
// 
// Related Topics 字符串 
// 👍 229 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s === "") return 0;
//正常

  const words = s.split(" ");
  let lastwrod = words[words.length - 1];
  if (lastwrod) return lastwrod.length;
  else {
    for (let i = words.length - 1; i >= 0; i--) {
      if (words[i] !== "") {
        lastwrod = words[i];
        console.log(lastwrod);
        break;
      }
    }
    return lastwrod.length;
  }
};
//leetcode submit region end(Prohibit modification and deletion)
const word = " a ";
let res = lengthOfLastWord(word);
console.log(res);
