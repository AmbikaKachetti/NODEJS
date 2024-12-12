const express = require('express');

const app = express();

app.listen(4500, ()=>{
    console.log('Server started');
})
// GET METHOD
app.get('/hello', (req, res)=>{
    res.send("Hello recived GET request")
})
// POST METHOD
app.post('/hello', (req, res)=>{
    res.send("Hello received POST request");
})