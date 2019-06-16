const app = require('../../app'),
request = require('supertest');

describe('404 Page', ()=>{
  it('returns a custon 404 Page when request is not found', (done)=>{
    request(app).
    get('/name').
    expect(404).
    expect(/Sorry Mate the page can't be found/, done)
  });
});