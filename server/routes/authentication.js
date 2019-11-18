require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const axios = require("axios");
const db = require("../../db/db_interactions");

router.post("/api/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("signup route", username);
  try {
    const value = await db.authentication.addUser(username, password)
    res.send(value);
  } catch (error) {
    console.error(error)
    res.status(500).send("There was an error on the server and the request could not be completed.");
  }
});

router.post("/api/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("login route");
  try {
    const value = await db.authentication.login(username, password)
    console.log(typeof value)
    res.send(value);
  } catch (error) {
    console.error(error)
    res.status(500).send("There was an error on the server and the request could not be completed.");
  }
});

module.exports = router;
