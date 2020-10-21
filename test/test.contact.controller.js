const chai = require("chai");
const expect = chai.expect;
const httpMocks = require('node-mocks-http');

const contactController = require("../src/api/controllers/contact.controller.js")
const Contact = require('../src/api/models/contact.model.js');


describe("Contact - create", function() {
  beforeEach(async () => {
    await Contact.deleteMany();
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

describe("Contact - findAll", function() {
  beforeEach(async () => {
    await new Contact({name: "Randy", surname: "Marsh",
                       phones: ["111111", "222222"],
                       emails: ["randy1@example.com", "randy2@example.com"]});
    await new Contact({name: "Eric", surname: "Cartman"});
  });

  afterEach(async () => {
    await Contact.deleteMany();
  })
})

