// Initiate DB connection.
mongoose = require('mongoose');
dbUrl = require('./config/database.config.js');

mongoose.connect(dbUrl, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database.");
}).catch(err => {
  console.log("Could not connect to the database. ", err);
  process.exit();
});

// Create app instance
app = require('./config/app.config.js');

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
