// -----------------------------
// ✅ Object Literal Example
// -----------------------------
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // Logs the current object (`user`)
        console.log(this);
    }
}

// Usage:
// console.log(user.username);        // Accessing property
// user.getUserDetails();             // Calling method

// -----------------------------
// ✅ Constructor Function Example
// -----------------------------
function User(username, loginCount, isLoggedIn){
    // Assign properties to the new object
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Method attached directly to each instance
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // `return this` is implicit when using `new`
}

// Creating instances using constructor
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// Output the constructor function used to create userOne
console.log(userOne.constructor);  // [Function: User]

// Optionally test other features
// userOne.greeting();               // Welcome hitesh
// console.log(userTwo.username);   // ChaiAurCode
