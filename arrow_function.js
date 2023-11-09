// Function declaration
function add(x, y) {
  return x + y;
}

// Default parameter
function add2(x = 1, y = 4) {
  return x + y;
}

console.log(add(4, 9));

// Function expression
const add3 = function (x, y) {
  return x + y;
};

// Arrow function
const add4 = (x, y) => {
  return x + y;
};

// Or we can simply write it this way if we only have one instruction
const add5 = (x, y) => x + y;

const greeting = name => `Hello ${name}`;

console.log(add3(8, 9));

console.log(greeting('Jane'));
