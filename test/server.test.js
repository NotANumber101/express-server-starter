const request = require('supertest');

const { app } = require('../src/app');

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

describe('GET /user', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});