import { Colors } from "../utils/index.mjs";
import NodeTree from "./node-tree.mjs";

export default class RedBlackTree extends NodeTree {
  constructor(key) {
    super(key);
    this.key = key;
    this.colors = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}