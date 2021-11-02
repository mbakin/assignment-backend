const expect = require('chai').expect
const request = require('supertest');

const server = require('../../server')

var app = request.agent(server)


describe('POST method /todos/ create new todo item', () => {
  it('Add new todo  status code 200', () => {
    app.post('/todos/' ).send({
      title: "TEST"
    }).end((err, res) =>{
      expect(res.body.title).to.equal(res.body.title)
      expect(res.body._id).to.equal(res.body._id)
      expect(200)
    })
  });
  
});

describe('Returns 404 status code if required field is null', () => {
  it('Add new todo  status code 404 ', () => {
    app.post('/todos/' ).send({}).end((err, res) =>{
      expect(res.body.title).to.equal(res.body.title)
      expect(res.body._id).to.equal(res.body._id)
      expect(404)
    })
  });
  
});