// ===============================
//          Object Literals
// ===============================

// Creating a unique Symbol to use as a key in the object
const mySym = Symbol("key1");

// Object literal representing a user profile
const JsUser = {
  name: "Hitesh",  // Standard property
  "full name": "Hitesh Choudhary", // Property with spaces (must use quotes)
  [mySym]: "mykey1", // Using Symbol as a key to ensure uniqueness
  age: 18,  // Number property
  location: "Jaipur",  // String property
  email: "hitesh@google.com",  // Email property
  isLoggedIn: false,  // Boolean property
  lastLoginDays: ["Monday", "Saturday"], // Array property
};

// Accessing properties using dot notation and bracket notation
console.log(JsUser[mySym]); // Accessing Symbol key

// Modifying object properties
JsUser.email = "hitesh@chatgpt.com";  // Updated email
// Object.freeze(JsUser)  // Freezes the object to prevent further modifications
JsUser.email = "hitesh@microsoft.com"; // This change won't apply due to freeze (if uncommented)

// Adding methods to the object
JsUser.greeting = function () {
  console.log("Hello JS user"); // Simple greeting method
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // Uses 'this' to access object properties
};

// Calling the methods
JsUser.greeting(); // Outputs: "Hello JS user"
JsUser.greetingTwo(); // Outputs: "Hello JS user, Hitesh"
