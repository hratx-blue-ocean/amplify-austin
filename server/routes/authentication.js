require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const axios = require("axios");
const db = require("../../db/db_interactions");

router.post("/api/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const value = await db.authentication.addUser(username, password);
    res.send(value);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "There was an error on the server and the request could not be completed."
      );
  }
});

router.post("/api/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const value = await db.authentication.login(username, password);
    res.send(value);
  } catch (error) {
    console.error(error);
    if (error.message === "422") {
      res
        .status(422)
        .send({
          message: "Invalid username or password."
        });
    } else {
      res
        .status(500)
        .send({
          message: "There was an error on the server and the request could not be completed."
        });
    }
  }
});

module.exports = router;
