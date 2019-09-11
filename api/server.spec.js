const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  it('Should set as "testing" with DB_ENV', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /', () => {
    it('return 200 ok', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
