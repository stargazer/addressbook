mongoose = require('mongoose');
dbUrl = 'mongodb://db:27017/addressbook';

mongoose.connect(dbUrl, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database.");
}).catch(err => {
  console.log("Could not connect to the database. ", err);
  process.exit();
});
