'use strict'

// ====================================================
// ✅ JavaScript Variable Declaration: var, let, const
// ====================================================

// -----------------------------------
// 🔹 1. var
// -----------------------------------
// ✅ Function-scoped (NOT block-scoped)
// ✅ Can be re-declared
// ✅ Can be updated
// ✅ Hoisted (but initialized as undefined)
// ❌ Avoid using in modern JS

var a = 45;
var a = "p";     // ✅ Re-declaration allowed
a = 100;         // ✅ Re-assignment allowed
console.log("var a:", a); // Output: "var a: 100"

// -----------------------------------
// 🔹 2. let
// -----------------------------------
// ✅ Block-scoped (limited to {}, if, loops, etc.)
// ❌ Cannot be re-declared in the same block
// ✅ Can be updated
// ❌ Not hoisted like var (temporal dead zone)

// let b = "Harry";
let b = "Harry";
b = 4;           // ✅ Re-assignment allowed
console.log("let b:", b); // Output: 4

{
   let b = "this";     // ✅ new `b` scoped to this block only
   console.log("block b:", b); // Output: "this"
}
console.log("outside b:", b); // Output: 4 (outer b not affected)

// let b = 10; // ❌ Error: Cannot re-declare in same block

// -----------------------------------
// 🔹 3. const
// -----------------------------------
// ✅ Block-scoped (same as let)
// ❌ Cannot be re-declared
// ❌ Cannot be updated (read-only after assignment)
// ✅ Must be initialized at the time of declaration

const author = "Harry";
// author = 5; // ❌ Error: Cannot re-assign a const

const harry = 0;
console.log("const harry:", harry); // Output: 0

// const pi; // ❌ Error: Must initialize const

// -----------------------------------
// ✅ Common Values
// -----------------------------------
let c = null;        // explicitly empty
let d = undefined;   // declared but not assigned

// -----------------------------------
// 🔄 Summary Table
// -----------------------------------
/*

| Feature              | var       | let         | const       |
|----------------------|-----------|-------------|-------------|
| Scope                | Function  | Block       | Block       |
| Re-declaration       | ✅ Yes     | ❌ No        | ❌ No        |
| Re-assignment        | ✅ Yes     | ✅ Yes       | ❌ No        |
| Hoisting             | ✅ Yes     | 🚫 No (TDZ) | 🚫 No (TDZ) |
| Must initialize?     | ❌ No      | ❌ No        | ✅ Yes       |
| Use in modern JS?    | ❌ Avoid   | ✅ Yes       | ✅ Yes       |

*/

// -----------------------------------
// 🧠 Best Practices
// -----------------------------------
// ✅ Use `const` by default
// ✅ Use `let` when you know the value will change
// ❌ Avoid `var` unless needed for function-scope legacy code

// -----------------------------------
// ✅ Example Recap
// -----------------------------------
function testVarScope() {
   var test = "I am var";
   if (true) {
      var test = "Changed inside block"; // same variable
   }
   console.log("var scope:", test); // Output: "Changed inside block"
}
testVarScope();

function testLetScope() {
   let test = "I am let";
   if (true) {
      let test = "Inner block let"; // new block variable
      console.log("inside block:", test); // Output: "Inner block let"
   }
   console.log("outside block:", test); // Output: "I am let"
}
testLetScope();
