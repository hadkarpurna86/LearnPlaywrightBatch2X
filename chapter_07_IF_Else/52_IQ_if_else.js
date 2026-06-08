if("hello") console.log("String is truthy") //truthy conditiion
if(42) console.log("number is truthy");
if({}) console.log("Empty object is truthy");
if([]) console.log("Empty object is truthy");

if("") console.log("False condition - Won't print");
if(0) console.log("False condition - Won't print");
if(null) console.log("False condition - Won't print");
if(NaN) console.log("False condition - Won't print");
if(undefined) console.log("False condition - Won't print");

let name = undefined;
if(name){
    console.log("Hi")
} else {
    console.log("Bye");
}