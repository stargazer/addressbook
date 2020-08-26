module.exports = (app) => {
  const contacts = require('../controllers/contact.controller.js')

  app.post('/contacts', contacts.create);
  app.get('/contacts', contacts.findAll);
  app.get('/contacts/:contactId', contacts.findOne);
  app.put('/contacts/:contactId', contacts.updateOne);
  app.delete('/contacts/:contactId', contacts.deleteOne);
}
