function getuserStatus(){
    //var status_code; //Its hoisting and its done by javascript
    console.log(status_code);
    var status_code = "Pending";
    console.log(status_code);
}

getuserStatus();



// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.