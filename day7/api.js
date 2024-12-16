const express = require('express');

const app = express();

const db = require('./db');

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
    db.addMobile()
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