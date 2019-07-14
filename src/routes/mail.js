const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

require('dotenv').config();
console.log('i ran');
console.log(process.env.CONTACT_EMAIL);

router.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  var mailOptions = {
    from: 'Portfolio Website <alexportfolio95@outlook.com>',
    to: 'ajhernandez95@live.com',
    subject: `Message from:${req.body.data.name}`,
    html: `${req.body.data.msg} <br/> Email: ${req.body.data.email}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }

    console.log('Message sent: ' + info.response);
  });
  res.end();
});

module.exports = router;
