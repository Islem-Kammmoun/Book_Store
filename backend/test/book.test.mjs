import assert from 'assert';
import request from 'supertest';
import app from '../index.js';
import { expect } from 'chai';

describe('GET /books', function() {
  it('should return all books', function(done) {
    request(app)
      .get('/books')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('object'); // Expecting response to be an object
        expect(res.body).to.have.property('count'); // Expecting response to have a 'count' property
        expect(res.body).to.have.property('data'); // Expecting response to have a 'data' property
        expect(res.body.data).to.be.an('array'); // Expecting 'data' property to be an array
        done();
      });
  });
});
