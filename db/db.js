const mysql = require('mysql');
require('dotenv').config({ path: '../.env' })


var connection = mysql.createConnection({
    host: 'amplify-austin.c5fwuaaunyd0.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: process.env.REACT_APP_DB_PASSWORD,
    database: 'amplify_austin'
});

connection.connect((res) => console.log("connected to db, ", res));

// connection.query('SHOW TABLES;', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

const checkOtherFlag = function (categoryName) {
    return new Promise((resolve, reject) => {
        connection.query("SELECT id FROM categories WHERE name = ?", [categoryName], (err, value) => {
            if (err) {
                reject(err);
            } else {
                if (value) {
                    resolve(null);
                } else {
                    resolve(categoryName);
                }
            }
        })
    })
}

const addPost = function (post) {
    return new Promise((resolve, reject) => {
        const categoryIdQuery = "(SELECT IFNULL(id, 3) FROM categories WHERE name = \'" + post.categoryName + "\')";
        const queryString1 = "INSERT INTO posts (categoryId, headline, description, created_at, lat, lng, address, upvotes, creatorId, status, disputed, resolved, otherFlag, eventDate) ";
        const queryString2 = "VALUES (" + categoryIdQuery + ", ?, ?, (NOW()), ?, ?, ?, 0, ?, 'open', 0, 0, ?, ?)";
        const queryString = queryString1 + queryString2;
        const options = [post.headline, post.description, post.lat, post.lng, post.address, post.creatorId, post.otherFlag, post.eventDate];
        connection.query(queryString, options, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }
        })
    })
}

module.exports = { addPost, checkOtherFlag };
