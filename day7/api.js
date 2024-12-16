const express = require('express');

const app = express();

const db = require('./db');

// ! Middleware for JSON Parsing

app.use(express.json());
// preprocessing the request
app.use(express.urlencoded({extended: true}))

app.listen(5050,()=>{
    console.log("server started at port 5050");
})

app.get('/users', (req, res)=>{
    // res.send("GET Method Success");
    db.getMobiles()
    .then((mobiles)=>{
        res.send(mobiles);
    })
    .catch(()=>{
        res.send("Error")
    })
})
app.post('/users', (req, res)=>{
    // res.send("POST Method Success");
    db.addMobile(req.body.name, req.body.price, req.body.ram, req.body.storage)
    .then((mobiles)=>{
        res.send(mobiles);
    })
    .catch(()=>{
        res.send("Error")
    })
})
app.put('/users', (req, res)=>{
    // res.send("PUT Method Success");
    db.updateMobile()
    .then((mobiles)=>{
        res.send(mobiles);
    })
    .catch(()=>{
        res.send("Error")
    })
})
app.delete('/users', (req, res)=>{
    // res.send("DELETE Method Success")
    db.deleteMobiles()
    .then((mobiles)=>{
        res.send(mobiles);
    })
    .catch(()=>{
        res.send("Error")
    })
})