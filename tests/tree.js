/**
 *   3
 / \
 9  20
 /  \
 15   7
 */
const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};

var levelOrder = function (root) {
  const ret = []; //结果数组
  if (!root) return ret;

  const q = []; //存放节点的数组,最多为2个,最少为1个
  q.push(root);
  while (q.length !== 0) {
    const currentLevelSize = q.length;
    ret.push([]); //层级数组
    for (let i = 1; i <= currentLevelSize; ++i) {
      //从root开始为第一层
      const node = q.shift(); //从左向右取值,当下标为2时此时的q数组中只剩下了右边的节点
      ret[ret.length - 1].push(node.val); //层级数组的当前层级数组push进当前数据的值
      if (node.left) q.push(node.left); //先将左边的节点push进q数组,这样就保持了从左向右的遍历顺序
      if (node.right) q.push(node.right);
    }
  }
  return ret;
};
