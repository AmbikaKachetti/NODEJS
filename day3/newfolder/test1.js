function test(){
    console.log("test");
}
function sum(a, b){
    console.log(a+b);
}
// sum(2, 3);
// test();
function sub(a, b){
    console.log(a-b);
}
let name = "abc"
let obj = {
    name: "xyz",
    age: 26
}
let n = "Katya"
// this is an exports object
module.exports = {        
    test, sum, name, obj
}
module.exports.name = n;
