const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

url = 'mongodb://db:27017/addressbook';

// Connect to db and export connection
module.exports = mongoose.connect(url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database.");
}).catch(err => {
  console.log("Could not connect to the database. ", err);
  process.exit();
});
