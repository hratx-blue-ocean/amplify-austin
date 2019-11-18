const connection = require('../db');
const util = require("util");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const query = util.promisify(connection.query.bind(connection));

const addUser = async (username, password) => {
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)
  // test query for if username already exists
  const testQuery = "SELECT id FROM users WHERE username = ?";
  // actual insert query
  const insertQuery = "INSERT INTO users (username, password) VALUES (?,?)"
  try {
    const testValue = await query(testQuery, [username]);
    const value = await query(insertQuery, [username, hash]);
    if (testValue[0]) {
      throw new Error(422);
    }
    return [username, value.insertId];
  } catch (error) {
    handleError(error);
  }
}

const login = async (username, password) => {
  const lookupQuery = "SELECT id, password FROM users WHERE username = ?";
  try {
    const value = await query(lookupQuery, [username]);
    if (value[0]) {
      const hash = value[0].password;
      const isValid = await bcrypt.compare(password, hash);
      const user = { id: value[0].id }
      if (isValid) {
        return user
      }
    }
    // if all of the above dont pass, throw error 
    throw new Error(422);
  } catch (error) {
    // Invalid username or password
    if (error.message === "422") {
      throw error
    }
    // throw error if db connection fails, or bad SQL query
    throw new Error(500);
  }
}

<<<<<<< HEAD
const handleError = (error) => {
  if (error.message === "422") {
    throw error
  }
  // throw error if db connection fails, or bad SQL query
  throw new Error(500);
=======
const login = function (username, password) {
    return new Promise((resolve, reject) => {
        const testQuery = "SELECT id FROM users WHERE username=\'" + username + "\' AND password=\'" + password + "\';";
        //test if username and password match
        console.log(testQuery);
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
>>>>>>> e4b185b754eea3efabbf4b86c5e3baafca1c1f37
}

module.exports = { addUser, login };
