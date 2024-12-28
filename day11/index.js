const express = require('express');
const multer = require('multer');

const app = express();
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
multer({
    storage:
    dest: 'upload/'
})
app.get('/', (req, res)=>{
    res.send('Hi')
})
app.post('/upload', (req, res)=>{
    res.send()
})

app.listen(3000, ()=>{
    console.log("Server Started Successfully at port number 3000");
})