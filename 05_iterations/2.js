let index = 0   // Initialize 'index' with 0

// ===============================
//         WHILE LOOP
// ===============================
// The while loop runs as long as the condition (index <= 10) is true
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);  // Prints the current value of 'index'
//     index = index + 2   // Increment 'index' by 2 in each iteration
// }

// ===============================
//         WHILE LOOP WITH ARRAY
// ===============================
let myArray = ['flash', "batman", "superman"]  // Array of superhero names

let arr = 0   // Initialize 'arr' with 0
while (arr < myArray.length) {  // Loop runs until 'arr' is less than array length
    // console.log(`Value is ${myArray[arr]}`);  // Prints the current element in 'myArray'
    arr = arr + 1   // Increment 'arr' to move to the next element
}

// ===============================
//         DO-WHILE LOOP
// ===============================
// 'do-while' runs the code at least once, even if the condition is false
let score = 11   // Initialize 'score' with 11

do {
    console.log(`Score is ${score}`);  // Prints the current score
    score++   // Increment 'score' by 1
} while (score <= 10);   // Condition is false on the first check, but still runs once
