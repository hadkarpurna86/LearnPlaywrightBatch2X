let integer = 100; // Integer number literal
let negative = -50; // Negative number literal
let decimal = 3.14; // Floating point (decimal) number literal
let zero = 0; // Zero literal

let hex = 0xFF; // Hexadecimal number literal (0x prefix)
console.log("hex value:", hex); // 255
console.log("typeof hex:", typeof hex); // number

let octal = 0o77; // Octal number literal (0o prefix)
console.log("octal value:", octal); // 63
console.log("typeof octal:", typeof octal); // number

let binary = 0b1010; // Binary number literal (0b prefix)
console.log("binary value:", binary); // 10
console.log("typeof binary:", typeof binary); // number

let exponent = 1e5; // Exponential notation (1 * 10^5)
console.log("exponent value:", exponent); // 100000

let smallExponent = 2e-3; // Exponential notation (2 * 10^-3)
console.log("smallExponent value:", smallExponent); // 0.002

let infinity = Infinity; // Positive infinity literal
console.log("infinity:", infinity); // Infinity

let negInfinity = -Infinity; // Negative infinity literal
console.log("negInfinity:", negInfinity); // -Infinity

let notANumber = NaN; // Not a Number literal
console.log("notANumber:", notANumber); // NaN

let bigNumber = 9007199254740991n; // BigInt literal (suffix n)
console.log("bigNumber:", bigNumber);
console.log("typeof bigNumber:", typeof bigNumber); // bigint

// typeof all number types
console.log("typeof integer:", typeof integer); // number
console.log("typeof decimal:", typeof decimal); // number
console.log("typeof Infinity:", typeof Infinity); // number
console.log("typeof NaN:", typeof NaN); // number (special case)
