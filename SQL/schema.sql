DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

-- DROP TABLE users;
CREATE TABLE users (
  id INT(7) AUTO_INCREMENT,
  username VARCHAR(10),
  primary key (id)
);

-- DROP TABLE messages;
CREATE TABLE messages (
  objectId INT(4) AUTO_INCREMENT,
  roomname VARCHAR(10),
  userid INT(7),
  text VARCHAR(1000),
  createdat VARCHAR(20),
  primary key (objectId)
);

ALTER TABLE messages ADD FOREIGN KEY (userid) REFERENCES users (id)
  ON UPDATE CASCADE
  ON DELETE CASCADE;

insert into users (username) values ('JoeLo');
insert into users (username) values ('JJ');

insert into messages (roomname, userid, text) values ('Lobby', 1, 'I love Jon super duper amount');
insert into messages (roomname, userid, text) values ('Lobby', 2, 'Jow is Awesome!');


/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/

