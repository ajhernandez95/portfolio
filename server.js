const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/mail', require('./routes/mail'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
