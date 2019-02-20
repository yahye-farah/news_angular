const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const DB = require('./db/index');
const cors = require('cors');
const request = require('request')
const key = require('./key');
const news = require('./data')


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//call the api to get the news 

// request.get(key.apiKey, (error, response, body) => {
//     console.log('jjjj',body)
//     body = JSON.parse(body);
//     console.log('news',body.articles)
//     DB.saveNews(body.articles);
// })


//get all the news and their comments and users that made the comment

app.get('/',(req,res) => {
    DB.allNews((result) => {
        res.send(result)
    })
})




//register new user 
app.post('/register', (req , res) => {
    console.log('you reached me',req.body.data)
    DB.userExists(req.body.data , (user) => {
        if(user.length > 0) {
            res.send('This user is already exist please choose another username');
        }else {
            DB.save(req.body.data, ( token) => {
                res.send(token);
            })
        }
    })
})

// app.post('/login', (req,res) => {

// })

//authorization middle-ware
const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}


app.post('/comment', (req, res) => {
    DB.comment(req.body.data, (result) => {
        res.send(result);
    });
});



app.post('/updatecomment',checkToken,(req,res) => {
   
    jwt.verify(req.token, key.secret, (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            //If token is successfully verified, we can send the autorized data 
            console.log('sensative data',authorizedData);
            console.log('SUCCESS: Connected to protected route');
        }
    })

})

app.listen(3000, function(){
    console.log('server is running 3000')
})
