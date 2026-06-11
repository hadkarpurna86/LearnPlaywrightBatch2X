function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


let fn_inner = outer(); //assigning/returning (return inner) inner function here
fn_inner(); 

// inner(); // ReferenceError: inner is not defined