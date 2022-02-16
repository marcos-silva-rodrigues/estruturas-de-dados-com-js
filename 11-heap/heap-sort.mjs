import { defaultCompare, swap } from "../utils/index.mjs";

function heapify(array, index, heapSize, compareFn) {
  let largest = index;
  const left = (2 * index) + 1;
  const rigth = (2 * index) + 2;

  if (left < heapSize && compareFn(array[left], array[largest]) > 0) {
    largest = left;
  }

  if (rigth < heapSize && compareFn(array[rigth], array[largest]) > 0) {
    largest = rigth;
  }

  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
}

export default function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }

  return array;
}