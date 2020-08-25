const express = require('express');
const bodyParser = require('body-parser');

// App configuration
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure db
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to db
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database.");
}).catch(err => {
  console.log("Could not connect to the database. ", err);
  process.exit();
});

// Contacts routes
require('./app/routes/contact.routes.js')(app);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
