let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//spice (startindex, delete)
arr.splice(2, 1);
console.log(arr);

//spice (startindex, delete, ...items to replace)
//[ 1, 2, 4, 5, 6 ]
arr.splice(2, 0, 99); //Inserts/adds the element at 2nd index
console.log(arr);

//spice (startindex, delete, ...items to replace)
//[ 1, 2, 99, 4, 5, 6 ]
arr.splice(2, 1, 78); //Replaces the element at 2nd index
console.log(arr);

//spice (startindex, delete, ...items to replace)
//[ 1, 2, 78, 4, 5, 6 ]
arr.splice(1, 2, 100, 200); //removes the element at 1st index and adds 100 200 numbers
console.log(arr);

//spice (startindex, delete, ...items to replace)
//[ 1, 100, 200, 4, 5, 6 ]
arr.splice(1, 2, 300,400,500); 
console.log(arr);