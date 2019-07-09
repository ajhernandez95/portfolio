const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);

  // var transporter = nodemailer.createTransport({
  //   host: 'smtp-mail.outlook.com', // hostname
  //   secureConnection: false, // TLS requires secureConnection to be false
  //   port: 587, // port for secure SMTP
  //   auth: {
  //     user: process.env.CONTACT_EMAIL,
  //     pass: process.env.CONTACT_PASSWORD
  //   },
  //   tls: {
  //     ciphers: 'SSLv3'
  //   }
  // });

  // // setup e-mail data, even with unicode symbols
  // var mailOptions = {
  //   from: '<alexportfolio95@outlook.com>', // sender address (who sends)
  //   to: 'ajhernandez95@live.com', // list of receivers (who receives)
  //   subject: `Message from ${req.body.name}`, // Subject line
  //   text: 'text shows?', // plaintext body
  //   html: `${req.body.msg}` // html body
  // };

  // // send mail with defined transport object
  // transporter.sendMail(mailOptions, function(error, info) {
  //   if (error) {
  //     return console.log(error);
  //   }

  //   console.log('Message sent: ' + info.response);
  // });
});

module.exports = router;
