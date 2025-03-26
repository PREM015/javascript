// ===========================================
//             JavaScript Functions
// ===========================================

// Function to print each letter of "HITESH"
function sayMyName() {
    console.log("H"); // Prints H
    console.log("I"); // Prints I
    console.log("T"); // Prints T
    console.log("E"); // Prints E
    console.log("S"); // Prints S
    console.log("H"); // Prints H
}

// sayMyName() // Function call (currently commented out)

// Function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
    return number1 + number2 // Directly returns the sum of the two numbers
}

const result = addTwoNumbers(3, 5) // Calls addTwoNumbers() with 3 and 5, stores result in 'result'
// console.log("Result: ", result); // Logs the result (currently commented out)

// Function to display a login message
function loginUserMessage(username = "sam") { // Default username set to "sam"
    if (!username) { // Checks if username is empty or undefined
        console.log("PLease enter a username"); // Prints error message if no username is provided
        return // Exits function if condition is true
    }
    return `${username} just logged in` // Returns a message confirming the username login
}

// console.log(loginUserMessage("hitesh")) // Function call example (currently commented out)
// console.log(loginUserMessage("hitesh")) // Function call example (currently commented out)

// Function that returns the remaining arguments after the first two
function calculateCartPrice(val1, val2, ...num1) { // '...num1' gathers additional arguments as an array
    return num1 // Returns the collected array
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // Example usage (currently commented out)

// Object representing a user
const user = {
    username: "hitesh", // Username property
    prices: 199 // Price property
}

// Function to display object properties
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Logs username and price
}

// handleObject(user) // Example usage with 'user' object (currently commented out)
handleObject({ // Example usage with an inline object
    username: "sam", // Username property
    price: 399 // Price property
})

// Array declaration
const myNewArray = [200, 400, 100, 600] // Array with 4 elements

// Function that returns the second value of the given array
function returnSecondValue(getArray) {
    return getArray[1] // Returns the second element of the provided array
}

// console.log(returnSecondValue(myNewArray)); // Example usage with 'myNewArray' (currently commented out)
console.log(returnSecondValue([200, 400, 500, 1000])); // Example usage with a new array
