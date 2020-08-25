const express = require('express');
const bodyParser = require('body-parser');

// App configuration
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({"message": "Hello world"})
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
