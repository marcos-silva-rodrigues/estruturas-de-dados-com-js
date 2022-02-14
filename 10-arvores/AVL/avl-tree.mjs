import NodeTree from "../../models/node-tree.mjs";
import { BalanceFactor, Compare, defaultCompare } from "../../utils/index.mjs";
import BinarySearchTree from "../BST/binary-search-tree.mjs";

export default class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  getNodeHeight(node) {
    if (node == null) return -1;

    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  getBalanceFactor(node) {
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCE_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTY_UNBALANCE_RIGHT;
      case 1:
        return BalanceFactor.UNBALANCE_LEFT;
      case 2:
        return BalanceFactor.SLIGHTY_UNBALANCE_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node == null) {
      return new NodeTree(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }

    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCE_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotateLL(node);
      } else {
        return this.rotateLR(node);
      }
    }

    if (balanceFactor === BalanceFactor.UNBALANCE_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotateRR(node);
      } else {
        return this.rotateRL(node);
      }
    }
    return node;
  }

  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node == null) return node;

    const balanceFactor = this.getBalanceFactor(node);
    if(balanceFactor === BalanceFactor.UNBALANCE_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTY_UNBALANCE_LEFT
      ) {
        return this.rotationLL(node);
      }

      if (
        balanceFactorLeft === BalanceFactor.SLIGHTY_UNBALANCE_RIGHT
      ) {
        return this.rotationLR(node.left);
      }
    }

    if(balanceFactor === BalanceFactor.UNBALANCE_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTY_UNBALANCE_RIGHT
      ) {
        return this.rotationRR(node);
      }

      if (
        balanceFactorRight === BalanceFactor.SLIGHTY_UNBALANCE_LEFT
      ) {
        return this.rotationRL(node.left);
      }
    }

    return node;
  }
}