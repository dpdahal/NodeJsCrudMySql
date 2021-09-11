# NodeJs With Mysql Crud
1. Install Nodejs
2. Install express framework
3. Create Project Using this command:
    - express --view=ejs yourProjectNameHare
4. Install requirements related package inside your project
    - npm install express-flash --save
    - npm install express-session --save
    - npm install express-validator --save 
      - if not working express validator then update
    - npm install method-override --save
    - npm install mysql --save
5. Create Database and table like:
   - CREATE DATABASE nodejscrud;
   - CREATE TABLE users(
     id int AUTO_INCREMENT PRIMARY KEY,
     name varchar(100),
     email varchar(100) UNIQUE,
     phone varchar(20),
     address varchar(100)
     );

