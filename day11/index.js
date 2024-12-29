const express = require('express');
const multer = require('multer');

const cors = require('cors');

const app = express();

app.use(cors());

// this is diskStorage type Object in multer
const ds = multer.diskStorage({
    destination: 'day11/uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
// this is actual multer object 
const upload = multer({
    storage: ds,
    dest: '/upload/'
})
app.get('/', (req, res)=>{
    res.send('Hi')
})
app.post('/upload', upload.single('avatar'),
    (req, res)=>{
    res.send()
})

app.listen(3000, ()=>{
    console.log("Server Started Successfully at port number 3000");
})