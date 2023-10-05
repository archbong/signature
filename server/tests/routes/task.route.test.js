const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('Task routes test', () => {
  const options = {
    url: `${process.env.API_BASE_URL}/api/v1/tasks`,
    method: "GET"
  }

  it('GET all task route', (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done();

    })
  })

  describe('GET Single task route', () => {
    const options = {
      url: `${process.env.API_BASE_URL}/api/v1/tasks`,
      method: "GET"
    }

    it('Get task by taskId route', (done) => {
      request(options, (err, res, body) => {
        if (err) {
          expect(res.statusCode).to.equal(500);
        }
        expect(res.statusCode).to.equal(200)
        done();

      })
    })

    describe('POST task route', () => {
      const options = {
        url: `${process.env.API_BASE_URL}/api/v1/tasks`,
        method: "POST"
      }
  
      it('POST error on new task route', (done) => {
        request(options, (err, res, body) => {
          if (err) {
            expect(res.statusCode).to.equal(500);
          }
          done();
        })
      })
    })

    describe('Updating a task route', (done) => {
      const options = {
        url: `${process.env.API_BASE_URL}/api/v1/tasks/${process.env.taskID}`,
        method: "PUT"
      }
      it('PUT error on task by taskId route', (done) => {
        request(options, (err, res, body) => {
          if (err) {
            expect(res.statusCode).to.equal(500);
          }
          done();
        })
      })
    })
  })

  describe('Deleting a task route', (done) => {
    const options = {
      url: `${process.env.API_BASE_URL}/api/v1/tasks/${process.env.taskID}`,
      method: "DELETE"
    }
    it('Delete  error task by taskId route', (done) => {
      request(options, (err, res, body) => {
        if (err) {
          expect(res.statusCode).to.equal(500);
        }
        expect(res.statusCode).to.equal(204)
        done();
      })
    })
  })
})

