// Local Modules
const { a, add } = require('./local-1.js');
const { subtraction } = require('./local-2.js');

// console.log(add(5, 6));
const num = add(5, 6)
console.log(subtraction(num, 6)); 

// Build In Modules
const path = require("path")

console.log(path.join("/C://moduleSeven/", "local-1.js"));