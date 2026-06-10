//Arrow Functions (ES6)

//normal function definition
const greet1 = function (name1){
    return "Hi "+name1;
}
let r = greet1("Purna");
console.log(r);

//It's Arrow function representation

const greet2 = (name2) => "Hi " +name2;
let r2 = greet2("Purna");
console.log(r2);

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
// 

const double = n => n*2;
console.log(50);

const printIt = name => console.log(name);
printIt("Hermoine");