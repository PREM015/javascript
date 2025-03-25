// ===============================
//         Array Operations
// ===============================

// ✅ Combining Arrays

// Two separate arrays
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ❌ Using `.push()` directly adds the entire array as a single element
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);         // Output: ['thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ]]
// console.log(marvel_heros[3][1]);  // Output: 'flash' (Accessing nested array)

// ✅ Using `.concat()` combines two arrays properly
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);               // Output: ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

// ✅ Using the spread operator `...` (preferred method for combining arrays)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);          // Output: ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

// ===============================
//       Flattening Arrays
// ===============================

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// ✅ `.flat()` flattens nested arrays into a single-level array
const real_another_array = another_array.flat(Infinity); // `Infinity` ensures full flattening
console.log(real_another_array);       // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// ===============================
//      Array Utility Methods
// ===============================

// ✅ `.isArray()` checks if a variable is an array
console.log(Array.isArray("Hitesh"));  // Output: false (String is not an array)

// ✅ `.from()` creates an array from iterable objects like strings
console.log(Array.from("Hitesh"));     // Output: ['H', 'i', 't', 'e', 's', 'h']

// ❗ Interesting Case: `.from()` with objects
console.log(Array.from({ name: "hitesh" }));
// Output: [] → Empty array because `.from()` requires an iterable (like `Array.from({ length: 5 })`)

// ===============================
//      Creating Arrays with `.of()`
// ===============================

// ✅ `.of()` creates an array from provided values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]
