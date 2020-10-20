const chai = require("chai");
const expect = chai.expect;
const mongoose = require('mongoose');
const request = require('supertest');

const Contact = require('../src/api/models/contact.model.js');
const server = require('../src/config/app.config.js');

describe('Test /contacts route', function() {
  beforeEach(async () => {
    await Contact.deleteMany();
  })

  it('GET /contacts', async() => {
    res = await request(server).get('/contacts');
    expect(res.status).to.equal(200);
  })

  it('DELETE /contacts', async() => {
    res = await request(server).delete('/contacts');
  })
})
