module.exports = (app) => {
  const lists = require('../controllers/list.controller.js')

  app.post('/lists', lists.create);
  app.get('/lists', lists.findAll);
  app.get('/lists/:listId', lists.findOne);
  app.put('/lists/:listId', lists.updateOne);
  app.delete('/lists/:listId', lists.deleteOne);
}
