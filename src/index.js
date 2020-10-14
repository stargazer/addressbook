// Initiate db connection
require('./config/db.config.js');

// Create app instance
app = require('./config/app.config.js');
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
