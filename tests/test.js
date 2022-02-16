console.time();
let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "0"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "1", "1", "0"],
  ["1", "0", "0", "1", "0"],
];

function f() {
  let res = 0;
  const key = "1";
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      let current = matrix[x][y]; //当前的值
      //只有在当前值等于关键值的时候才进行矩阵扫描
      if (current === key) {
        if (scan(x + 1, y) && scan(x, y + 1) && scan(x + 1, y + 1)) {
          console.log({ x, y, current });
        }
      }
    }
  }

  /**
   * 左上角
   * [x+1]=1
   * [y+1]=1
   * [x+1][y+1]=1
   *
   * 右上角
   * [x-1]=1
   * [y+1]=1
   * [x-1][y+1]=1
   *
   * 左下角
   * [x+1]=1
   * [y+1]=1
   * [x+1][y+1]=1
   *
   * 右下角
   * [x-1]=1
   * [y-1]=1
   * [x-1][y-1]=1
   */
  function scan(x, y) {
    try {
      return matrix[x][y] == "1";
      // if (Number(matrix[ x + 1 ][ y ]) && Number(matrix[ x ][ y + 1 ]) && Number(matrix[ x + 1 ][ y + 1 ])) res++;
    } catch (e) {}
  }

  return res * 2;
}

console.log(f());
console.timeEnd();
