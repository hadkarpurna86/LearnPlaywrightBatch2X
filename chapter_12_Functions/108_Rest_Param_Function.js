
function logResult(suiteName, ...Results){ //... 3dots indicated spread for an Array
    console.log(suiteName);
    console.log(Results);
}

logResult('Login TEst', 1,2,3);
logResult('Reg TEst', "Hello", "Pruna");
logResult(5, "Hello", "Pruna");