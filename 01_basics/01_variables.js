"use strict";
// Declaring a constant variable for account ID (cannot be changed once assigned)
const accountId = 1234567  

// Declaring variables using 'let', which allows reassignment
let accountEmail = "hitesh@google.com"  

// Declaring a variable using 'var' (not recommended due to scope issues)
var accountPassword = "12345"

// Declaring a variable without 'let', 'const', or 'var' (not recommended due to global scope issues)
accountCity = "Jaipur"  

// Declaring a variable with 'let' without initializing it (value will be 'undefined')
let accountState;

// Trying to change 'accountId' will throw an error because 'const' variables are immutable
// accountId = 2 // not allowed

// Updating the values of variables declared with 'let' and 'var'
accountEmail = "hc@hc.com"          // Allowed (since 'accountEmail' was declared with 'let')
accountPassword = "21212121"        // Allowed (since 'accountPassword' was declared with 'var')
accountCity = "Bengaluru"           // Allowed (even though declared without 'let', 'const', or 'var')

// Displaying the value of 'accountId' to ensure it remains unchanged
console.log(accountId);  

/*
It's better to avoid using 'var' because:
- 'var' does not have block scope (it ignores curly braces for scoping)
- 'var' can lead to unexpected behavior in larger codebases
*/

// Displaying all the variables in a tabular format for better readability
console.table([
    accountId,      // Constant value (unchanged)
    accountEmail,   // Updated value
    accountPassword,// Updated value
    accountCity,    // Updated value
    accountState    // Remains 'undefined' as no value was assigned
]);
