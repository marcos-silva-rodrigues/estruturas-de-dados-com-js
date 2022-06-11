import { bubbleSort, modifiedBubbleSort } from "./bubbleSort.js";
import { selectionSort } from "./selectionSort.js";

function createNonSortedArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }

  return array;
}

let array = createNonSortedArray(5);
console.log(array);

// Bubble Sort
// array = bubbleSort(array);
// console.log(array);

// Modified Bubble Sort
// array = modifiedBubbleSort(array);
// console.log(array);

// Selection Sort
array = selectionSort(array);
console.log(array);