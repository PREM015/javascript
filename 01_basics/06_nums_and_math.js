// Creating a number variable (Primitive)
const score = 400;
console.log(score);  // Output: 400

// Creating a Number object
const balance = new Number(100);
console.log(balance);  // Output: [Number: 100]

// Checking equality
console.log(score == balance);    // true (Only checks value)
console.log(score === balance);   // false (Checks value AND data type)

// Triple equals (===) checks both value and data type
console.log(typeof score);    // Output: number
console.log(typeof balance);  // Output: object

// Number methods
console.log(balance.toString().length);  // Output: 3 (because "100" has 3 characters)
console.log(balance.toFixed(1));         // Output: 100.0 (adds one decimal for precision)

// Precision Control
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));  // Output: 123.9 (rounds to 4 significant digits)

// Formatting large numbers
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));  // Output: 10,00,000 (Indian format)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Math object details
console.log(Math);  // Outputs the Math object with its properties and methods

// Absolute value
console.log(Math.abs(-4));  // Output: 4

// Rounding functions
console.log(Math.round(4.6));  // Output: 5 (nearest integer)
console.log(Math.ceil(4.2));   // Output: 5 (rounds up)
console.log(Math.floor(4.9));  // Output: 4 (rounds down)

// Minimum and maximum values
console.log(Math.min(4, 3, 6, 8));  // Output: 3
console.log(Math.max(4, 3, 6, 8));  // Output: 8

// Random number generation
console.log(Math.random());          // Random decimal between 0 and 1
console.log((Math.random() * 10) + 1); // Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10

// Random number between a range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  
// Output: Random integer between 10 and 20 (inclusive)
