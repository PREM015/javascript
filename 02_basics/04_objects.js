// =====================================
//             Object Creation
// =====================================

// Creating an empty object using object literal syntax
const tinderUser = {} 

// Adding properties to the object
// Property: id assigned as string '123abc'
tinderUser.id = "123abc"
// Property: name assigned as string 'Sammy'
tinderUser.name = "Sammy"
// Property: isLoggedIn assigned as boolean 'false'
tinderUser.isLoggedIn = false

// =====================================
//             Nested Objects
// =====================================

// Creating an object with nested objects inside
const regularUser = {
    email: "some@gmail.com", // Outer object property
    fullname: { // First nested object
        userfullname: { // Second nested object
            firstname: "hitesh", // Deepest nested property
            lastname: "choudhary" // Deepest nested property
        }
    }
}

// Accessing deeply nested properties using dot notation
console.log(regularUser.fullname.userfullname.firstname); // Outputs 'hitesh'

// =====================================
//            Object Merging
// =====================================

// Creating multiple objects with key-value pairs
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Merging objects using spread syntax
const obj3 = {...obj1, ...obj2}
console.log(obj3); // Outputs merged object with all key-value pairs

// =====================================
//          Array of Objects
// =====================================

// Creating an array of objects representing users
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "example@gmail.com" },
    { id: 3, email: "test@gmail.com" },
]

// Accessing a specific element in the array
users[1].email // Accesses the second user's email

// =====================================
//        Object Utility Methods
// =====================================

// Logging object properties, values, and entries
console.log(Object.keys(tinderUser)); // Outputs keys as an array
console.log(Object.values(tinderUser)); // Outputs values as an array
console.log(Object.entries(tinderUser)); // Outputs entries as key-value pairs in array format

// Checking if a property exists in the object
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Outputs true

// =====================================
//          Object Destructuring
// =====================================

// Defining an object with multiple properties
const course = {
    coursename: "js in hindi", // Property: coursename
    price: "999", // Property: price
    courseInstructor: "hitesh" // Property: courseInstructor
}

// Destructuring courseInstructor with alias 'instructor'
const {courseInstructor: instructor} = course

// Logging the instructor's name
console.log(instructor); // Outputs 'hitesh'

// =====================================
//            JSON Example
// =====================================

// Sample JSON format (commonly used in APIs)
[
    {},
    {},
    {}
]
