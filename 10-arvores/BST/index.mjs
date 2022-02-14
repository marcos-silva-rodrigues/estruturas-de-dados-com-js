import BinarySearchTree from "./binary-search-tree.mjs";

const tree = new BinarySearchTree();

tree.insert(11);

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log(tree);

const printNode = n => console.log(n);
// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);
console.log(tree.min());
console.log(tree.max());

console.log(tree.search(1) ? 'Key 1 found' : 'key 1 not found ');
console.log(tree.search(8) ? 'Key 8 found' : 'key 8 not found ');