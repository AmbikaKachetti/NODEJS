let fs = require('fs')


// writeFile - deletes everything and giving the newly added text
fs.writeFile('./day4/topics2.txt', "updating through manual methods", (err)=>{
    if(err){
        console.log('write not success');
    }
    else{
        console.log('write success');
    }
})

fs.appendFile('./day4/topics3.txt', "adding extra", (err, data)=>{
    if(err){
        console.log('write not success');
    }
    else{
        console.log('write success');
    }
})
