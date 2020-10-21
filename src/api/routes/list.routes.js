const express = require('express');
const contacts = require('../controllers/contact.controller.js')
const lists = require('../controllers/list.controller.js');

var router = express.Router();

router.post('/lists', lists.create);
router.get('/lists', lists.findAll);
router.get('/lists/:listId', lists.findOne);
router.put('/lists/:listId', lists.updateOne);
router.delete('/lists/:listId', lists.deleteOne);

router.get('/lists/:listId/contacts', contacts.findAllByList);
router.put('/lists/:listId/contacts/:contactId', lists.addContactToList);
router.delete('/lists/:listId/contacts/:contactId', lists.removeContactFromList);

module.exports = router;
