// ### Question 2 — Student Grade Calculator
// Problem: Take marks (0–100) and print the grade based on these rules:
// - 90 and above → A
// - 80–89 → B
// - 70–79 → C
// - 60–69 → D
// - Below 60 → Fail

let marks = 60;
if(marks >= 90){
    console.log("grade is A");
} else if(marks >= 80 && marks < 90){
    console.log("grade is B")
} else if(marks >= 70 && marks < 80){
    console.log("grade is C")
}else if(marks >= 60 && marks < 70){
    console.log("grade is D")
} else {
    console.log("Fail");
}
