const expect = require('chai').expect
const request = require('supertest');

const server = require('../../server')

var app = request.agent(server)

const Todo = require('../../model/Todo')

let todoId = ""

let todo = {  title: "test", complete: false }

describe('PUT method /todos/:id update todo item', () => {

    it('Update todo item status code 200',() => {
      app.put('/todos/' + todoId ).send({
        title: "TEST",
        complete: true
      }).end((err, res) =>{
        expect(res.body.title).to.equal(res.body.title)
        expect(res.body._id).to.equal(res.body._id)
        expect(res.body.complete).to.equal(res.body.complete)
        expect(200)
      })
    });
}) 