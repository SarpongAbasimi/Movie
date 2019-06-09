<h1 align='center'>
Movies.
</h1>

- ``8th June 2019``.
> This is a mini **project** that I have been wanting to do for a while now. The aim of the project is to allow users to know the latest movies out there, watch movie trailers and read reviews on their favourite movies. I would also like to add a registration and login page to the site so that users can have their own profile pages and manage their favourite movies.

- The aim is to user the ``movie database api`` for this application and hopefully, by the ain of the project, I should have something like this.


<img width="984" alt="Screen Shot 2019-06-09 at 16 37 45" src="https://user-images.githubusercontent.com/37377831/59161022-02229a00-8ad5-11e9-8777-abd8dafa6b18.png">

<h4 align=>
Technologies Used So Far.
</h4>

|      TECH STACK                    |
|     :----------:                   |
| <img src='https://user-images.githubusercontent.com/37377831/57985523-0cff8700-7a61-11e9-8658-f3c746f1c1b7.png' width='40'> <img src='https://user-images.githubusercontent.com/37377831/55038471-d6852d00-5018-11e9-9456-4c513770b88c.png' width='30'> <img src='https://user-images.githubusercontent.com/37377831/57587570-d1176f80-74fe-11e9-959d-8d1efda3a720.png' width='60'> <img src='https://user-images.githubusercontent.com/37377831/59161120-5a0dd080-8ad6-11e9-84e0-0cc218da9119.png' width='30'> <img src='https://user-images.githubusercontent.com/37377831/59161150-ba9d0d80-8ad6-11e9-96b6-9f6604a48ffc.jpg' width='25'>|


<h4 align='center'>
 Challenges.
</h4>

- The first challenge I faced in this project was getting ``travis`` to turn ✅ after I implemented the function to fetch data from the ``movie db api``. For some reason the build was alsways timing out.
  <img width="893" alt="Screen Shot 2019-06-09 at 17 02 10" src="https://user-images.githubusercontent.com/37377831/59161272-6135de00-8ad8-11e9-8986-d1cd064bfb13.png">

  - After a bit of research, I realised that I to called the ``done()`` method in my test to tell ``mocha`` to wait until the promise has been resolved.

 ```javascript
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
    });
  });
});
```

<h4 align='center'>
  How to Use App.
</h4>

- ``Fork`` and ``clone`` this repo.
- open ``terminal`` and cd into ``movies``.
- ``run bundle install``
