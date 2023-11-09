const names = ["John", "Jane", "Sam", "Melissa"];

// for loop
for (let i = 0; i < names.length; i++) {
  const element = names[i];
  console.log(element);
}
console.log("------------------");
// for-of
for (const element of names) {
  console.log(element);
}
console.log("------------------");
// Array.prototype.forEach
names.forEach((element) => console.log(element));
// console.log(res);
console.log("------------------");
// Array.prototype.map

const newArr = names.map((element) => {
  console.log(`Hello ${element}`);
  return `Hello ${element}`;
});
console.log(newArr);

// Array.prototype.filter
const numbers = [1, 2, 3, 4];
const pairs = numbers.filter((element) => element % 2 === 0);
console.log(pairs);

// Array.prototype.reduce
const x = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  15
);
console.log(x);

// Array.prototype.find

const found = names.find((element) => element.length === 4);
console.log(found);

const foundIndex = names.findIndex((element) => element.length === 4);
console.log(foundIndex);

// there is also array.join() that works with strings and adds a space in the concatenation. check MDN for more info

//
