// 29_Backtick_single_double.js
// ================================================================================
// Backtick vs Single Quote vs Double Quote in JavaScript
// ================================================================================

// Single quote ('') and Double quote ("") are exactly the same in JavaScript.
// They both create simple strings. You can use either based on your preference.

let singleQuote = 'Hello World';
let doubleQuote = "Hello World";

console.log(singleQuote);
console.log(doubleQuote);

// Backtick (``) is special. It is called a Template Literal.
// It allows you to put variables inside the string using ${variable}.

let name = "Purna";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Purna!

// ================================================================================
// SUMMARY (1 simple explanation)
// ================================================================================
// ' ' and " "  →  Same. Simple strings.
// ` `          →  Special. Can insert variables inside using ${}.

// Example: All three in action
let city = "Bangalore";
let country = 'India';
let message = `I live in ${city}, ${country}.`;
console.log(message);
