const express = require ("express");
var nodemailer = require('nodemailer');

const app= new express();

app.set('views','./src/views');
app.set('view engine' ,'ejs');

app.get('/',(req,res)=>{
    res.render('welcome');
});

app.get('/home',(req,res)=>{
    res.render('form');
});

app.get('/mailer',(req,res)=>{
    var emailid = req.query.email;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'babumriya@gmail.com',
            pass: 'abcd@1234'
        }
    });

    var mailOptions = {
        from: 'babumriya@gmail.com',
        to: emailid,
        subject: 'Sending Email using Node.js',
        text: 'Sample mail for coding competition 2'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('Something went wrong!!!');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Mail Sent Successfully.');
        }
    });
});


app.listen(5000, function(){
    console.log("Server started at 5000");
});
