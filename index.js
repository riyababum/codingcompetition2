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
        service: 'outlook',
        auth: {
            user: 'riyababum@outlook.com',
            pass: 'riya@0813'
        }
    });

    var mailOptions = {
        from: 'riyababum@outlook.com',
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


app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
