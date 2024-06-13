const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

//config디렉터리의 key를 가져옴
const config = require('./config/key');

const { User } = require("./models/User")

//application/x-www-form-urlencoded 이런 데이터를 분석해서 가져올 수 있게 해주는 것
app.use(bodyParser.urlencoded({extended: true}));

//application/json 데이터를 분석해서 가져올 수 있게 해주는 것
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/register', async (req, res) => {

  const user = new User(req.body);

  const result = await user.save().then(() => {
    res.status(200).json({
      success: true
    })
  }).catch((err) => {
    res.json({ success: false, err })
  }) 

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})