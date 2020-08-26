const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Contacts routes
require('../api/routes/contact.routes.js')(app);

module.exports = app;
