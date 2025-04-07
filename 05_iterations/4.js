// ===============================
//             FOR...IN LOOP
// ===============================

// Object declaration with key-value pairs
const myObject = {
    js: 'javascript',      // 'js' key with value 'javascript'
    cpp: 'C++',            // 'cpp' key with value 'C++'
    rb: "ruby",             // 'rb' key with value 'ruby'
    swift: "swift by apple"  // 'swift' key with value 'swift by apple'
}

// 'for...in' iterates over object keys
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);  // Prints key-value pairs
}

// ===============================
//         FOR...IN WITH ARRAYS
// ===============================

// Array declaration
const programming = ["js", "rb", "py", "java", "cpp"]

// 'for...in' iterates over array indices
for (const key in programming) {
    // console.log(programming[key]);  // Prints each element in the array
}

// ===============================
//             MAPS
// ===============================

// Map declaration (Maps store key-value pairs)
const map = new Map()
map.set('IN', "India")                         // Adds 'IN' as key with value 'India'
map.set('USA', "United States of America")     // Adds 'USA' as key with value "United States of America"
map.set('Fr', "France")                        // Adds 'Fr' as key with value "France"
map.set('IN', "India")                         // Duplicate key 'IN' - won't create a new entry (Maps only store unique keys)

// ❌ 'for...in' does NOT work directly on Maps (it works for objects only)

// for (const key in map) {
//     console.log(key);  // This won't output anything because Maps are not iterable with 'for...in'
// }
