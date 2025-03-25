// ===============================
//         Primitive Types
// ===============================

// ✅ Primitive types are stored directly in the memory
// ✅ They are immutable (cannot be modified directly)

// 1️⃣ Number - Represents both integers and floating-point numbers
const score = 100          // Integer value
const scoreValue = 100.3   // Decimal value (floating-point number)

// 2️⃣ Boolean - Represents `true` or `false`
const isLoggedIn = false   // Boolean value indicating 'logged out'

// 3️⃣ null - Represents an empty or non-existent value
const outsideTemp = null   // `null` is often used to indicate 'no value'

// 4️⃣ undefined - Indicates a declared variable with no assigned value
let userEmail;             // `undefined` as no value is assigned

// 5️⃣ Symbol - Creates unique identifiers (useful for object properties)
// ✅ Ensures unique property keys
// ✅ Ideal for adding hidden properties that don’t appear in loops
// ✅ Useful for defining custom behaviors like iteration
// ✅ Helps avoid naming collisions in large projects
const id = Symbol('123')       // Unique symbol with description '123'
const anotherId = Symbol('123')// Another unique symbol (even with the same description)

// Comparing symbols
console.log(id === anotherId); // Output: false (Symbols are always unique)

// 6️⃣ BigInt - Used for very large integers beyond `Number.MAX_SAFE_INTEGER`
// const bigNumber = 3456543576654356754n   // BigInt ends with 'n'

// ===============================
//      Reference (Non-Primitive)
// ===============================

// ✅ Non-primitive types are stored in the heap
// ✅ Variables store references (addresses) to the objects in memory

// 1️⃣ Array - Collection of values stored in a single variable
const heros = ["shaktiman", "naagraj", "doga"];  // Array containing string elements

// 2️⃣ Object - Key-value pairs used to store structured data
let myObj = {
    name: "hitesh",   // Key: 'name', Value: 'hitesh'
    age: 22           // Key: 'age', Value: 22
}

// 3️⃣ Function - A reusable block of code
const myFunction = function(){
    console.log("Hello world");  // Outputs 'Hello world' when called
}

// ===============================
//     Type Checking in JavaScript
// ===============================

// The `typeof` operator is used to check data types
console.log(typeof anotherId); // Output: symbol (since `anotherId` is a Symbol)

// 🔗 Reference for more details on JavaScript types:
// https://262.ecma-international.org/5.1/#sec-11.4.3
