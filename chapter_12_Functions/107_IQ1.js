function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}
runTest("Login", "pass", 320);
//No output as we have not assigned the return value.

//To get the output we have to do the following:
const r = runTest("Login", "pass", 320);
console.log(r);