const mysql = require('mysql');
const connection = require('../db');

const getRow = function (tableName, rowId) {
    return new Promise((resolve, reject) => {
        const queryString = "SELECT * FROM " + tableName + " WHERE id = " + rowId;
        connection.query(queryString, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }
        })
    })
}

const deleteRow = function (tableName, rowId) {
    return new Promise((resolve, reject) => {
        const queryString = "DELETE FROM " + tableName + " WHERE id = " + rowId;
        connection.query(queryString, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value)
            }
        })
    })
}

module.exports = { getRow, deleteRow }