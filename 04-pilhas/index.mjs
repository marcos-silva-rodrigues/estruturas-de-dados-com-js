import StackArray from "./stack-array.mjs";
import Stack from "./stack.mjs";

const stack = new StackArray();
console.log(stack.isEmpty());

stack.push(5);
stack.push(7);
stack.push(11);

console.log(stack.size());
console.log(stack.isEmpty());

stack.pop();
stack.pop();

console.log(stack);

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while(number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);

    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';

  if(!(base >= 2 && base <= 36)) return '';

  while(number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));