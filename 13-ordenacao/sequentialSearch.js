import { defaultEquals } from '../utils/index.js';

const DOES_NOT_EXISTS = -1;

export function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }
  return DOES_NOT_EXISTS;
}