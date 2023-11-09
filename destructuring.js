/*
  - "The destructuring assignment syntax is a
     JavaScript expression that makes it possible
     to extract data from arrays or objects into
     distinct variables" - Mozilla Developer Network
  - Destructuring syntax can be used on left-hand
    side of assignments
*/

// Array
const names = ['John', 'Jane', 'Sam', 'Melissa'];

// Using array index
// const person1 = names[0];
// const person2 = names[1];
// const person3 = names[2];
// const person4 = names[3];

const [person1, person2, person3, person4] = names;
console.log(person1, person2, person3, person4);

// Swap
// let a = 15
// let b = 20

// [a, b] = [b, a]

// Object
const user = {
  name: 'John',
  age: 25,
  profession: 'web developer',
  address: { city: 'NY', building: 50, app: 24 },
};

// Using dot notation
//   const name = user.name;
//   const age = user.age;
//   const city = user.address.city;
//   const building = user.address.building;
//   const app = user.address.app;

// Using destructuring assignment
const {
  name: x,
  profession: pro,
  address: { city, building, app },
} = user;

console.log(x, pro, city, building, app);
