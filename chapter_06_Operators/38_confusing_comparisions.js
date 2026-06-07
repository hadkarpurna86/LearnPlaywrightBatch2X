// 38_confusing_comparisions.js
// ================================================================================
// Confusing Comparisons in JavaScript: == vs ===
// ================================================================================

// === ALWAYS checks VALUE + DATA TYPE (Strict)
// == ONLY checks VALUE after TYPE CONVERSION (Loose) — very confusing!

// ================================================================================
// 1. Number vs String
// ================================================================================

console.log(5 == "5");    // true  → "5" becomes 5
console.log(5 === "5");   // false → number vs string

console.log(0 == "0");    // true  → "0" becomes 0
console.log(0 === "0");   // false

// ================================================================================
// 2. Empty String vs Zero
// ================================================================================

console.log(0 == "");     // true  → "" becomes 0
console.log(0 === "");    // false

// ================================================================================
// 3. Boolean vs Number
// ================================================================================

console.log(true == 1);   // true  → true becomes 1
console.log(false == 0);  // true  → false becomes 0
console.log(true == 2);   // false → true is 1, not 2

console.log(true === 1);  // false
console.log(false === 0); // false

// ================================================================================
// 4. Boolean vs String
// ================================================================================

console.log(true == "1");  // true  → "1" becomes 1, true is 1
console.log(true == "true"); // false → "true" becomes NaN

// ================================================================================
// 5. null and undefined
// ================================================================================

console.log(null == undefined);   // true  → both are "empty"
console.log(null === undefined);    // false → different types

console.log(null == 0);           // false → null does NOT become 0
console.log(null == "");          // false

console.log(undefined == 0);      // false
console.log(undefined == "");     // false

// ================================================================================
// 6. NaN (Not a Number)
// ================================================================================

console.log(NaN == NaN);          // false → NaN is never equal to anything!
console.log(NaN === NaN);         // false

// ================================================================================
// 7. Array vs String
// ================================================================================

console.log([1,2] == "1,2");    // true  → array becomes "1,2"
console.log([1,2] === "1,2");   // false

// ================================================================================
// 8. Object vs Object
// ================================================================================

let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;

console.log(obj1 == obj2);        // false → different memory references
console.log(obj1 === obj2);       // false
console.log(obj1 == obj3);        // true  → same memory reference
console.log(obj1 === obj3);       // true

// ================================================================================
// 9. typeof null bug
// ================================================================================

console.log(typeof null);         // "object" (famous JavaScript bug)
console.log(null === null);       // true
console.log(typeof undefined);    // "undefined"

// ================================================================================
// 10. Weird edge cases
// ================================================================================

console.log("" == false);         // true
console.log("" == 0);             // true
console.log(0 == false);          // true
// BUT:
console.log("" == false && "" == 0 && 0 == false); // true
// Transitivity is BROKEN: if A==B and B==C, A==C is NOT guaranteed

// ================================================================================
// GOLDEN RULE
// ================================================================================
// Always use === (strict) and !== (strict)
// Never use == (loose) unless you really understand type coercion
