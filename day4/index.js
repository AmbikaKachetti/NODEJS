let fs = require('fs')

// here readFile is an Async operation

// ! FILE SYSTEM MODULE

// ! Asynchronous - fs.readFile()
/*
fs.readFile('./day4/topics.txt', (err, data)=>{ 
    if(err){
        console.log("file not found");
    }
    else{
        console.log(data.toString());
    }
}); 
console.log("before reading");
*/
// ! Synchronous -  fs.readFileSync()
let data = fs.readFileSync('./day4/topics.txt');
console.log(data); // by default data will be read in binary format, so we need to convert into string using '.toString()'s
console.log("before reading");

console.log("\n");

console.log(data.toString());
console.log("before reading");
