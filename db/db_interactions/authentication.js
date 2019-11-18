const connection = require('../db');
const util = require("util");

const query = util.promisify(connection.query.bind(connection));

const addUser = async (username, password) => {
  // test query for if username already exists
  const testQuery = "SELECT id FROM users WHERE username = ?";
  // actual insert query
  const insertQuery = "INSERT INTO users (username, password) VALUES (?,?)"
  try {
    const testValue = await query(testQuery, [username]);
    const value = await query(insertQuery, [username, password]);
    if (testValue[0]) {
      return "username already taken"
    }
    return [username, value.insertId];
  } catch (error) {
    // throw error if db connection fails, or bad SQL query
    throw new Error(500);
  }
}

const login = async (username, password) => {
  const lookupQuery = "SELECT id FROM users WHERE username = ? AND password= ?";
  try {
    const value = await query(lookupQuery, [username, password]);
    if (value[0]) {
      return value[0]
    } else {
      return "Invalid username or password"
    }
  } catch (error) {
    // throw error if db connection fails, or bad SQL query
    throw new Error(500);
  }
}

module.exports = { addUser, login };
