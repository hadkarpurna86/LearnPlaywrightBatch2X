//let - block scope
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry Count : ",retryCount);

// let retryCount = 5; redeclaration not allowed. Syntax error

let testingStatus = "Pending";

if(testingStatus === "Pending"){
    let executionTime = 1200;
    console.log("Inside block:", executionTime ); //1200
}

// console.log("Inside block:", executionTime );
//syntax error -- execution time not defines outside block

// let = loyal
// var = varirable / triator



let name = "pending";
name = "done";