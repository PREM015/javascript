// ===============================
//             FOR...OF LOOP
// ===============================

// An array of numbers
const arr = [1, 2, 3, 4, 5]

// 'for...of' iterates directly over array elements
for (const num of arr) {
    // console.log(num);  // Prints each element in the array
}

// ===============================
//      FOR...OF WITH STRINGS
// ===============================

// String declaration
const greetings = "Hello world!"

// 'for...of' iterates over each character in the string
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)  // Prints each character in the string
}

// ===============================
//             MAPS
// ===============================

// Map declaration (Map stores key-value pairs)
const map = new Map()
map.set('IN', "India")                        // Adds 'IN' as key with value "India"
map.set('USA', "United States of America")    // Adds 'USA' as key with value "United States of America"
map.set('Fr', "France")                       // Adds 'Fr' as key with value "France"
map.set('IN', "India")                        // Duplicate key 'IN' - won't create a new entry (Maps only store unique keys)

// console.log(map);  // Displays the map entries

// Using 'for...of' to iterate through map entries
for (const [key, value] of map) {
    // console.log(key, ':-', value);  // Prints key-value pairs in the map
}

// ===============================
//         OBJECT ITERATION
// ===============================

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// ❌ 'for...of' does NOT work directly on objects (only for iterable data types like arrays, strings, etc.)

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  // This will throw an error because objects are not iterable
// }
