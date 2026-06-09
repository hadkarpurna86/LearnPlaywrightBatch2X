//Accessing and Modifying

let status = ["Pass", "Fail", "Skip"];
console.log(status[0]); //using indices 0, 1, 2
console.log(status[2]); //using indices
console.log(status[-1]); //----------UNDEFINED

console.log(status.at(-1)); //concept from python -3, -2, -1
console.log(status.at(-3)); //Undefined
console.log(status.at(-4)); //Undefined

//Modify an Array
status[0] = "Blocked";
console.log(status);