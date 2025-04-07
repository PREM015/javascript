// A regular function that multiplies input by 5
function multipleBy5(num){
    return num * 5;
}

// Adding a custom property to the function object
multipleBy5.power = 2; 

console.log(multipleBy5(5));       // Output: 25 (just the function result)
console.log(multipleBy5.power);    // Output: 2 (accessing the custom property)
console.log(multipleBy5.prototype); // Output: {} (default empty object unless methods are added)

// ✅ Functions in JavaScript are objects, so you can add properties to them!
// ✅ The `.prototype` is only used when the function is invoked with `new`
