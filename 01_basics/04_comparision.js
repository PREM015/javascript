"use strict";
// Basic Comparison Operations
console.log(2 > 1);   // true - 2 is greater than 1
console.log(2 >= 1);  // true - 2 is greater than or equal to 1
console.log(2 < 1);   // false - 2 is not less than 1
console.log(2 == 1);  // false - 2 is not equal to 1
console.log(2 != 1);  // true - 2 is not equal to 1

// String vs Number Comparisons
console.log("2" > 1);   // true - "2" is converted to a number (2) before comparison
console.log("02" > 1);  // true - "02" is also converted to a number (2) before comparison

// Edge Cases with `null`
console.log(null > 0);    // false - `null` is treated as `0` in numeric comparisons
console.log(null == 0);   // false - Special rule: `null` is only loosely equal to `undefined`
console.log(null >= 0);   // true - `null` is treated as `0` in numeric comparisons

// Edge Cases with `undefined`
console.log(undefined == 0);  // false - `undefined` is not equal to any number
console.log(undefined > 0);   // false - `undefined` is treated as `NaN` in numeric comparisons
console.log(undefined < 0);   // false - `undefined` is treated as `NaN` in numeric comparisons

// Strict Equality (`===`)
console.log("2" === 2);  // false - Strict comparison checks both type and value
                         // "2" is a string, and 2 is a number, so they are NOT equal
