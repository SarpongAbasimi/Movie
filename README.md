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



<h4 align='center'>
Updates.
</h4>

 ``15th June ``
> I finally got time today to work on the  movie app and I must say that I have learnt a lot. This is how the app currently looks now. I still have a long way to go to I am happy with the prgress.

<img width="1278" alt="Screen Shot 2019-06-15 at 21 08 52" src="https://user-images.githubusercontent.com/37377831/59555923-7b792b80-8fb2-11e9-9330-d0d9ea3a96ed.png">

> The next step is to add a show page. This page will ``render`` each individual ``movie`` and give more information about it.

- Today, I also learnt about how to ``mock`` api calls when ``testing`` using ``jest spyOn``. This allowed me to test the ``App`` component without making an actual ``api`` call.


```javascript

  it('fetches data from the server when component mounts', (done)=>{
    const mockedResponse = {"page": 1, "total_results": 19840,};

    const mockJsonPromise = Promise.resolve(mockedResponse),
          mockFetchPromise = Promise.resolve({
            json: ()=> mockJsonPromise
          });

    jest.spyOn(global, 'fetch').mockImplementation(()=> mockFetchPromise);

    const wrapper = shallow(< App/>);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/movies/popular/movies');

    process.nextTick(() => {
      expect(wrapper.find('Nav')).toBeTruthy();
      global.fetch.mockClear()
      done();
    });
    done();
  });

```
> The done() method is passed to the ``it`` block to tell jest to wait until the async funtion, ``fetch``,is completed before the test ends.