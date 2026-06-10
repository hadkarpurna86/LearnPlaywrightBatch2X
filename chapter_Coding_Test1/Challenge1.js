function normalizeJsBasicsLabel(label) {
  // write your code here
  return ("js-basic-" + label)
  .trim()
  .toLowerCase()
  .replace(/[^a-zA-Z0-9]+/g, "-")
  .replace(/-+/g,"-")
  .replace(/^-|-$/g,"");
}

let c = normalizeJsBasicsLabel(" Login Button ");
console.log(c);

let d = normalizeJsBasicsLabel("User Profile: Edit!");
console.log(d);

let e = normalizeJsBasicsLabel("---Search@@Box---");
console.log(e);

let f = normalizeJsBasicsLabel(" ");
console.log(f);
