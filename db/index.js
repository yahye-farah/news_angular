var mysql = require("mysql");

var connection = mysql.createConnection({
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

var save = (data) => {
    let query = `insert into users (username , password) values('${data.username}','${data.password}')`;

    connection.query(query , (err,results) => {
        if(err) {
            console.log(err)
        }else {
            console.log('saved to database')
        }
    })
}

module.exports.save = save;