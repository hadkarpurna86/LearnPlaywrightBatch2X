
// Question 3 — Leap Year Check
// Problem: Take a year and check if it's a leap year.
// Rules:
// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year

let year = 2400;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log("Leap Year");
} else {    
    console.log("Not a leap year");
}