const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const key = require('../key')
const connection = mysql.createConnection({
  host: "db4free.net",
  user: "webscrapper2",
  password: "RootRoot",
  database: "webscrapper2"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

const DB = {
  //save new user to database;
  save: (data, callback) => {
    let query = `insert into users (username , password) values('${data.username}','${data.password}')`;

    connection.query(query, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log('results', results)
        // let token = jwt.sign(data.username,key.secret, { expiresIn: '1h' });
        let token = jwt.sign({ username: data.username },
          key.secret,
          {
            expiresIn: '24h' // expires in 24 hours
          }
        );
        callback(token)

      }
    })
  },

  //check if the new user is already exist 
  userExists: (data, callback) => {
    let query = `select * from users where username='${data.username}'`
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log('is user exist in the database', results);
        callback(results);
      }
    })
  },

  //login for the user if his username and password are correct
  loginUser: (user,callback) =>{
    let query = `select * from users where username='${user.username}' and password ='${user.password}'`
    connection.query(query, (err,results) => {
      if(err) {
        console.log(err)
        callback(err,null)
        return
      }else {
        callback(null,results);
      }
    })
  },

  saveNews: (news, callback) => {

    for (let data of news) {
      let query = `insert into news (newstext, author, title, description, url) values("${data.content}","${data.author}","${data.title}",
    "${data.description}","${data.url}")`;
      connection.query(query, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log('saved to database');
        }
      })
    }

  },

  //get all news in the database and users and comments
  allNews: (callback) => {
    //SELECT news.newstext, comments.comment, users.username from news INNER JOIN comments on comments.news_id=news.id INNER JOIN users on users.id = comments.user_id
    let query = `select news.newstext, comments.comment, users.username from news inner join comments on comments.news_id = news.id inner join users on users.id=comments.user_id`
    connection.query(query, (err, results) => {
      if(err) {
        console.log(err);
      }else {
        console.log('>><<<<',results)
        callback(results)
      }
    });
  },

  //save comments to database
  comment: (data, callback) => {
    let query = `insert into comments (comment, user_id, news_id) values ('${data.comment}', '${data.user_id}', '${data.news_id}')`
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log("comment saved to database")
        callback('news is commented');
      }
    })
  },

  //update comments 

  editComment: (data, callback) => {
    let query = `update comments set comment= '${data.comment}' where id = '${data.id}'`;
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log('the comment is updated successfuly');
        callback('you successfuly edited your comment')
      }
    })
  },

  //delete comment 
  deleteComment: (data, callback) => {
    let query = `delete from comments where id='${data.id}'`;
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log('successfuly deleted from the database');
      }
    })
  }

}
module.exports = DB;

//SELECT news.newstext, comments.comment, users.username from news INNER JOIN comments on comments.news_id=news.id INNER JOIN users on users.id = comments.user_id
