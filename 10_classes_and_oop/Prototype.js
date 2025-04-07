// Example array
let myHeros = ["thor", "spiderman"]

// Basic object with method
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// -------------------------------
// Prototype Extension
// -------------------------------

// Adds a method to all objects (including arrays, functions, etc.)
Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`);
}

// Adds a method only to arrays
Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`);
}

// Usage examples:
// heroPower.hitesh();      // ✅ Works
// myHeros.hitesh();        // ✅ Works
// myHeros.heyHitesh();     // ✅ Works
// heroPower.heyHitesh();   // ❌ Error: not an array

// -------------------------------
// Prototype Inheritance
// -------------------------------

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

// Setting up inheritance
Teacher.__proto__ = User;  // Old way (still valid)

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // Inherit from TeachingSupport
}

// Modern way: Object.setPrototypeOf
Object.setPrototypeOf(TeachingSupport, Teacher)

// Now, TASupport --> TeachingSupport --> Teacher --> User

// -------------------------------
// Custom String Prototype Method
// -------------------------------

let anotherUsername = "ChaiAurCode     ";

// Adds a custom method to all strings
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

// Usage:
anotherUsername.trueLength(); // Trims and logs real length
"hitesh".trueLength();
"iceTea".trueLength();
