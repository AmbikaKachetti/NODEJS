## DAY 11 - Multer - Part - 1
# Multer File Upload - Multer Middleware
1. npm init -y
2. npm i express
3. npm i multer

## Multer Module
    1. npm i multer
    2. const multer = require('multer')
    3. multer()
        3.1 dest: specifies the destination directory where uploaded files should be stored.
            Ex.: multer({dest: 'uploads/'})

        3.2 storage: It is an instance of multer.StorageEngine
            Ex.: const storage = multer.diskStorage({
                    destination: 'uploads/',
                    filename: function(req, file, cb){
                        cb(null, Date.now() + '-' + file.originalname);
                    }
                });
                multer({storage: storage})
        3.3 fileFilter:  Allows you to specify a function to filter which files are accepted for 
            upload based on their properties.
        3.4 limits: To set limits on the size and number of files that can be uploaded.
# we can proceed all these without Express Library, but the process will be lengthy. 
# So here, we use Express for better and simple API creation 
    - Date.now() , it will give timestamp
    - // to send multimedia data we need to create "FileData()"" for sure -> it's in UPLOAD/index.html
                const formData = new FormData();
                formData.append('avatar', file);
                fetch(
                    "http://localhost:3000", {
                        method: 'POST',
                        body: formData
                    }
                )
    - instead of this "<!-- <form action=""></form> -->" inside body, we create above forData in script file below the body in the same html file
    - here we used bootstrap for styling
    -----------------------------------------------------------
# this is the code in day11/index.js
    -   app.use(cors());

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
    -   way 1
    -   destination: 'day11/uploads',
    -   way 2
    -   destination: path.join(__dirname, 'uploads'), // Corrected path
    -   way 3
    -   
# ----------------------------------------------------------------------------
https://chatgpt.com/c/6773f330-4674-8008-8ae6-35864f55f54c

using chat gpt i rectifile file not saving in desired folder in previously commented code

https://chatgpt.com/c/67765a12-5ec8-8008-8eb3-d7c7084262a1
# -----------------------------------------------------------------------------
# _____________________________________________________________________________

## DAY 12 - Multer - Part - 2

# MULTER File Type

# to know more about - Multer Error Handling
 - https://www.npmjs.com/package/multer
 - https://github.com/expressjs/multer // here goto "Error Handling"

-------------------------------------------------------------------------------

- // Handle file upload
- app.post('/upload', (req, res) => {
    upload(req, res, (err)=>{
        if(err){
            if(err instanceof multer.MulterError){
                res.status(400)  // here if we are not setting 400, by default it will set 200
            }
        }
        else{
            res.send({
                message: "uploaded successfully"
            })
        }
    })  
 });

--------------------------------------------------------------------------------

# Multer File Size - "limits"

- // Multer object with disk storage
- const upload = multer({
  storage: ds,
  fileFilter: filter,
  limits: {
    fileSize: 1 * 1024 * 1024, // this is limiting file size to 1MB
  },
 }).single("avatar");

// -------------------------------------------------------

- with the help of "code" - we can write custome fronit end messages or alert while uploading files

// ------------------

# this is backend 
___________________________
- // Handle file upload
- app.post("/upload", (req, res) => {
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

// --------------------------------------------

# this is frontend 
___________________________
async function uploadFile() {
            try {
                const file = avatar.files[0];
                if (file) {
                    const formData = new FormData();
                    formData.append('avatar', file);

                    const res = await fetch("http://localhost:3000/upload", {
                        method: 'POST',
                        body: formData,
                    });

                    const msg = await res.json();
                    console.log('Response:', msg);
                    if (msg.code === 'large') {          - this is where "code"s are helpful
                        alert("file is too large");
                    }
                    else if (msg.code === 'unknown') {
                        alert('error while uploading');
                    }
                    else if (msg.code === 'invalid type') {
                        alert("Invalid File Type only allowed jpeg, jpg, png having 1MB")
                    }
                    else if (msg.code === 'success') {
                        alert("Uploaded Successfuly")
                    }

                } else {
                    console.log('No file selected.');
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }
# ---------------------------------------------------------

# Day13 - Multer - Upload Multiple files at a time

- .single is for uploading single files
- .array is for uploading multiple files at a time
- fileSize: 1 * 1024 * 1024, // this is for all files combined should be less than 1MB
- this is code in "NODEJS/UPLOAD/index.html"
-   // to store multiple files at a time
-   const upload = multer({
    storage: ds,
    fileFilter: filter,
    limits: {
        fileSize: 1 * 1024 * 1024, // this is for all files combined should be less than 1MB
    },
    }).array("file");
- this is code in "day11, 12, 13/index.js"
- 