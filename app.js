const express = require('express')
,app= express();


app.get('/', (req,res)=>{
  res.send('Hello world')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})


module.exports = app