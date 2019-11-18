require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const axios = require("axios");
const db = require("../../db/db_interactions");

router.post("/api/modifyFavorite", (req, res) => {
  const userId = req.body.userId;
  const postId = req.body.postId;
  console.log("modifyFavorite route, userId = ", userId, "postId = ", postId);
  db.postStatus.modifyFavorite(userId, postId).then(value => {
    res.send(value);
  });
});

router.post("/api/modifyAmplifies", (req, res) => {
  const userId = req.body.userId;
  const postId = req.body.postId;
  console.log("modifyFavorite route, userId = ", userId, "postId = ", postId);
  db.postStatus.modifyAmplifies(userId, postId).then(value => {
    res.send(value);
  });
});

router.post("/api/markResolved", (req, res) => {
  const userId = req.body.userId;
  const postId = req.body.postId;
  console.log("markResolved route, userId = ", userId, "postId = ", postId);
  db.postStatus.markResolved(userId, postId).then(value => {
    res.send(value);
  });
});

router.post("/api/dispute", (req, res) => {
  const userId = req.body.userId;
  const postId = req.body.postId;
  console.log("dispute route, userId = ", userId, "postId = ", postId);
  db.postStatus.dispute(userId, postId).then(value => {
    res.send(value);
  });
});

module.exports = router;
