// 23_null_undefined.js
// ================================================================================
// Difference Between null and undefined in JavaScript
// ================================================================================

// --- undefined ---
// undefined means "something does not exist" or "has not been assigned a value yet".
// It is automatically given by JavaScript.

let myVariable; // Declared but not assigned
console.log("myVariable:", myVariable); // Output: undefined

let obj = {};
console.log("obj.name:", obj.name); // Output: undefined (property does not exist)

function myFunction() {
    // No return statement
}
console.log("myFunction():", myFunction()); // Output: undefined

// --- null ---
// null means "there is a value, but it is empty or nothing".
// It is intentionally assigned by a programmer to say "this is empty".

let emptyBox = null;
console.log("emptyBox:", emptyBox); // Output: null

// It is useful when you want to show that a variable is supposed to have a value,
// but currently it does not.

// ================================================================================
// Simple Difference Table
// ================================================================================

/*
| Feature              | undefined                  | null                          |
|----------------------|----------------------------|-------------------------------|
| Meaning              | Variable does not exist    | Variable exists but is empty  |
| Who sets it?         | JavaScript automatically   | Programmer sets it manually   |
| Type                 | typeof undefined === 'undefined' | typeof null === 'object'|
| Is it a value?       | Yes, special value         | Yes, special value            |
*/

// ================================================================================
// Type Comparison
// ================================================================================

console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null);             // "object" (this is a known JavaScript bug)

// ================================================================================
// Equality Check
// ================================================================================

console.log("undefined == null:", undefined == null);   // true (both are "empty-ish")
console.log("undefined === null:", undefined === null); // false (different types)

// ================================================================================
// Summary
// ================================================================================
// Use undefined when you want to check if something exists.
// Use null when you want to intentionally say "this is empty".
// undefined is given by JavaScript; null is given by you.
