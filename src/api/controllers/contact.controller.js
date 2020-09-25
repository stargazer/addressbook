const Contact = require('../models/contact.model.js');

async function create(req, res) {
  // Validate
  if(!req.body.name && !req.body.surname) {
    return res.status(400).send({
      message: "Contact needs to have at least a name or surname"
    });
  }

  // Create Contact object
  const contact = await new Contact({
    name: req.body.name,
    surname: req.body.surname,
    phones: req.body.phones,
    emails: req.body.emails
  });

  // Save Contact
  try {
    data = await contact.save();
    res.send(data);
  } catch(err) {
    res.status(500).send({
      message: err.message
    });
  };
}

async function findAll(req, res) {
  try {
    contacts = await Contact.find();
    res.send(contacts);
  } catch(err) {
    res.status(500).send({
      message: err.message
    });
  }
};

async function findOne(req, res) {
  try {
    contact = await Contact.findById(req.params.contactId);
    res.send(contact);
  } catch(err) {
    if(err.kind === 'ObjectId') {
      res.status(404).send({
        message: "Contact with id " + req.params.contactId + " not found"
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
};

async function updateOne(req, res) {
  // Validate
  if(!req.body.phones && !req.body.emails) {
    return res.status(400).send({
      message: "You need to provide some data to update the contact"
    });
  }

  // Update Contact object
  try {
    contact = await Contact.findByIdAndUpdate(req.params.contactId, {
      phones: req.body.phones || [],
      emails: req.body.emails || []
    }, {new: true});
    res.send(contact);
  } catch(err) {
    if(err.kind === 'ObjectId') {
      res.status(404).send({
        message: "Contact with id " + req.params.contactId + " not found"
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
}

async function deleteOne(req, res) {
  try {
    contact = await Contact.findByIdAndRemove(req.params.contactId);
    res.send({message: "Contact deleted"});
  } catch(err) {
    if(err.kind === 'ObjectId') {
      res.status(404).send({
        message: "Contact with id " + req.params.contactId + " not found"
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
}

module.exports = {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
}
