var express = require('express');
var app = express();

app.listen(4050, ()=>{
    console.log("Server Started");
})
// ! Way1 using "static" method
// writing direct middleware like this at the start will disturb other paths
// app.use(express.static(__dirname + '/public'))
// app.use('/public', express.static(__dirname + '/public'))

// ! Way2 using normal "get" method
// app.get('/api', (req, res)=>{
//     res.send("Hello")
// })

// ! Way3 using inbuild "sendfile" method - here we need to give complete 
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/login.html')
})

// writing direct middleware like this at the end will not disturb other paths
app.use(express.static(__dirname + '/public'))
