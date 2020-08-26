const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  name: String,
  surname: String,
  phones: [String],
  emails: [String],
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', ContactSchema);
