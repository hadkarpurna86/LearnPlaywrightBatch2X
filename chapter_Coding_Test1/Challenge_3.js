function classifyJsBasicsScore(score) {
  // write your code here
  if(score >= 90){
    return "EXCELLENT";
  } else if(score >= 75 && score < 90){
    return "GOOD";
  } else if(score >= 50 && score < 75){
    return "NEEDS_PRACTICE";
  } else {
    return "REVISIT";
  }
}

let a1 = classifyJsBasicsScore(95);
console.log(a1);
let a2 = classifyJsBasicsScore(75);
console.log(a2);
let a3 = classifyJsBasicsScore(50);
console.log(a3);
let a4 = classifyJsBasicsScore(32);
console.log(a4);