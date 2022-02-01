const nodemailer = require('nodemailer');

const sendWelcomeEmail = (email,name)=>{
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'from@example.com',
        pass: 'pass'
    }
});
  
let mailDetails = {
    from: 'from@example.com',
    to: email,
    subject: 'Welcome mail',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app. `
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurred');
    } else {
        console.log('Email sent successfully');
    }
});
}

module.exports = {
    sendWelcomeEmail
}

