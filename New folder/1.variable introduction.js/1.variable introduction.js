// ======================================
// ✅ JavaScript Variable Behaviors Notes
// ======================================

// 1. ✅ Dynamic Typing
// A variable can change types (number, string, etc.)
var a = 67;
a = "harry"; // now it's a string

// 2. ✅ Declaration Keywords: var, let, const

// var: function-scoped, re-declarable, hoisted
var x = 5;
var x = 10; // allowed

// let: block-scoped, NOT re-declarable in same scope
let y = 20;

// let y = 30; // ❌ Error: Identifier 'y' has already been declared

// const: block-scoped, not reassignable
const z = 100;
// z = 200; // ❌ Error: Assignment to constant variable

// 3. ✅ Variable Naming Rules
// Valid:
let name = "Alice";
let _age = 25;
let $salary = 3000;

// Invalid:
// let 8harry = 7; // ❌ Cannot start with a number
// let var = 10;   // ❌ Cannot use reserved keywords

// 4. ✅ Hoisting (var is hoisted, let/const are not)
console.log(hoistedVar); // undefined (hoisted)
var hoistedVar = 50;

// console.log(hoistedLet); // ❌ ReferenceError
// let hoistedLet = 50;

// 5. ✅ Scope (var = function scope, let/const = block scope)
{
  var scopedVar = "I am var";      // visible outside
  let scopedLet = "I am let";      // block scoped
  const scopedConst = "I am const"; // block scoped
}

console.log(scopedVar);  // ✅
/*
console.log(scopedLet);   ❌ Error
console.log(scopedConst); ❌ Error
*/

// 6. ✅ Re-declaration
var a1 = 10;
var a1 = 20; // ✅ allowed with var

let b1 = 10;
// let b1 = 20; // ❌ not allowed with let

// 7. ✅ Re-assignment
let a2 = 30;
a2 = 40; // ✅ allowed

const b2 = 50;
// b2 = 60; // ❌ not allowed

// 8. ✅ Global vs Local Variables
var globalVar = "I'm global";

function testScope() {
  var localVar = "I'm local";
  console.log(globalVar); // ✅ accessible
  console.log(localVar);  // ✅ accessible
}

testScope();
// console.log(localVar); // ❌ Error: localVar is not defined

// 9. ✅ Undeclared Variable (Not Recommended)
undeclared = 100; // ❌ becomes global in non-strict mode
console.log(undeclared);

// 10. ✅ Use Strict Mode (prevents bad practices)
"use strict";
// notDeclared = 200; // ❌ Error in strict mode

// ========================
// 🎯 Summary
// - Use `let` for variables that change
// - Use `const` for constants
// - Avoid `var` (outdated)
// - Use strict mode for better error catching
// ========================
