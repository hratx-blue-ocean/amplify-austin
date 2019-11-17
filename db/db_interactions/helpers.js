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

const getCanAmplify = function (postId, userId) {
    return new Promise((resolve, reject) => {
        if (!userId) {
            resolve(false);
        }
        const queryString = "SELECT * FROM promotes WHERE postId = " + postId + " AND userId = " + userId + ";";
        connection.query(queryString, (err, value) => {
            if (err) {
                reject(err);
            } else {
                if (value.length === 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        })
    })
}

const getFavorited = function (postId, userId) {
    return new Promise((resolve, reject) => {
        if (!userId) {
            resolve(false);
        }
        const queryString = "SELECT * FROM favorites WHERE postId = " + postId + " AND userId = " + userId + ";";
        connection.query(queryString, (err, value) => {
            if (err) {
                reject(err);
            } else {
                if (value.length === 0) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            }
        })
    })
}

const getCategoryName = function (categoryId) {
    return new Promise((resolve, reject) => {
        const queryString = "SELECT name FROM categories WHERE id = " + categoryId;
        connection.query(queryString, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value[0].name);
            }
        })
    })
}


const getContacts = function (categoryId) {
    return new Promise((resolve, reject) => {
        const queryString = "SELECT * FROM contacts WHERE id IN (SELECT contactId FROM categoryContacts WHERE categoryId = ?)"
        const options = [categoryId];
        connection.query(queryString, options, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
}
module.exports = { getRow, deleteRow, getCanAmplify, getFavorited, getCategoryName, getContacts }
