const express = require('express');

const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
require('../api/routes/contact.routes.js')(app);
require('../api/routes/list.routes.js')(app);

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server;
