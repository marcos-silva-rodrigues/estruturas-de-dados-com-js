import {
  biggerOrEquals,
  Compare,
  defaultCompare,
  defaultEquals,
  DOES_NOT_EXISTS,
  lessOrEquals,
} from "../utils/index.js";

export function interpolationSort(
  array,
  value,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff
) {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;

  while (
    low <= high &&
    biggerOrEquals(value, array[low], compareFn) &&
    lessOrEquals(value, array[high], compareFn)
  ) {
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
    position = low + Math.floor((high - low) * delta);

    if (equalsFn(array[position], value)) {
      return position;
    }

    if (compareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return DOES_NOT_EXISTS;
}
