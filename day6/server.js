// module = library = packages
const express = require("express");
const app = express();

// ! Handling "query paramters"
// app.get('/', function(req, res){
//     // res.send("Hello");
//     if(req.query.city){
//         res.send(`Hello welcome to ${req.query.city}`)
//     }
//     else{
//         res.send('Hello');
//     }
    
// })
// ! Handling "path paramters"
app.get('/:city', function(req, res){
    // res.send("Hello");
    if(req.params.city){
        res.send(`Hello welcome to ${req.params.city}`)
    } 
 
})
app.listen(4500, function(){
    console.log("Server Started");
})