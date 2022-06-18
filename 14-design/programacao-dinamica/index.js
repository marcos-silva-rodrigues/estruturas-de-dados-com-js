import { knapSack } from "./knapSack.js";
import { minCoinChange } from "./minCoinChange.js";

// console.log(minCoinChange([1, 5, 10, 25], 36));

const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length;

console.log(knapSack(capacity, weights, values, n));
