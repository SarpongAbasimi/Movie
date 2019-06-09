const app = require('../../app')
,request = require('supertest');

describe('GET /', ()=>{
  it('takes users to the application home page', (done)=>{
    request(app)
    .get('/')
    .expect(200)
    .end((err, res)=>{
      if (err) return done(err);
      done()
    })
  });
});

