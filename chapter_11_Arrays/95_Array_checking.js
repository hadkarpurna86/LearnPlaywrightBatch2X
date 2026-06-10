//checking array
let result = Array.isArray([1,2,3]);
console.log(result);

console.log(Array.isArray("a"));

//every & some
let isArr1 = [65, 80, 47].every(s => s > 40); //true
console.log(isArr1); //true

let isArr2 = [65, 80, 47].every(s => s > 50); //false
console.log(isArr2); //false

//Playwright API
[200,201,203].every(statusCode => statusCode > 200);

//Some -- atleast ONE must pass
let isArr3 = [80, 52, 41].some(s => s < 50); //true
console.log(isArr3); //true

let isArr4 = [80, 52, 41].some(s => s < 40); //false
console.log(isArr4); //false