const express = require('express');
const bodyParser = require('body-parser');

// App configuration
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initiate DB connection
require('./config/database.config.js');

// Contacts routes
require('./api/routes/contact.routes.js')(app);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
