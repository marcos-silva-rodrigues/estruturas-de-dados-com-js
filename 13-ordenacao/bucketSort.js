import { insertionSort } from "./insertionSort.js";

function createBuckets(array, bucketSize) {
  let minValue = 0;
  let maxValue = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }

  return buckets;
}

function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }

  return sortedArray;
}

export function bucketSort(array, bucketSize) {
  if (array.length < 2) {
    return array;
  }

  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}