// ===============================
//            Arrays
// ===============================

// ✅ Arrays can store multiple data types and are zero-indexed

// Creating arrays
const myArr = [0, 1, 2, 3, 4, 5]       // Regular array declaration
const myHeors = ["shaktiman", "naagraj"] // Array of strings

// Using the `Array` constructor
const myArr2 = new Array(1, 2, 3, 4)   // Creates an array [1, 2, 3, 4]

// Accessing array elements
// console.log(myArr[1]);  // Output: 1 (element at index 1)

// ===============================
//         Array Methods
// ===============================

// Adding elements
// myArr.push(6)     // Adds 6 at the end: [0, 1, 2, 3, 4, 5, 6]
// myArr.push(7)     // Adds 7 at the end: [0, 1, 2, 3, 4, 5, 6, 7]

// Removing elements
// myArr.pop()       // Removes the last element: [0, 1, 2, 3, 4, 5, 6]

// Adding at the beginning
// myArr.unshift(9)  // Adds 9 at the beginning: [9, 0, 1, 2, 3, 4, 5]

// Removing from the beginning
// myArr.shift()     // Removes the first element

// Checking for values
// console.log(myArr.includes(9)); // Output: false (9 is not in the array)
// console.log(myArr.indexOf(3));  // Output: 3 (index of 3)

// Joining array elements into a string
// const newArr = myArr.join()     // Joins all elements with ',' by default
// console.log(myArr);             // Original array remains unchanged
// console.log(newArr);            // Output: "0,1,2,3,4,5"

// ===============================
//     Slice vs Splice Methods
// ===============================

// Slice() - Extracts part of an array (original array remains unchanged)
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   // Extracts elements from index 1 to 2
console.log(myn1);               // Output: [1, 2] (excludes index 3)
console.log("B ", myArr);        // Original array remains unchanged

// Splice() - Removes elements directly from the original array
const myn2 = myArr.splice(1, 3)  // Removes elements from index 1 to 3
console.log("C ", myArr);        // Output: [0, 4, 5] (original array modified)
console.log(myn2);               // Output: [1, 2, 3] (removed elements)
