//Higher Order Functions
//A function that takes a function as Argument or returns a fucntion.

function runWithLogin(testFun, testcase){
    let result = testFun();
    return `${result} --> ${testcase}`;
}

function loginTest(){
    return "Pass";
}

function loginTestFail(){
    return "Fail";
}

console.log(runWithLogin(loginTest, "Login Testcase"));
console.log(runWithLogin(loginTestFail, "Login Testcase Failed"));