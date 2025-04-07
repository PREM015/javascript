// ===============================
//             MAP METHOD
// ===============================

// Array of numbers declaration
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ===============================
//      CHAINING MAP & FILTER
// ===============================

// Using map() to transform values and filter() to filter results
const newNums = myNumers
                .map((num) => num * 10 )  // Multiplies each number by 10
                .map((num) => num + 1)    // Adds 1 to each transformed number
                .filter((num) => num >= 40) // Filters numbers greater than or equal to 40

console.log(newNums);  // Outputs: [41, 51, 61, 71, 81, 91, 101]
