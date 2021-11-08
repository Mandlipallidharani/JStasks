const fs = require("fs");
var readMe= fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);
fs.writeFileSync('write.txt', 'write my file here');
fs.appendFileSync('write.txt', '\ndharani');
