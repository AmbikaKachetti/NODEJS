// here we are importing an object from exports
const imported = require('./newfolder/test1.js')
console.log(imported);

imported.test();
imported.sum(10, 30);

console.log(imported.name);