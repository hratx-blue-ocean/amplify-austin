require('dotenv').config({ path: '../.env' })
const router = require("express").Router();
const axios = require('axios');
const db = require("../../db/db_interactions");


module.exports = router;
