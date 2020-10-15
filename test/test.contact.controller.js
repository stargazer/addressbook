const chai = require("chai");
const expect = chai.expect;
const httpMocks = require('node-mocks-http');
const mongoose = require('mongoose');
const contactController = require("../src/api/controllers/contact.controller.js")
const Contact = require('../src/api/models/contact.model.js');


describe("create contact", function() {

  before(async () => {
    const dbUrl = 'mongodb://db:27017/test-addressbook';

    try {
      await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Successfully connected to the database.");
    } catch(err) {
      console.log("Could not connect to the database. ", err);
      process.exit();
    }
  })

  beforeEach(async () => {
    await Contact.deleteMany();
  })

  after(async () => {
    await mongoose.connection.close();
  })

  it("`name` or `surname` are not provided - should fail with status code 400", async () => {
    const req = httpMocks.createRequest({
      body: {}
    });
    const res = httpMocks.createResponse();

    await contactController.create(req, res);
    expect(res.statusCode).to.equal(400);
    expect(res._getData().message).to.equal("Contact needs to have at least a name or surname");
  })

  it("`name` is provided - should succeed with status code 200", async () => {
    const req = httpMocks.createRequest({
      body: {
        name: "Randy"
      }
    });
    const res = httpMocks.createResponse();

    expect(await Contact.countDocuments()).to.equal(0);
    await contactController.create(req, res);
    expect(res.statusCode).to.equal(200);
    expect(await Contact.countDocuments()).to.equal(1);
  })

  it("`surname` is provided - should succeed with status code 200", async () => {
    const req = httpMocks.createRequest({
      body: {
        surname: "Marsh"
      }
    });
    const res = httpMocks.createResponse();

    expect(await Contact.countDocuments()).to.equal(0);
    await contactController.create(req, res);
    expect(res.statusCode).to.equal(200);
    expect(await Contact.countDocuments()).to.equal(1);
  })
});
