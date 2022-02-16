export class node {
  val: string | number;
  left: node;
  right: node;
  constructor(val: string | number, left: node, right: node) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
