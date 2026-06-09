let scores = [70, 45, 62, 84, 96];

//map - transforms ell element of the array and returns new array
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 
let grades = scores.map(s => s>75 ? "Pass" : "Fail");
console.log(grades);

//Filter - will filter the eleents and will return only those who meet the condition(true)
let passing = scores.filter( s=> s > 75);
console.log(passing);

// reduce , // reduce — accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

// flat - flattens the nested array
let nested = [[1,8],[9,23,74],[54,86]];
console.log(nested.flat())