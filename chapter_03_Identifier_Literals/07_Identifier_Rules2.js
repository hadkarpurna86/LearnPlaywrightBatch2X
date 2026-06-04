// ==========================================
// JavaScript Identifier Rules and Examples
// ==========================================

// Rule 1: Identifiers can contain letters, digits, underscores, and dollar signs.
let firstName = "John";
let _private = true;
let $price = 100;
let value1 = 10;
let total_score = 50;

// Rule 2: Identifiers must begin with a letter, underscore (_), or dollar sign ($).
// They CANNOT begin with a digit.
let validStart = "good";
let _underscoreStart = "good";
let $dollarStart = "good";
// let 1stPlace = "bad"; // ❌ SyntaxError: Invalid or unexpected token

// Rule 3: Identifiers are case-sensitive.
let myVar = 1;
let MyVar = 2;
let MYVAR = 3;
// myVar, MyVar, and MYVAR are three different variables.

// Rule 4: Identifiers cannot be reserved keywords.
// let let = 5;      // ❌ SyntaxError: let is a reserved keyword
// let class = "A";  // ❌ SyntaxError: class is a reserved keyword
// let return = 1;   // ❌ SyntaxError: return is a reserved keyword
// let function = 2; // ❌ SyntaxError: function is a reserved keyword

// Rule 5: Identifiers should not contain spaces or special characters (except _ and $).
// let my name = "bad"; // ❌ SyntaxError: Unexpected identifier
// let my-name = "bad"; // ❌ SyntaxError
// let my@name = "bad"; // ❌ SyntaxError

// Rule 6: Use meaningful names for better readability (convention).
let userName = "Alice";
let isLoggedIn = true;
let MAX_SIZE = 100;
let calculateTotal = () => {};

// ==========================================
// Summary of Rules
// ==========================================
/*
  1. Allowed characters: a-z, A-Z, 0-9, _, $
  2. First character must be a letter, _, or $ (NOT a digit)
  3. Identifiers are case-sensitive
  4. Cannot use JavaScript reserved keywords
  5. No spaces or special characters (except _ and $)
  6. Use camelCase for variables/functions, UPPER_CASE for constants (convention)
*/

// Examples of valid identifiers
let validIdentifier;
let ValidIdentifier;
let _validIdentifier;
let $validIdentifier;
let valid123Identifier;
let valid_Identifier;
let valid$Identifier;

// Examples of invalid identifiers (commented out because they cause errors)
// let 123identifier;
// let my-identifier;
// let my identifier;
// let my@identifier;
// let if;
// let while;

console.log("JavaScript Identifier Rules loaded successfully.");
