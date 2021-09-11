CREATE DATABASE nodejscrud;

CREATE TABLE users(
id int AUTO_INCREMENT PRIMARY KEY,
name varchar(100),
email varchar(100) UNIQUE,
phone varchar(20),
address varchar(100)
);
