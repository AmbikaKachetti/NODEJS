const express = require("express")
const app = express()
app.get('/users', (req, res)=>{
    res.send("Get Success")
})
app.listen(4000, ()=>{
    console.log("Started");
})