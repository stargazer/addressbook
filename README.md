# address book

A simple ReST API for an address book application. It makes use of `node.js`
and `MongoDB`.

## Resources and endpoints

### Contact
- `POST /contacts`
- `GET /contacts`
- `GET /contacts/:contactId`
- `PUT /contacts/:contactId`
- `DELETE /contacts/:contactId`

### List
- `POST /lists`
- `GET /lists`
- `GET /lists/:listId`
- `PUT /lists/:listId`
- `DELETE /lists/listId`
- `GET /lists/:listId/contacts`: Get all contacts that belong to list `:listId`
- `PUT /lists/:listId/contacts/:contactId`: Add contact `:contactId` to list `:listId`
- `DELETE /lists/:listId/contacts/:contactId`: Remove contact `:contactId` from
    list `:listId`

### How to run
- `docker-compose up api`
- `docker-compose exec api bash`
- `npm start`
- Point your browser at `localhost:8080/`

### TODO
- Write tests
