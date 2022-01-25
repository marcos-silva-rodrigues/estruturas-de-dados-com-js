let averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;

console.log(averageTemp);

let daysOfWeek = new Array() ;
daysOfWeek = new Array(7) ;
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursady', 'Friday', 'Saturday');

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

const number = [0, 1, 2, 3, 4, 5, 6];

number[number.length] = 7;
number.push(8, 9);

console.log(number);

Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.length; i >= 0;  i--) {
    this[i] = this[i - 1];
  } 
  this[0] = value;
}
number.insertFirstPosition(-1);

number.unshift(-2, -3);
console.log(number);

number.pop();
console.log(number);

Array.prototype.reIndex = function(myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length;  i++) {
    if(myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }

  return newArray;
}

Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length;  i++) {
    this[i] = this[i + 1];
  } 
  return this.reIndex(this);
}

console.log(number.removeFirstPosition());

console.log(number.shift());

number.splice(5, 3);
console.log(number);

number.splice(5, 0, 2, 3, 4);
console.log(number);

averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[1].length; j++) {
      console.log(array[i][j])
    }
  }
}

printMatrix(averageTemp);

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];

  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i+j+z;
    }
  }
}

for (let i = 0; i < matrix3x3x3.length; i++) {

  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
     console.log(matrix3x3x3[i][j][z]);
    }
  }
}

const zero = 0;
const positive = [1, 2, 3];
const negative = [-1, -2, -3];
console.log(negative.concat(zero, positive));

const isEven = number => number % 2 === 0;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(numbers.every(isEven));
console.log(numbers.some(isEven));
numbers.forEach(number => console.log(number % 2 === 0));

let iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
  console.log(n);
}

let aEntries = numbers.entries();
for (const n of aEntries) {
  console.log(n);
}

let akeys = numbers.keys();
for (const n of akeys) {
  console.log(n);
}

console.log(Array.from(numbers, (x => x % 2 === 0)));
console.log(Array.of(...numbers, 89, 54));
console.log(numbers.fill(0, 10, 13));
console.log(numbers.copyWithin(0, 5, 10));
console.log(numbers.reverse());
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.indexOf(15));
console.log(numbers.lastIndexOf(0));
console.log(numbers.includes(15));
console.log(numbers.toString());
console.log(numbers.join('-'));