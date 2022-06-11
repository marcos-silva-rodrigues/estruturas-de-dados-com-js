import { bubbleSort, modifiedBubbleSort } from "./bubbleSort.js";
import { countingSort } from "./countingSort.js";
import { insertionSort } from "./insertionSort.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";
import { selectionSort } from "./selectionSort.js";

function createNonSortedArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }

  return array;
}

// let array = createNonSortedArray(5);
// console.log(array);

// Bubble Sort
// array = bubbleSort(array);
// console.log(array);

// Modified Bubble Sort
// array = modifiedBubbleSort(array);
// console.log(array);

// Selection Sort
// array = selectionSort(array);
// console.log(array);

// Insertion Sort
// array = [3, 5, 1, 4, 2]
// array = insertionSort(array);

// Merge Sort
// let array = createNonSortedArray(8);
// array = mergeSort(array);
// console.log(array);

// Quick Sort
// let array = [3, 5, 1, 6, 4, 7, 2];
// array = quickSort(array);
// console.log(array);

// Counting Sort
let array = [5, 4, 3, 2, 3, 1];
array = countingSort(array);
console.log(array);