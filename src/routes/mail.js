const express = require('express');
const router = express.Router();

router.use('/', (req, res) => console.log(process.env.CONTACT_EMAIL));

module.exports = router;
