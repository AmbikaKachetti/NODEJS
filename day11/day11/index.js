// const express = require('express');
// const multer = require('multer');

// const cors = require('cors');

// const app = express();

// app.use(cors());

// const ds = multer.diskStorage({
//     destination: 'day11/uploads',
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })
// const upload = multer({
//     storage: ds,
//     dest: '/upload/'
// })
// app.get('/', (req, res)=>{
//     res.send('Hi')
// })
// app.post('/upload', upload.single('avatar'),
//     (req, res)=>{
//     res.send()
// })

// app.listen(3000, ()=>{
//     console.log("Server Started Successfully at port number 3000");
// })
// --------------------------------------------------------------------------------

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Configure multer disk storage
const ds = multer.diskStorage({
    destination: path.join(__dirname, 'uploads'), // Corrected path
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }, 
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

// Multer object with disk storage
const upload = multer({ storage: ds });

app.get('/', (req, res) => {
    res.send('Hi');
});

// Handle file upload
app.post('/upload', upload.single('avatar'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.status(200).send({ message: 'File uploaded successfully', file: req.file });
});

// Start server
app.listen(3000, () => {
    console.log("Server started successfully at port number 3000");
});
