let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
console.log(c);

//spread ..modern way of oncatenation (...)
let d = [...a, ...b];
console.log(d);

//join
let s = ["Pass", "Fail", "Skip"].join("|");
console.log(s);
