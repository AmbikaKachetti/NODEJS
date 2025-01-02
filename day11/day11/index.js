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

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Configure multer disk storage
const ds = multer.diskStorage({
  destination: path.join(__dirname, "uploads"), // Corrected path
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const filter = (req, file, cb) => {
  console.log("File MIME Type:", file.mimetype); // Debug log
  console.log(file);
  const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid File Type"));
  }
};

// Multer object with disk storage
const upload = multer({
  storage: ds,
  fileFilter: filter,
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
}).single("avatar");

app.get("/", (req, res) => {
  res.send("Hi");
});

// Handle file upload
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        if(err.code === 'LIMIT_FILE_SIZE'){
            res.status(400).send({
                code: 'large',
                message:"File is Large, only upload files less than 1MB"
                // error:"File is Large, only upload files less than 1MB"
            })
        }
        else{
            res.status(400).send({
                code: 'unknown',
                message:"Error while uploading"
            })
        }
        // console.log(err);
        // res.status(400).send({
        //   message: "error while uploading",
        // });
      } else {
        res.status(400).send({
            code: 'invalid type',
            message: "Invalid File Type only allowed jpeg, jpg",
        });
      }
    } else {
      res.send({
        code: "success",
        message: "uploaded successfully",
      });
    }
  });
});

// gpt corrected code
// app.post('/upload', (req, res) => {
//     upload(req, res, (err) => {
//         if (err) {
//             if (err instanceof multer.MulterError) {
//                 // Multer-specific error
//                 return res.status(400).send({ error: "Error while uploading" });
//             } else if (err.message === "Invalid File Type") {
//                 // Custom error from fileFilter
//                 return res.status(400).send({
//                     error: "Invalid File Type: Only JPG and JPEG files are allowed."
//                 });
//             } else {
//                 // Other errors
//                 return res.status(500).send({ error: "Internal server error" });
//             }
//         }

//         // No errors, upload successful
//         if (!req.file) {
//             return res.status(400).send({ error: "No file uploaded." });
//         }

//         res.status(200).send({
//             message: "File uploaded successfully",
//             file: req.file,
//         });
//     });
// });

// Start server
app.listen(3000, () => {
  console.log("Server started successfully at port number 3000");
});

// -----------------------------------------------------------------------------------------------------

// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');
// const path = require('path');
// const fs = require('fs'); // ! Here "fs" module also included

// const app = express();
// app.use(cors());

// // Ensure uploads directory exists
// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
// }

// // Configure multer disk storage
// const ds = multer.diskStorage({
//     destination: uploadDir,
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     },
// });

// // File filter to allow only specific MIME types
// const filter = (req, file, cb) => {
//     const allowedTypes = ["image/jpg", "image/jpeg"];
//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error("Invalid File Type"));
//     }
// };

// // Multer configuration
// const upload = multer({
//     storage: ds,
//     fileFilter: filter,
// });

// // Home route
// app.get('/', (req, res) => {
//     res.send('Hi');
// });

// // Handle file upload
// app.post('/upload', upload.single('avatar'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).send('No file uploaded.');
//     }
//     res.status(200).send({ message: 'File uploaded successfully', file: req.file });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     if (err instanceof multer.MulterError) {
//         return res.status(400).send({ error: err.message });
//     } else if (err) {
//         return res.status(400).send({ error: err.message });
//     }
//     next();
// });

// // Start server
// app.listen(3000, () => {
//     console.log("Server started successfully at port number 3000");
// });
