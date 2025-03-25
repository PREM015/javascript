"use strict"; // Ensures modern JavaScript standards and avoids common pitfalls

// Type Conversion Examples
let score = "hitesh"; // String data type

// console.log(typeof score); // Outputs: string
// console.log(typeof(score)); // Outputs: string (both methods are valid)

let valueInNumber = Number(score); // Converts 'score' to a number
// console.log(typeof valueInNumber); // Outputs: number
// console.log(valueInNumber); // Outputs: NaN (because "hitesh" can't be converted to a valid number)

// Conversion Examples
// "33"    => 33
// "33abc" => NaN (Not a Number)
// true    => 1; false => 0

let isLoggedIn = "hitesh"; // Non-empty string (truthy value)
let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts to boolean
// console.log(booleanIsLoggedIn); // Outputs: true

// Boolean Conversion Examples
// 1        => true
// 0        => false
// ""       => false (empty string)
// "hitesh" => true (non-empty string)

let someNumber = 33; // Number data type

let stringNumber = String(someNumber); // Converts number to string
// console.log(stringNumber); // Outputs: "33"
// console.log(typeof stringNumber); // Outputs: string

// *********************** Operations ***********************

let value = 3;
let negValue = -value; // Negation operator
// console.log(negValue); // Outputs: -3

// Arithmetic Operations
// console.log(2 + 2); // Addition => 4
// console.log(2 - 2); // Subtraction => 0
// console.log(2 * 2); // Multiplication => 4
// console.log(2 ** 3); // Exponentiation (2^3) => 8
// console.log(2 / 3); // Division => 0.666...
// console.log(2 % 3); // Modulus (remainder) => 2

// String Concatenation
let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2; // Concatenation
// console.log(str3); // Outputs: hello hitesh

// Mixing Data Types in Operations
// console.log("1" + 2); // "12" (string wins)
// console.log(1 + "2"); // "12" (string wins)
// console.log("1" + 2 + 2); // "122" (left to right evaluation starts with string)
// console.log(1 + 2 + "2"); // "32" (left to right evaluation starts with numbers)

// Operator Precedence
// console.log((3 + 4) * 5 % 3); // 35 % 3 => 2

// Unary Plus Operator
// console.log(+true); // Outputs: 1
// console.log(+"");   // Outputs: 0

// Multiple Variable Assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // All assigned the value 4

// Increment Operator
let gameCounter = 100;
++gameCounter; // Pre-increment (increments first, then returns the new value)
console.log(gameCounter); // Outputs: 101

// Link to study more about JavaScript Type Conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion






                           