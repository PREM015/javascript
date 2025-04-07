// Get descriptor info for built-in property Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// Show PI descriptor: { value: 3.141..., writable: false, enumerable: false, configurable: false }
// console.log(descripter);

// Attempting to change Math.PI won't work since it's not writable
// Math.PI = 5
// console.log(Math.PI); // Still 3.141...

// Custom object chai
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// Get descriptor of 'name' property before modification
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Modify the descriptor to make 'name' explicitly enumerable (defaults are not all true)
Object.defineProperty(chai, 'name', {
    // writable: false, // optional: if not specified, stays the same as before
    enumerable: true,   // explicitly making 'name' show up in loops
    // configurable: true // can also be added if needed
});

// Check descriptor after change
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Loop through all enumerable properties
for (let [key, value] of Object.entries(chai)) {
    // Skip methods
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
