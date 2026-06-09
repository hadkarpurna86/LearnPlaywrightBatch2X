let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found
results.indexOf("fail"); //1
results.indexOf("Deferred"); //-1
results.indexOf("skip");        // -1

console.log(results.indexOf("fail"));
console.log(results.indexOf("Deferred"));

// // lastIndexOf — searches from the end

results.lastIndexOf("fail");
console.log(results.lastIndexOf("fail"));

// // includes — returns boolean
results.includes("error"); // true
results.includes("skip");  // false
console.log(results.includes("fail"));
console.log(results.includes("skip"));


// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);

// findIndex
nums.findIndex(n => n > 20); // 1, 2, 3

nums.findLast(n => n > 20); // 45] 
nums.findLastIndex(n => n > 20);// 3