import Dictionary from "./dictionary.mjs";

const dictionary = new Dictionary()

dictionary.set('Galdalf', 'galdaf@email.com');
dictionary.set('John', 'john@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.hasKey('Galdalf'));
console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.remove('John');
console.log(dictionary.keyValues());
console.log(dictionary.toString());

dictionary.forEach((k, v) => {
  console.log('ForEach: ', `key: ${k}, value: ${v}`);p
})