import { knapSack } from "./knapSack.js";
import { lcs } from "./lcs.js";
import { matrixChainOrder } from "./matrixCahinOrder.js";
import { minCoinChange } from "./minCoinChange.js";

// console.log(minCoinChange([1, 5, 10, 25], 36));

const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length;

// console.log(knapSack(capacity, weights, values, n));

// lcs('acbaed', 'abcadf');

const p =[10, 100, 5, 50, 1];
console.log(matrixChainOrder(p));


