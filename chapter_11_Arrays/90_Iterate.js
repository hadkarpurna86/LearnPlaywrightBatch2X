// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for(let i=0; i<tests.length; i++){
    console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for(x of tests){
    console.log(x);
}
console.log("----");


// for each
tests.forEach((test, index)=> {
console.log(test, index);
});

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

for(let i in students){
    console.log(i, "-->", students[i]);
}

console.log("-------------difficult way");
//difficult way
for(let[i,test] of tests.entries()){
    console.log(i, test);
}



