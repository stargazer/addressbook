const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
  name: String,
  contacts: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Contact'}
  ],
}, {
  timestamps: true
});

module.exports = mongoose.model('List', ListSchema);
