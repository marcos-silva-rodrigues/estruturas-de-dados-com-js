export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
}

export const Colors = {
  RED: 0,
  BLACK: 1
}

export const GraphColors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
}

export const BalanceFactor = {
  UNBALANCE_RIGHT: 1,
  SLIGHTY_UNBALANCE_RIGHT: 2,
  BALANCED: 3,
  SLIGHTY_UNBALANCE_LEFT: 4,
  UNBALANCE_LEFT: 5,
}

export const DOES_NOT_EXISTS = -1;

export function defaultEquals (a, b) {
  return a === b;
}

export function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultDiff(a, b) {
  return Number(a) - Number(b);
}

export function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

export function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

export function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

export const initializeColor = vertices => {
  const color = {};
  for(let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = GraphColors.WHITE;
  }

  return color;
}

export function findMaxValue(array) {
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

export function findMinValue(array) {
  let min = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

export function lessOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function biggerOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}