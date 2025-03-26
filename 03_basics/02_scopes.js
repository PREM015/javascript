// ===============================
//        Scope and Hoisting
// ===============================

// 'let' declares a block-scoped variable 'a' with value 300
let a = 300

if (true) {
    // Inside this block, a new 'a' is declared with value 10 (this is separate from the outer 'a')
    let a = 10  
    const b = 20  // 'const' declares a constant variable that cannot be reassigned

    // console.log("INNER: ", a); // Prints 10 since this 'a' is within the block scope
}

// console.log(a); // Prints 300 (outer 'a') because block-scoped 'a' does not overwrite it
// console.log(b); // Error! 'b' is defined only inside the block
// console.log(c); // Error! 'c' is commented out and was declared using 'var' (global scope)

// ===============================
//        Function Scope
// ===============================

function one(){
    const username = "hitesh"  // Variable defined inside 'one' function

    function two(){
        const website = "youtube"  // Variable defined inside 'two' function
        console.log(username);  // ✅ Accessible (inner function can access outer function's variables)
    }

    // console.log(website); // ❌ Error! 'website' is only defined inside 'two'

    two() // Calls the inner function 'two' to execute
}

// one() // Calls the 'one' function to execute

// ===============================
//        Nested Conditions
// ===============================

if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); // ✅ Accessible within this block
    }

    // console.log(website); // ❌ Error! 'website' is not accessible outside its block
}

// console.log(username); // ❌ Error! 'username' is block-scoped

// ===============================
//        Hoisting Concept
// ===============================

// Function declaration (hoisted — can be called before its definition)
console.log(addone(5))  // ✅ Outputs: 6

// Function declaration (gets hoisted)
function addone(num){
    return num + 1
}

// Function expression (not hoisted — must be defined before calling)
addTwo(5)  // ❌ Error! addTwo is not defined yet
const addTwo = function(num){
    return num + 2
}
