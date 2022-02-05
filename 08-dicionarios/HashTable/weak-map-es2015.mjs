const map = new WeakMap();

const obj1 = { name: 'Gandalf' };
const obj2 = { name: 'John' };
const obj3 = { name: 'Tyrion' };

map.set(obj1, 'gandalf@email.com');
map.set(obj2, 'johnsnow@email.com');
map.set(obj3, 'tyrion@email.com');

console.log(map.has(obj1));
console.log(map.get(obj2));

map.delete(obj3);

console.log(map);