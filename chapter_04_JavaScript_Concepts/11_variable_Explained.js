var a = 10; //Global Scope of a variable

console.log(a); 

function printHello(){
    console.log("Hello from Purna Hadkar");
    var a = 20; //local scope of a variable
    console.log(a); 

    if(true){
        var a = 30; //local scope of a variable under IF
        console.log(a); 
    }
}

printHello();

//var - flipper, changeable, dual faced, untrustworthy
//it doesnot matter if var is used within loop, within function, within statemet it will change 100times
