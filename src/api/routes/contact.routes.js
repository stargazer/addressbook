const express = require('express');
const contacts = require('../controllers/contact.controller.js')

var router = express.Router();

router.post('/contacts', contacts.create);
router.get('/contacts', contacts.findAll);
router.get('/contacts/:contactId', contacts.findOne);
router.put('/contacts/:contactId', contacts.updateOne);
router.delete('/contacts/:contactId', contacts.deleteOne);

module.exports = router;
