let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let numbers = [5, 2, 89, 0, -4];
console.log(numbers.sort());

let nums = [52, 5, 40, 80, 4];
console.log(nums.sort()); // O/p = [ 4, 40, 5, 52, 80 ] 
//natural sorting or lexicographic sorting

nums.sort((a,b)=> a - b ); //ascensing sort
console.log(nums); //[ 4, 5, 40, 52, 80 ]

nums.sort((a,b)=> b - a ); //descending sort
console.log(nums); //[ 80, 52, 40, 5, 4 ]