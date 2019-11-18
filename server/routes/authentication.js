require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const axios = require("axios");
const db = require("../../db/db_interactions");

router.post("/api/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("signup route", username, password);
  db.authentication.addUser(username, password).then(value => {
    res.send(value);
  });
});

router.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("login route");
  db.authentication.login(username, password).then(value => {
    res.send(value);
  });
});

module.exports = router;
