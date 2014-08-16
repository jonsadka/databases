var mysql = require('mysql');
var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "mustard",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

exports.findAllMessages = function(cb){
  var queryString = 'SELECT messages.objectId, messages.roomname, ' +
                           'users.username, messages.text, ' +
                           'messages.createdat '+
                           'from messages INNER JOIN users ON (messages.userid = users.id)';

  dbConnection.query(queryString, function(err, rows, fields) {
    if(err) {
      console.log('FIND_MESSAGES ERROR: ', err)
    }
    cb(err, rows);
  });
};

exports.findUser = function(username, cb){
  var queryString = 'SELECT ' + username + ' from users';
  dbConnection.query(queryString, function(err, rows, fields) {
   if(err) {
      console.log('FIND_USER ERROR: ', err);
    }
    cb(err, rows);
  });
};


exports.saveUser = function(username, cb){
  var queryString = 'insert into users (username) values (' + username + ')';
  dbConnection.query(queryString, function(err, rows, fields) {
    if(err){
      console.log('SAVE_USER ERROR: ', err);
    }
    cb(err, rows);
  });
};

exports.saveMessage = function(message, userid, roomname, cb){
  //NOTE TO SELF: WE ARE PASSING IN 1 FOR ROOMNAME BUT IT SHOULD BE A UNIQUE NUMBER
  var queryString = 'insert into messages (userid, roomid, message) values (' + userid + ', ' + 1 + ', ' + message + ', ' + ')';
  dbConnection.query(queryString, function(err, rows, fields) {
    if(err){
      console.log('SAVE_MESSAGE ERROR: ', err);
    }
    cb(err, rows);
  });
};
