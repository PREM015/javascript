const name = "hitesh"
const repoCount = 50

// Template literals (recommended for string concatenation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output: Hello my name is hitesh and my repo count is 50

// Creating a string object
const gameName = new String('hitesh-hc-com')

// Accessing characters in the string
console.log(gameName[0]);  // Output: h

// The `__proto__` property shows the prototype object of the string
console.log(gameName.__proto__);  // Output: {}

// String length
console.log(gameName.length);  // Output: 13

// Converts the string to uppercase
console.log(gameName.toUpperCase());  // Output: HITESH-HC-COM

// Finds the character at index 2
console.log(gameName.charAt(2));  // Output: t

// Finds the index of the first occurrence of 't'
console.log(gameName.indexOf('t'));  // Output: 2

// Extracts a portion of the string (from index 0 to 4, excluding 4)
const newString = gameName.substring(0, 4)
console.log(newString);  // Output: hite

// `slice` can take negative values (negative index starts from -1)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);  // Output: (empty string because the range is invalid)

// Trimming whitespace from both ends
const newStringOne = "   hitesh    "
console.log(newStringOne);       // Output: "   hitesh    "
console.log(newStringOne.trim()); // Output: "hitesh"

// Replacing `%20` with `-` in the URL
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));  // Output: https://hitesh.com/hitesh-choudhary

// Checking if a string contains a specific word
console.log(url.includes('sundar'));  // Output: false

// Splitting the string into an array using '-' as a separator
console.log(gameName.split('-'));  // Output: [ 'hitesh', 'hc', 'com' ]
