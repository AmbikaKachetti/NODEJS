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
# ----------------------------------------------------------------------------