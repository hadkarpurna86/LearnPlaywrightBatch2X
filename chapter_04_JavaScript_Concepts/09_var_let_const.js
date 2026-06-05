var v = 10;
let l = 30;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; //redeclaration allowed
browser = "edge"; //reassignment allowed

var testcases = ["Login", "Logout", "Signup"];
for(var i = 0; i < testcases.length; i++ ){
    console.log("Running testcase: ", testcases[i]);
}
console.log("Loop Counter leaked outside: ", i);

function say(){
    console.log("Hi from function");
}

say();
say();