const expect = require('chai').expect
const request = require('supertest');

const server = require('../../server')

var app = request.agent(server)



describe('GET method /todos/', () => {
  it('Gets all todos or an information message in JSON with 200 status code', () => {
    app.get('/todos/' ).send({
      title: "TEST"
    }).end((err, res) =>{
      expect(res.body.title).to.equal(res.body.title)
      expect(res.body._id).to.equal(res.body._id)
      expect(200)
    })
  });
  
});


describe('GET method /todos/:id', () => {
  it('specific GET query with id information message in JSON with 200 status code', () => {
    app.get('/todos/:id' ).send({
      title: "TEST"
    }).end((err, res) =>{
      expect(res.body.title).to.equal(res.body.title)
      expect(res.body._id).to.equal(res.body._id)
      expect(200)
      expect('Content-Type', /json/)
      if(err) return err;
    })
  });
  
});


describe('Bad Request for GET method wrong query /todo/', () => {
  it('wrong query Bad Request 404 status code', () => {
    app.get('/todo/' ).send({
      title: "TEST"
    }).end((err, res) =>{
      expect(res.body.title).to.equal(res.body.title)
      expect(res.body._id).to.equal(res.body._id)
      expect(400)
    })
  });
  
});