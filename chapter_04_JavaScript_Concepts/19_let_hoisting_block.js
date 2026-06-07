//What is TDZ -- Temporal Dead Zone

let x = "Global"; //global scope

if (true){
    //TDZ for block starts here
    // console.log(x); //reference error - not global

    let x = "block"; //TDZ ends
    console.log(x); //Block
}

console.log(x);
