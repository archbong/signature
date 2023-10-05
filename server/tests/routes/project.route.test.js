const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('project routes test', () => {
  const options = {
    url: `${process.env.API_BASE_URL}/api/v1/projects`,
    method: "GET"
  }

  it('GET all project route', (done) => {
    request(options, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.equal(500);
      }
      expect(res.statusCode).to.equal(200)
      done();

    })
  })

  describe('GET Single project route', () => {
    const options = {
      url: `${process.env.API_BASE_URL}/api/v1/projects/650b16ed9a019b17f99a6853`,
      method: "GET"
    }

    it('Get project by projectId route', (done) => {
      request(options, (err, res, body) => {
        if (err) {
          expect(res.statusCode).to.equal(500);
        }
        expect(res.statusCode).to.equal(200)
        done();

      })
    })

    describe('POST project route', () => {
      const options = {
        url: `${process.env.API_BASE_URL}/api/v1/projects`,
        method: "POST"
      }
  
      it('POST error on new project route', (done) => {
        request(options, (err, res, body) => {
          if (err) {
            expect(res.statusCode).to.equal(500);
          }
          done();
        })
      })
    })

    describe('Updating a project route', (done) => {
      const options = {
        url: `${process.env.API_BASE_URL}/api/v1/projects/650b16ed9a019b17f99a6853`,
        method: "PUT"
      }
      it('PUT error on project by projectId route', (done) => {
        request(options, (err, res, body) => {
          if (err) {
            expect(res.statusCode).to.equal(500);
          }
          done();
        })
      })
    })
  })

  describe('Deleting a project route', (done) => {
    const options = {
      url: `${process.env.API_BASE_URL}/api/v1/projects/${process.env.projectID}`,
      method: "DELETE"
    }
    it('Delete project by projectId route', (done) => {
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

