const express = require('express');
const bodyParser = require('body-parser');
const DB = require('./db/index');
const cors = require('cors');
const request = require('request')
const key = require('./key')


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

request.get(`{key}`, (error, response, body) => {
    console.log('news',response)
})

app.post('/register', (req , res) => {
    console.log('you reached me')
    //DB.save(req.body.)
})


app.listen(3000, function(){
    console.log('server is running 3000')
})
