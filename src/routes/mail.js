const express = require('express');
const router = express.Router();
require('dotenv').config();

console.log(process.env.REACT_APP_CONTACT_EMAIL);

router.use('/', (req, res) => {
  res.send('testing');
});

module.exports = router;
