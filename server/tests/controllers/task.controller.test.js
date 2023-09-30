let mongoose = require('mongoose');
let Task = require('../../models/task.model'); // Make sure to import the Task model
let express = require('express');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

// parent block
describe('Tasks', () => {
    beforeEach((done) => {
        Task.remove({}, (err) => { 
           done();           
        });        
    });
  describe('/GET task', () => {
      it('it should GET all the tasks', (done) => {
            chai.request(express)
            .get('/tasks')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST task', () => {
      it('it should not POST a task without tasks field', (done) => {
          let task = {
              title: "The Lord of the Rings",
              description: "J.R.R. Tolkien",
              year: 1954
          }
            chai.request(server)
            .post('/task')
            .send(task)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('tasks');
                  res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });
      it('it should POST a task ', (done) => {
          let task = {
              title: "The Lord of the Rings",
              description: "J.R.R. Tolkien",
              year: 1954,
              pages: 1170
          }
            chai.request(server)
            .post('/task')
            .send(task)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('task successfully added!');
                  res.body.task.should.have.property('title');
                  res.body.task.should.have.property('description');
                  res.body.task.should.have.property('pages');
                  res.body.task.should.have.property('year');
              done();
            });
      });
  });
  describe('/GET/:id task', () => {
      it('it should GET a task by the given id', (done) => {
          let task = new task({ title: "The Lord of the Rings", description: "J.R.R. Tolkien", year: 1954, pages: 1170 });
          task.save((err, task) => {
              chai.request(server)
            .get('/task/' + task.id)
            .send(task)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('description');
                  res.body.should.have.property('pages');
                  res.body.should.have.property('year');
                  res.body.should.have.property('_id').eql(task.id);
              done();
            });
          });

      });
  });
  describe('/PUT/:id task', () => {
      it('it should UPDATE a task given the id', (done) => {
          let task = new task({title: "The Chronicles of Narnia", description: "C.S. Lewis", year: 1948, pages: 778})
          task.save((err, task) => {
                chai.request(server)
                .put('/task/' + task.id)
                .send({title: "The Chronicles of Narnia", description: "C.S. Lewis", year: 1950, pages: 778})
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('task updated!');
                      res.body.task.should.have.property('year').eql(1950);
                  done();
                });
          });
      });
  });
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id task', () => {
      it('it should DELETE a task given the id', (done) => {
          let task = new task({title: "The Chronicles of Narnia", description: "C.S. Lewis", year: 1948, pages: 778})
          task.save((err, task) => {
                chai.request(server)
                .delete('/task/' + task.id)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('task successfully deleted!');
                      res.body.result.should.have.property('ok').eql(1);
                      res.body.result.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
});
