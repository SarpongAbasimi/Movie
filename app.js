const express = require('express')
,path = require('path')
,app= express();

require('dotenv').config()
app.set('view engine', 'ejs');
app.use('/api/movies', require('./routes/api/movies'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('*', require('./routes/errorpages/404'));

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})

module.exports = app