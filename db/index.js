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
  // allNews: (callback) => {
  //   let allnews = [];
  //   let query = `select * from news`
  //   connection.query(query, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('yyyyy', results)
  //       for (let result of results) {
  //         let obj = {};
  //         obj['news'] = result;

  //         let query = `select * from comments where news_id='${result.id}'`
  //         connection.query(query, (err, comments) => {
  //           if (err) {
  //             console.log(err);
  //           } else {
  //             console.log('comments', comments)
  //             obj['comments'] = comments;
  //             result['comments'] = comments;
  //             if (comments.length > 0) {
  //               // console.log('shurrud',comments[0]['user_id'])
  //               let query = `select username from users where id ='${comments[0].user_id}'`
  //               connection.query(query, (err, user) => {
  //                 if (err) {
  //                   console.log(err)
  //                 } else {
  //                   // console.log('username',user[0]['username'])
  //                   result['username'] = user[0]['username'];
  //                   obj['username'] = user[0]['username'];
  //                   console.log('obbbb', obj)
  //                   allnews.push(obj);
  //                   callback(allnews)
  //                 }
  //               })
  //             }
  //           }
  //         })

  //       }
  //     }
      
  //   })
  // },
  allNews:(callback) => {
    let query = `select `
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
