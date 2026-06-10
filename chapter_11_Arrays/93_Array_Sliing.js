let array = [1,2,3,4,5];
let new_arr = array.slice(1,3); // (start index, endindex-1);
console.log(new_arr); //[2, 3]

console.log(array.slice(2,4)); [3, 4]

console.log(array.slice(2,2)); //Empty array

console.log(array.slice(2,3)); // [3]

console.log(array.slice(-2)); // [4, 5]

console.log(array.slice(-2, -4)); // Empty array

console.log(array.slice(-2, -1)); //[4]

console.log(array.slice(-2, 0)); // Empty array

console.log(array.slice(0)); // all elements in array
