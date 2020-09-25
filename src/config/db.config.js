mongoose = require('mongoose');
dbUrl = 'mongodb://db:27017/addressbook';

async function dbConnect(uri) {
  try {
    await mongoose.connect(uri, { userNewUrlParser: true });
    console.log("Successfully connected to the database.");
  } catch(err) {
    console.log("Could not connect to the database. ", err);
    process.exit();
  }
}
dbConnect(dbUrl);
