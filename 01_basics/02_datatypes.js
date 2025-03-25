"use strict"; // Treat all JavaScript code as per the newer ECMAScript version for better security and performance

// alert(3 + 3) // This line is commented because we are using Node.js, not a browser environment

// Adding proper formatting for better code readability
console.log(3 + 3); // Clear and concise way to write expressions

console.log("Hitesh"); // Simple string output

// Variable declarations with meaningful comments
let name = "hitesh";    // String data type
let age = 18;           // Number data type
let isLoggedIn = false; // Boolean data type
let state;              // Undefined data type (since no value is assigned)

// Data types in JavaScript:
// number   => Represents integers and floating-point numbers (up to 2^53)
// bigint    => For large integer values beyond 'number' limits
// string    => Represents text enclosed in quotes ("", '', or ``)
// boolean   => Represents true/false values
// null      => A special value representing "nothing" (intentional absence of value)
// undefined => Represents an uninitialized variable
// symbol    => Used for creating unique identifiers (mainly for object properties)

// Object => A collection of key-value pairs, commonly used for structured data

// Type checking examples
console.log(typeof undefined); // Output: 'undefined' (the type itself is 'undefined')
console.log(typeof null);      // Output: 'object' (a known JavaScript quirk)
