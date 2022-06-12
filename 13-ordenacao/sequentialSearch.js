import { defaultEquals, DOES_NOT_EXISTS } from '../utils/index.js';

export function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }
  return DOES_NOT_EXISTS;
}