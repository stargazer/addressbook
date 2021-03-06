const mongoose = require('mongoose');

var server;
before(async () => {
  require('../src/config/db.config.js')('test-addressbook');
  server = require('../src/config/app.config.js');
})

after(async () => {
  await mongoose.connection.close();
  await server.close();
})
