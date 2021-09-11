var express = require('express');
var router = express.Router();
var connection = require('../lib/connection');


/* GET home page. */
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM users";
    connection.query(sql, (err, users, fields) => {
        if (err) throw  err;
        res.render('index', {title: 'Mysql CRUD', users: users});
    })


});

router.get('/delete/:userId?', (req, res) => {
    var id = req.params.userId;
    var sql = `DELETE FROM users WHERE id='${id}'`;
    connection.query(sql, (err) => {
        if (err) throw  err;
        req.flash('success', 'Data was inserted');
        res.redirect('/');
    })

})


router.post('/', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    let insertQuery = `INSERT INTO users(name,email,phone,address)
               VALUES('${name}','${email}','${phone}','${address}')`;

    connection.query(insertQuery, (err, rows, fields) => {
        if (err) throw  err;
        req.flash('success', 'Data was inserted');
        res.redirect('/');

    })

});

router.get('/edit/:userId?', (req, res, next) => {
    var id = req.params.userId;
    var selectSql = `SELECT * FROM users WHERE id='${id}'`;
    connection.query(selectSql, (err, users, fields) => {
        var oneUser = users[0];
        if (err) throw  err;
        res.render('edit', {title: 'Mysql CRUD', users: oneUser});
    })

});


router.post('/edit/:userId?', (req, res, next) => {
    var id = req.params.userId;
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    var updateQuery = `UPDATE users SET 
            name='${name}',email='${email}',phone='${phone}',address='${address}' WHERE id='${id}'`;
    connection.query(updateQuery, (err) => {
        if (err) throw  err;
        req.flash('success', 'data was updated');
        res.redirect('/');
    });

});


module.exports = router;
