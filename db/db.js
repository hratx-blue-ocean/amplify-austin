const mysql = require('mysql');
require('dotenv').config({ path: '/Users/jamesjamail/Documents/WebDev/HackReactor/blue512/.env' })


var connection = mysql.createConnection({
    host: 'amplify-austin.c5fwuaaunyd0.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: process.env.REACT_APP_DB_PASSWORD,
    database: 'amplify_austin'
});

connection.connect((res) => console.log("connected to db, ", res));

connection.query('SHOW TABLES;', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.end();

module.exports = connection;
