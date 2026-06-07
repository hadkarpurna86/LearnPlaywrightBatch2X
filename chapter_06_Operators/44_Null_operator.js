//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);

// ??  Nullish operator
let amul = null;
let milk_required = amul ?? "nandani milk"; //since amul is null -> nandani milk 
console.log(milk_required);

let gokul = "Gokul present";
let milk_needed = gokul ?? "nandani milk"; //Gokul is not null
console.log(milk_needed); 