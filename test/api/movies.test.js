const app = require('../../app')
,request = require('supertest');

describe('GET /', ()=>{
  it('responds with a json object', (done)=>{
    request(app)
    .get('/api/movies')
    .expect('Content-Type', /html/)
    .expect(200)
    .end((err, res)=>{
      if(err){
        return done(err)
      }
      done()
    })
  });
});

