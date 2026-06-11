//Default parameters in function

function retry(testCase, maxAttempts = 3, delay = 1000){
    console.log(`Retrying ${testCase} upto ${maxAttempts} time, after ${delay} ms`)
}

retry("login");
retry("Registration Test", 5, 2000);