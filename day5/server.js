const express = require('express');
const app = express();
app.listen(4500, ()=>{
    console.log('Server started');
})
// GET METHOD
app.get('/higet', (req, res)=>{
    res.send("Hello recived GET request")
})
app.get('/', (req, res)=>{
    // here we need to give absolute path
    res.send(`
        <ol>
            <li>list 1</li>
            <li>list 2</li>
            <li>list 3</li>
        </ol>
        <h1>Thi is heading</h1>
    `) 
})
app.get('/', (req, res)=>{
    // here we need to give absolute path
    res.sendFile(__dirname + '/index.html')
})
// POST METHOD
app.post('/hipost', (req, res)=>{
    res.send("Hello received POST request");
}) 
// PUT METHOD
app.put('/hiput', (req, res)=>{
    res.send("Hello received PUT request");
})
// DELETE METHOD
app.delete('/hidelete', (req, res)=>{
    res.send("Hello received DELETE request");
})