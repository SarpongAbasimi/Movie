const app = require('../../app')
,request = require('supertest');

describe('GET /', ()=>{
  it('responds with a json object', (done)=>{
    request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res)=>{
      if(err){
        return done(err)
      }
      done()
    })
  });
});

