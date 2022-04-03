import Set from './set.js';

const set = new Set();

set.add(1);
set.add(2);

console.log(set.values());

console.log(set.has(1));
console.log(set);

console.log(set.size());
console.log(set.toString());

set.delete(1);
console.log(set.values());

const set1A = new Set();
set1A.add(1);
set1A.add(2);
set1A.add(3);

const set1B = new Set();
set1B.add(3);
set1B.add(4);
set1B.add(5);
set1B.add(6);

const unionSet = set1A.union(set1B);

console.log(unionSet.values());

const set2A = new Set();
set2A.add(1);
set2A.add(2);
set2A.add(3);

const set2B = new Set();
set2B.add(2);
set2B.add(3);
set2B.add(4);

const intersectionAB = set2A.intersection(set2B);
console.log(intersectionAB.values());

const differenceAB = set2A.difference(set2B);
console.log(differenceAB.values());

set1A.delete(3);

console.log(set1A.isSubsetOf(set2A));
console.log(set1A.isSubsetOf(set2B));