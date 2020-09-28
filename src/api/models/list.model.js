const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
  name: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('List', ListSchema);
