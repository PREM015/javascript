// ===============================
//            For Loop Examples
// ===============================

// Basic for loop counting 0 to 10
for (let i = 0; i <= 10; i++) {  // Loop starts at 0 and runs until 10 (inclusive)
    const element = i;            // Assigns current loop value to 'element'
    if (element == 5) {           // Checks if the current value is 5
        //console.log("5 is best number");  // Uncomment to print message if value is 5
    }
    //console.log(element);       // Uncomment to print each loop iteration
}

// console.log(element); // ❌ Error: 'element' is block-scoped and can't be accessed outside the loop

// Nested loop example (Outer loop for rows, Inner loop for columns)
for (let i = 1; i <= 10; i++) {   // Outer loop iterates 1 to 10
    //console.log(`Outer loop value: ${i}`);  
    for (let j = 1; j <= 10; j++) {  // Inner loop iterates 1 to 10 for each outer loop cycle
        //console.log(`Inner loop value ${j} and inner loop ${i}`); 
        //console.log(i + '*' + j + ' = ' + i * j);  // Prints multiplication table format
    }
}

// Looping through an array
let myArray = ["flash", "batman", "superman"]  // Array of superheroes
//console.log(myArray.length); // Prints array length
for (let index = 0; index < myArray.length; index++) { // Iterates through array elements
    const element = myArray[index];
    //console.log(element); // Prints each array element
}

// ===============================
//      Break and Continue Example
// ===============================

// Break Example (Stops loop when index == 5)
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);  // Prints when value 5 is found
//         break;                     // Stops the loop immediately
//     }
//     console.log(`Value of i is ${index}`); // Prints values before break
// }

// Continue Example (Skips iteration when index == 5)
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);  // Prints message but continues the loop
        continue;                   // Skips the rest of this iteration
    }
    console.log(`Value of i is ${index}`); // Prints values, except 5
}