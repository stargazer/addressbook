const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var dbName;
if(process.env.NODE_ENV === 'test') {
  dbName = 'test-addresbook';
} else {
  dbName = 'addressbook';
}

const url = 'mongodb://db:27017/' + dbName;

// Connect to db and export connection
module.exports = mongoose.connect(url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database.");
}).catch(err => {
  console.log("Could not connect to the database. ", err);
  process.exit();
});
