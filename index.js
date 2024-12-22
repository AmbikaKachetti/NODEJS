var nm = require('nodemailer');
var transporter = nm.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user: "demo47942@gmail.com",
            pass: "pass-key",
        }
    }
);
var options = {
    from: "demo47942@gmail.com",
    to: "kkatyaini1@gmail.com",
    subject: "test mail from nodemailer module",
    // text: "Nodeemail sending 'nodemailer' test message"
    html:`<h1>Welcome to NodeJS Application</h1>
    <img src='cid:food' width: '200px'>
    <button>Click Here</button>
    `,
    attachments:[
        {
            filename: 'food.jpg',
            path: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cid: 'food'
        }
    ]
}
transporter.sendMail(
    options, function(error_info, success_info){
        if(error){
            console.log(error_info);
        }
        else{
            console.log("Send Successfully");
        }
    }
)
























































































