var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejscrud',
});

connection.connect((error) => {
    if (!!error) {
        console.log('database connection error');
    } else {
        console.log('database connected thank you!');
    }

});


module.exports = connection;
