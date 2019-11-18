const mysql = require('mysql');
const connection = require('../db');

const getCategories = function () {
    return new Promise((resolve, reject) => {
        connection.query("SELECT name FROM categories", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
}

module.exports = { getCategories }