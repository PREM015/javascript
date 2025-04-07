// Function to simulate setting a username (could involve complex logic or DB calls)
function SetUsername(username) {
    // Assign the passed username to the 'this' context
    this.username = username;

    // Log to verify function call
    console.log("called");
}

// Constructor function to create a new user object
function createUser(username, email, password) {
    // Manually call SetUsername in the context of this current object
    SetUsername.call(this, username);

    // Add email and password to the current object
    this.email = email;
    this.password = password;
}

// Create a new user using the createUser constructor
const chai = new createUser("chai", "chai@fb.com", "123");

// Output the result object to the console
console.log(chai);
