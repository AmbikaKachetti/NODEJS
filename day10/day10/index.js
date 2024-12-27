const express = require("express")
const app = express()
var cors = require('cors')
//! Method 1
// app.use(cors({
//     'methods': 'GET, POST',
//     'origin': "*",
//     'allowedHeaders': 'content-type'
// }));
//! Method 2
// this means all the options are available to all the servers
app.use(cors()) // or app.use(cors('*'))
let users = [
    {
        "id": 1,
        "name": "Leanne Graham1",
        "email": "Sincere1@april.biz",
        "phone": "1-770-736-8031 x56441"
    },
    {
        "id": 2,
        "name": "Leanne Graham2",
        "email": "Sincere2@april.biz",
        "phone": "1-770-736-8031 x56442"
    },
    {
        "id": 3,
        "name": "Leanne Graham3",
        "email": "Sincere3@april.biz",
        "phone": "1-770-736-8031 x56443"
    },
    {
        "id": 4,
        "name": "Leanne Graham4",
        "email": "Sincere4@april.biz",
        "phone": "1-770-736-8031 x56444"
    }
]
app.get('/users', (req, res)=>{
    // res.send("Get Success")
    // !Method 1
    // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.send(users);
});
app.listen(2000, ()=>{
    console.log("Started");
})