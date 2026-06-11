//use of arrow functions in Automaion
//if ourStatusCode >= 200 && ourStatusCode <300

function validateStatusCode(status){
    if(status >= 200 && status <= 300) {
        console.log("Request is Fine!!!");
    }
}

//Function as expression
const validateStatusCode_Exp = function(status){
     if(status >= 200 && status <= 300) {
        console.log("Request is Fine!!!");
    }
}

//Function represented as Arrow function
const validateStatusCode_Arrow = (status) => {
     if(status >= 200 && status <= 300) {
        console.log("Request is Fine!!!");
    }
}