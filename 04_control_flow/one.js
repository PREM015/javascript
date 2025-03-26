// Demonstrating various if-else conditions and logical operators

const isUserloggedIn = true; // Boolean flag for user login status
const temperature = 41; // Temperature value

// Checking temperature condition
if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute"); // This will always execute

// Comparison operators: <, >, <=, >=, ==, !=, ===, !==

const score = 200; // Example score value

// Conditional block with block scope
if (score > 100) {
    let power = "fly"; // Declaring 'power' inside this block
    console.log(`User power: ${power}`); // Accessible inside this block only
}

// console.log(`User power: ${power}`); // This would throw an error since 'power' is defined with let inside the if block

const balance = 1000; // Example balance value

// Inline if statement for concise condition check
if (balance > 500) console.log("test"), console.log("test2");

// Multiple conditions using else-if blocks
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750"); // Typo: This should be "less than 900"
} else {
    console.log("less than 1200");
}

// Logical operator usage examples
const userLoggedIn = true; // Example login status
const debitCard = true;    // Example debit card ownership
const loggedInFromGoogle = false; // Login method 1
const loggedInFromEmail = true;  // Login method 2

// AND operator example: All conditions must be true
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course"); // Will not execute since 2 == 3 is false
}

// OR operator example: Any one condition must be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // Will execute since loggedInFromEmail is true
}