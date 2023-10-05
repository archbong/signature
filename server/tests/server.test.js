const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('../config/env');
const content = require('../content')


describe('Signature server running', () => {
    const options = {
      url: config.development.url.api,
      method: "GET"
    }

    it('check correct status code', (done) => {
      request(options, (err, res, body) => {
        expect(body).to.contain(content.header.title);
        expect(body).to.contain(content.header.caption);
        expect(body).to.contain(content.body.content);
        expect(res.statusCode).to.equal(200)
        done();
      })
    });
});
