const Contact = require('../models/contact.model.js');

exports.create = (req, res) => {
  // Validate
  if(!req.body.name && !req.body.surname) {
    res.status(400).send({
      message: "Contact needs to have at least a name or surname"
    });
  }

  // Create Contact object
  const contact = new Contact({
    name: req.body.name,
    surname: req.body.surname,
    phones: req.body.phones,
    emails: req.body.emails
  });

  // Save Contact
  contact.save()
   .then(data => {
     res.send(data);
   }).catch(err => {
     res.status(500).send({
       message: err.message
     })
   });
};

exports.findAll = (req, res) => {
  Contact.find()
   .then(contacts => {
     res.send(contacts);
   }).catch(err => {
     res.status(500).send({
       message: err.message
     });
   });

};

exports.findOne = (req, res) => {
  Contact.findById(req.params.contactId)
   .then(contact => {
     res.send(contact);
   }).catch(err => {
    if(err.kind === 'ObjectId') {
      res.status(404).send({
        message: "Contact with id " + req.params.contactId + " not found"
      });
    }
    res.status(500).send({
      message: err.message
    });
   });
};

exports.updateOne = (req, res) => {
  // Validate
  if(!req.body.phones && !req.body.emails) {
    res.status(400).send({
      message: "You need to provide some data to update the contact"
    });
  }

  // Update Contact object
  Contact.findByIdAndUpdate(req.params.contactId, {
    phones: req.body.phones || [],
    emails: req.body.emails || []
  }, {new: true})
   .then(contact => {
     res.send(contact);
   }).catch(err => {
     if(err.kind === 'ObjectId') {
      res.status(404).send({
        message: "Contact with id " + req.params.contactId + " not found"
      });
     }
    res.status(500).send({
      message: err.message
    });
   });
};

exports.deleteOne = (req, res) => {
  Contact.findByIdAndRemove(req.params.contactId)
   .then(contact => {
     res.send({message: "Contact deleted"});
   }).catch(err => {
     if(err.kind === 'ObjectId') {
      res.status(404).send({
        message: "Contact with id " + req.params.contactId + " not found"
      });
     }
    res.status(500).send({
      message: err.message
    });
   });
};
