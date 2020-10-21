const express = require('express');

const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
contactRouter = require('../api/routes/contact.routes.js');
listRouter = require('../api/routes/list.routes.js');
app.use(contactRouter, listRouter);

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server;
