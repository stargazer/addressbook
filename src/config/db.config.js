mongoose = require('mongoose');

async function dbConnect(dbName) {
  try {
    await mongoose.connect('mongodb://db:27017/' + dbName, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch(err) {
    process.exit();
  }
}

module.exports = dbConnect;
