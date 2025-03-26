// Checking if array is empty with proper comments for clarity

// Empty array (truthy value)
const userEmail = [];

// Checking if array exists (not ideal for empty array check)
if (userEmail) {
    console.log("Got user email"); // Incorrectly prints this since empty array is truthy
} else {
    console.log("Don't have user email");
}

// Correct way to check if array is empty
if (userEmail.length === 0) {
    console.log("Array is empty"); // Correctly identifies empty arrays
}

// Example object to demonstrate empty object detection
const emptyObj = {};

// Checking if object is empty using Object.keys()
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // Correctly identifies empty objects
}

// Nullish Coalescing Operator (??) example
// Useful for handling null or undefined values
let val1;
val1 = null ?? 10 ?? 20; // Assigns 10 since null is nullish
console.log(val1);

// Ternary Operator Example
// condition ? trueResult : falseResult
const iceTeaPrice = 100;
iceTeaPrice <= 80 
    ? console.log("less than 80")  // If condition is true
    : console.log("more than 80"); // If condition is false
