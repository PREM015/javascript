// ===============================
//         forEach METHOD
// ===============================

// Array declaration
const coding = ["js", "ruby", "java", "python", "cpp"]

// Using forEach with a function expression
// coding.forEach(function (val) {
//     console.log(val);  // Prints each element in the array
// })

// Using forEach with an arrow function
// coding.forEach((item) => {
//     console.log(item);  // Prints each element in the array
// })

// Using forEach with a separate function
function printMe(item) {
    console.log(item);  // Prints each item in the array
}

// coding.forEach(printMe)  // Calls 'printMe' for each element

// Using forEach with item, index, and array as parameters
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);  // Displays item, index, and the full array
// })

// ===============================
//      forEach WITH OBJECT ARRAY
// ===============================

// Array of objects representing programming languages
const myCoding = [
    {
        languageName: "javascript",      // First object with language name 'javascript'
        languageFileName: "js"            // File extension 'js'
    },
    {
        languageName: "java",             // Second object with language name 'java'
        languageFileName: "java"           // File extension 'java'
    },
    {
        languageName: "python",           // Third object with language name 'python'
        languageFileName: "py"             // File extension 'py'
    },
]



// Using forEach to iterate through object array

myCoding.forEach((item) => {
    console.log(item.languageName);  // Prints the 'languageName' of each object
})