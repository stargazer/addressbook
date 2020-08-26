const mongoose = require('mongoose');

var dbName;
if(process.env.NODE_ENV === 'test') {
  dbName = 'test-addresbook';
} else {
  dbName = 'addressbook';
}

const dbUrl = 'mongodb://db:27017/' + dbName;
console.log('DbUrl: ', dbUrl);
module.exports = dbUrl;
