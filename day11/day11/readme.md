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