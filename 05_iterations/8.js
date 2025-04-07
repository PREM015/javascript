// ===============================
//             REDUCE METHOD
// ===============================

// Array declaration
const myNums = [1, 2, 3]

// ===============================
//      REDUCE WITH FUNCTION
// ===============================

// Using reduce() with a traditional function
// 'acc' is the accumulator (starting from 0)
// 'currval' is the current element in the array
// This will add each element in the array to the accumulator
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`); // Displays each step of accumulation
//     return acc + currval   // Adds current value to accumulator
// }, 0)  // Initial value of accumulator set to 0

// ===============================
//      REDUCE WITH ARROW FUNCTION
// ===============================

// Using reduce() with an arrow function
// Adds each element to the accumulator starting at 0
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);  // Outputs: 6 (1 + 2 + 3)

// ===============================
//       SHOPPING CART EXAMPLE
// ===============================

// Array of shopping cart items with item names and prices
const shoppingCart = [
    { itemName: "js course", price: 2999 }, // Item 1: JS course costing 2999
    { itemName: "py course", price: 999 },   // Item 2: Python course costing 999
    { itemName: "mobile dev course", price: 5999 }, // Item 3: Mobile dev course costing 5999
    { itemName: "data science course", price: 12999 }, // Item 4: Data science course costing 12999
]

// Calculate total price using reduce()
// 'acc' accumulates the total price
// 'item' represents each element in the shoppingCart array
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // Outputs: 22996 (sum of all item prices)
