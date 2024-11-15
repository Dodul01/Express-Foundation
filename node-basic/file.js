const fs = require('fs');

// Reading a file text
const readText = fs.readFileSync('./text/text.txt', 'utf-8')
// console.log(readText);

const writeText = fs.writeFileSync('./text/write.txt', "Hello World!");
console.log(writeText);

