function isValidJsBasicsIdentifier(name) {
  // write your code here
  if(typeof name === 'string' && name !== ""){
    if(/[^a-zA-Z_$]/.test(name)){
        return true;
    }
    
  } else {
    return false;
  }
}

let c = isValidJsBasicsIdentifier("pTrue");
console.log(c);