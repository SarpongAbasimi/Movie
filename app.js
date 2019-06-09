const express = require('express')
,app= express();

app.use('/', require('./routes/api/movies'))

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})

module.exports = app