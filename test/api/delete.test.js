const expect = require('chai').expect
const request = require('supertest');

const server = require('../../server')
const Todo = require('../../model/Todo')
var app = request.agent(server)
let todoId = ""


    describe('DELETE method /todos/:id delete todo item', () => { 
      it("Todo should be deleted", async () => {
        let result = null;
        before(async () => {
          result = await app.delete(`/todos/${todoId}`);
          expect(result.status).to.equal(200);
          expect(result.body._id).to.equal(result.body._id);
        });
        it("Success should be true", (done) => {
          expect(result.body.Todo).to.be(true);
          done()
        })
        console.log("delete is done");
      })
    })


