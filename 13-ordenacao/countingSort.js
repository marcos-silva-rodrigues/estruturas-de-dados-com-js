function findMaxValue(array) {
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

export function countingSort(array) {
  if (array.length < 2) {
    return array;
  }

  const maxValue = findMaxValue(array);
  const counts = new Array(maxValue + 1);
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }

    counts[element]++;
  });

  let sortedIndex = 0;

  console.log('counts', counts);

  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });

  return array;
}