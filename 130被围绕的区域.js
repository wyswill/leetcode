//给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
//
// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
//
// 示例:
//
// X X X X
//X O O X
//X X O X
//X O X X
//
//
// 运行你的函数后，矩阵变为：
//
// X X X X
//X X X X
//X X X X
//X O X X
//
//
// 解释:
//
// 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被
//填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
// Related Topics 深度优先搜索 广度优先搜索 并查集
// 👍 292 👎

let data = [
  ["x", "x", "x", "x"],
  ["x", "o", "o", "x"],
  ["x", "x", "o", "x"],
  ["x", "o", "x", "x"],
];
data = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  board.forEach((ele, index) => {
    ele.forEach((el, ind) => {
      if (el.toString().toLocaleUpperCase() === "O") {
        let _index = ind;
        while (_index < ele.length) {
          _index++;
        }
      }
    });
  });
};
//leetcode submit region end(Prohibit modification and deletion)
solve(data);
console.log(data);
