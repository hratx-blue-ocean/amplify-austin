const connection = require('../db');

const addUser = function (username, password) {
    return new Promise((resolve, reject) => {
        const testQuery = "SELECT id FROM users WHERE username =" + username + ";";
        //test if username already exists
        connection.query(testQuery, (err, value) => {
            if (err) {
                reject(err);
            } else {
                if (value[0]) {
                    //if the user already exists, log it and resolve
                    console.log('username already exists')
                    resolve('username already taken')
                } else {
                    //otherwise insert username and password
                    console.log('value = ', value[0])
                    const insertQuery = "INSERT INTO users (username, password) VALUES (" + username + "," + password + ");";
                    connection.query(insertQuery, (err, value) => {
                        if (err) {
                            reject(err);
                        } else {
                            //send back userId
                            connection.query(testQuery, (err, value) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(value[0]);
                                }
                            })
                        }
                    })
                }
            }
        })
    })
}

const login = function (username, password) {
    return new Promise((resolve, reject) => {
        const testQuery = "SELECT id FROM users WHERE username=" + username + " AND password=" + password + ";";
        //test if username and password match
        connection.query(testQuery, (err, value) => {
            if (err) {
                reject(err);
            } else {
                //resolve/reject results
                if (value[0]) {
                    //successful login, send back userId
                    resolve(value[0])
                } else {
                    //unsuccessful login, send back explanation
                    resolve('login failed')
                }
            }
        })
    })
}

module.exports = { addUser, login };