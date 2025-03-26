// ===============================
//      Object with Methods
// ===============================

const user = {
    username: "hitesh", // Object property
    price: 999,         // Object property

    // Method inside object that prints a welcome message
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // 'this' refers to 'user' object
        console.log(this);  // Prints the entire 'user' object
    }
}

// user.welcomeMessage() // In Browser/Node.js: Outputs "hitesh, welcome to website"
// user.username = "sam"  // Changes username to 'sam'
// user.welcomeMessage()  // Outputs: "sam, welcome to website"

// console.log(this); // In Browser: Refers to 'window' object, In Node.js: Refers to an empty object {}

// ===============================
//      'this' in Regular Functions
// ===============================

function chai(){
    let username = "hitesh"; // Local variable (not part of any object)
    console.log(this.username);  // ❌ 'this' won't refer to the current function's scope
}

// chai()  // Outputs: undefined (in both Browser and Node.js)

// ===============================
//      'this' in Function Expressions
// ===============================

const chai = function () {
    let username = "hitesh"
    console.log(this.username);  // ❌ 'this' still won't access 'username'
}

// chai()  // Outputs: undefined (in both Browser and Node.js)

// ===============================
//      'this' in Arrow Functions
// ===============================

const chai = () => {
    let username = "hitesh"
    console.log(this);  // ✅ Arrow functions use the parent's context
}

// chai()  // In Browser: Outputs 'window' object; In Node.js: Outputs '{}'

// ===============================
//      Arrow Functions - Return
// ===============================

// Regular arrow function with 'return'
const addTwo = (num1, num2) => {
    return num1 + num2  // Explicit return statement
}

// Arrow function with implicit return (no curly braces needed)
const addTwo = (num1, num2) => num1 + num2  

// Arrow function with implicit return using parentheses
const addTwo = (num1, num2) => (num1 + num2)  

// Arrow function returning an object (needs parentheses to wrap the object)
const addTwo = (num1, num2) => ({username: "hitesh"})

// console.log(addTwo(3, 4))  // Outputs: { username: "hitesh" }

// ===============================
//      forEach Method
// ===============================

const myArray = [2, 5, 3, 7, 8]  // Array declaration

// Using 'forEach' to iterate through array elements
myArray.forEach((item) => {
    console.log(item);  // Prints each array element one by one
})

// In Browser/Node.js: Outputs 2, 5, 3, 7, 8 (each on a new line)