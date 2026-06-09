//creating an array //array literal preferred
let browsers = ["chrome", "firefox", "safari"];

//array constructor
let score = new Array(3);
let score2 = new Array(1,2,3);
let score3 = new Array(4)
score3[0] = 1
score3[1] = 1
score3[2] = 1
score3[3] = 1

console.log(score);
console.log(score2);
console.log(score3);

//Arrays are always stored in continuous memory
// arrays can be created using Array.of
let test = Array.of(10, 20, 30, 40);
console.log(test);

//Array.from --mostly used for strings/characters -- NOT numbers
let chars = Array.from("PURNA"); // string gets divided into [ 'P', 'U', 'R', 'N', 'A' ]
console.log(chars);