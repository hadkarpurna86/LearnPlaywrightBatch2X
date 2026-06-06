console.log(score);
let score = 10;

//---TDZ for "score" starts here ---
//console.log(score); //reference error
//score = 10;         //reference error
//typeof score        //reference error
//---TDZ for "score" ends here ---


let score = 10; //TDZ ends as declaration is reached
console.log(score); //100 safe to access