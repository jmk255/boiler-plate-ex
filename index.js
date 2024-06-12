const express = require('express')
const app = express()
const port = 5000

//mongoose를 이용해서 앱과 mongoDB를 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cmk81a:abcd1234@mark.1yleoso.mongodb.net/?retryWrites=true&w=majority&appName=Mark').then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})