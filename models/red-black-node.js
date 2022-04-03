import { Colors } from "../utils/index.js";
import NodeTree from "./node-tree.js";

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