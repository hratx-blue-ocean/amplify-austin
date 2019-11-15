CREATE TABLE users (
 id int PRIMARY KEY AUTO_INCREMENT,
 username varchar(255),
 salt varchar(255)
);
CREATE TABLE posts (
 id int PRIMARY KEY AUTO_INCREMENT,
 categoryId int,
 headline varchar(255),
 description varchar(255),
 created_at datetime,
 locationId int,
 upvotes int,
 creatorId int,
 status varchar(255),
 disputed int,
 resolved int,
 otherFlag varchar(255)
);
CREATE TABLE locations (
 id int PRIMARY KEY AUTO_INCREMENT,
 latitude float,
 longitude float,
 address varchar(255),
 zipCode varchar(255)
);
CREATE TABLE categories (
 id int PRIMARY KEY AUTO_INCREMENT,
 name varchar(255)
);
CREATE TABLE contacts (
 id int PRIMARY KEY AUTO_INCREMENT,
 phoneNumber varchar(255),
 email varchar(255),
 name varchar(255),
 department varchar(255)
);
CREATE TABLE comments (
 id int PRIMARY KEY AUTO_INCREMENT,
 userId int,
 postId int,
 text text,
 createdAt datetime
);
CREATE TABLE favorites (
 id int PRIMARY KEY AUTO_INCREMENT,
 userId int,
 postId int
);
CREATE TABLE promotes (
 id int PRIMARY KEY AUTO_INCREMENT,
 userId int,
 postId int
);
CREATE TABLE resolves (
 id int PRIMARY KEY AUTO_INCREMENT,
 userId int,
 postId int
);
CREATE TABLE categoryContacts (
 id int PRIMARY KEY AUTO_INCREMENT,
 categoryId int,
 contactId int
);
ALTER TABLE posts ADD FOREIGN KEY (categoryId) REFERENCES categories (id);
ALTER TABLE posts ADD FOREIGN KEY (locationId) REFERENCES locations (id);
ALTER TABLE posts ADD FOREIGN KEY (creatorId) REFERENCES users (id);
ALTER TABLE comments ADD FOREIGN KEY (userId) REFERENCES users (id);
ALTER TABLE comments ADD FOREIGN KEY (postId) REFERENCES posts (id);
ALTER TABLE favorites ADD FOREIGN KEY (userId) REFERENCES users (id);
ALTER TABLE favorites ADD FOREIGN KEY (postId) REFERENCES posts (id);
ALTER TABLE promotes ADD FOREIGN KEY (userId) REFERENCES users (id);
ALTER TABLE promotes ADD FOREIGN KEY (postId) REFERENCES posts (id);
ALTER TABLE resolves ADD FOREIGN KEY (userId) REFERENCES users (id);
ALTER TABLE resolves ADD FOREIGN KEY (postId) REFERENCES posts (id);
ALTER TABLE categoryContacts ADD FOREIGN KEY (categoryId) REFERENCES categories (id);
ALTER TABLE categoryContacts ADD FOREIGN KEY (contactId) REFERENCES contacts (id);




Message Austin Taylor


Downloads


