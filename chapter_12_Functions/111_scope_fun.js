// Scope in Functions

let env = "staging";  // global scope

function setupConfig() {
    let timeout = 3000;   // local scope
    console.log(env);     // ✅ can access global
    console.log(timeout); // ✅ can access local
}


setupConfig();
console.log(env);
console.log(timeout); // we cannot acess timeout outside function scope...
//reference error will be thrown for console.log(timeout) outside setupConfig() scope