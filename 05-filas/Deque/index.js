import Deque from "./deque.js";

const deque = new Deque();

console.log(deque.isEmpty());

deque.addBack("John");
deque.addBack("Jack");

console.log(deque.toString());

deque.addBack("Camila");
console.log(deque.size());

deque.removeFront();
console.log(deque.toString());

deque.removeBack();
console.log(deque.toString());
deque.addFront("John");
console.log(deque);

function palindromoChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }

  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerString; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while(deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log('a', palindromoChecker('a'));
console.log('level', palindromoChecker('level'));
console.log('Was it a car ou a cat I saw', palindromoChecker('Was it a car ou a cat I saw'));
console.log('Step on no pets', palindromoChecker('Step on no pets'));
