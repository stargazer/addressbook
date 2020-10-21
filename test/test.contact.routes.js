const chai = require("chai");
const expect = chai.expect;
const mongoose = require('mongoose');
const request = require('supertest');

const Contact = require('../src/api/models/contact.model.js');
const server = require('../src/config/app.config.js');

describe('/contacts route', function() {
  beforeEach(async () => {
    await Contact.deleteMany();
  })

  it('GET /contacts', async() => {
    res = await request(server).get('/contacts');
    expect(res.statusCode).to.not.equal(404);
  })

  it('POST /contacts', async() => {
    res = await request(server).post('/contacts');
    expect(res.statusCode).to.not.equal(404);
  })

  it('PUT /contacts', async() => {
    res = await request(server).put('/contacts');
    expect(res.statusCode).to.equal(404);
  })

  it('DELETE /contacts', async() => {
    res = await request(server).delete('/contacts');
    expect(res.statusCode).to.equal(404);
  })
})
