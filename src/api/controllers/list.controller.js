const List = require('../models/list.model.js');
const Contact = require('../models/contact.model.js');

async function create(req, res) {

  if(!req.body.name) {
    return res.status(400).send({
      message: "List needs to have a name"
    });
  }

  const list = await new List({
    name: req.body.name,
  });

  try {
    data = await list.save();
    res.send(data);
  } catch(err) {
    res.status(500).send({
      message: err.message
    });
  }
}

async function findAll(req, res) {
  try {
    lists = await List.find();
    res.send(lists);
  } catch(err) {
    res.status(500).send({
      message: err.message
    });
  }
}

async function findOne(req, res) {
  try {
    list = await List.findById(req.params.listId);
    res.send(list);
  } catch(err) {
    if(err.kind === 'ObjectId') {
      res.status(400).send({
        message: "List with id " + req.params.listId + " not found"
      });
    }
    else {
      res.status(500).send({
        message: err.message
      })
    }
  }
}

async function updateOne(req, res) {
  // Validate
  if(!req.body.name) {
    return res.status(400).send({
      message: "You need to provide the list name"
    });
  }

  // Update List object
  try {
    list = await List.findByIdAndUpdate(req.params.listId, {
      name: req.body.name,
    }, {new: true});
    res.send(list);
  } catch(err) {
    if(err.kind === 'ObjectId') {
      res.status(404).send({
        message: "List with id " + req.params.listId + " not found"
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
}

async function deleteOne(req, res) {
  try {
    list = await List.findByIdAndRemove(req.params.listId);
    res.send({message: "List deleted"});
  } catch(err) {
    if(err.kind === 'ObjectId') {
      res.status(404).send({
        message: "List with id " + req.params.listId + " not found"
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
}

async function addContactToList(req, res) {
  try {
    contact = await Contact.findById(req.params.contactId);
    list = await List.findById(req.params.listId);
    list.contacts.addToSet(contact);
    list.save();
    res.send(list);
  } catch(err) {
    res.status(500).send({
      message: err.message
    });
  }
}


async function removeContactFromList(req, res) {
  try {
    contact = await Contact.findById(req.params.contactId);
    list = await List.findById(req.params.listId);
    list.contacts.pull(contact);
    list.save();
    res.send(list);
  } catch(err) {
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

  addContactToList,
  removeContactFromList,
}
