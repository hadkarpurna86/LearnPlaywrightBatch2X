//Task 4
let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a); 
			// 5(6) + 7(7) - 6(6) + 6(5) + 6(6)
			// 5 + 7 - 6 + 6 + 6 = 18
console.log(a); //6

//Task 1
//Maximum number between two numbers, okay, by using the ternary operator 

let x = 8;
let y = 15;
let maximum_no = x > y ? `Maximum number is ${x}` : `Maximum number is ${y}`;
console.log("maximum_no", maximum_no); 

//Task 2
//maximum between the three numbers also by using ternary operator 
let p = 8;
let q = 20;
let r = 50
//max-no =  p > q && p > r ? p is max : (check if q > r);
//max-no =  p > q && p > r ? p is max : (if q > r ? q is max : r is max);
let Max_no = ((p > q) & (p > r)) ? `Maximum number is ${p}` : (( q > r ) ? `Maximum number is ${q}` : `Maximum number is ${r}`);
console.log("Max_no ", Max_no); 