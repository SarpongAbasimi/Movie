const express = require('express')
,app= express();

require('dotenv').config()
app.use('/api/movies', require('./routes/api/movies'))
app.use('*', require('./routes/errorpages/404'))

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})

module.exports = app