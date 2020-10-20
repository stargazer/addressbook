mongoose = require('mongoose');

async function dbConnect(dbName) {
  try {
    await mongoose.connect('mongodb://db:27017/' + dbName, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Successfully connected to the database.");
  } catch(err) {
    console.log("Could not connect to the database. ", err);
    process.exit();
  }
}

module.exports = dbConnect;
