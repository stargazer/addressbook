module.exports = (app) => {
  const lists = require('../controllers/list.controller.js');
  const contacts = require('../controllers/contact.controller.js');

  app.post('/lists', lists.create);
  app.get('/lists', lists.findAll);
  app.get('/lists/:listId', lists.findOne);
  app.put('/lists/:listId', lists.updateOne);
  app.delete('/lists/:listId', lists.deleteOne);

  app.get('/lists/:listId/contacts', contacts.findAllByList);
  app.put('/lists/:listId/contacts/:contactId', lists.addContactToList);
  app.delete('/lists/:listId/contacts/:contactId', lists.removeContactFromList);
}
