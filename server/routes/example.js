require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const axios = require("axios");
const db = require("../../db/db");

//testing catchall /api route

router.get("/api", (req, res) => {
  res.send("connected to /api route");
});

router.post("/api/issue", (req, res) => {
  const postInfo = req.body;
  if (typeof postInfo.location === "string") {
    var apiStr = postInfo.location.replace(/ /g, "+");
    apiStr =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      apiStr +
      "&key=" +
      process.env.REACT_APP_GOOGLEMAPSAPIKEY;
    //make api get request for atlong
    let lat;
    let lng;
    axios
      .get(apiStr)
      .then(result => {
        lat = result.data.results[0].geometry.location.lat;
        lng = result.data.results[0].geometry.location.lng;
        return db.checkOtherFlag(postInfo.categoryName);
      })
      .then(result => {
        const requestInput = {
          categoryName: postInfo.categoryName,
          creatorId: postInfo.creatorId,
          headline: postInfo.headline,
          description: postInfo.description,
          lat: lat,
          lng: lng,
          address: postInfo.location,
          otherFlag: result
        };
        return db.addPost(requestInput);
      })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    let lat = postInfo.lat;
    let lng = postInfo.lng;
    let apiStr = lat + "," + lng;
    apiStr =
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      apiStr +
      "&key=" +
      process.env.REACT_APP_MAP_API_KEY;
    //make api get request for atlong
    let address;
    axios
      .get(apiStr)
      .then(result => {
        address = result.data.results[0].formatted_address;
        return db.checkOtherFlag(postInfo.categoryName);
      })
      .then(result => {
        const requestInput = {
          categoryName: postInfo.categoryName,
          creatorId: postInfo.creatorId,
          headline: postInfo.headline,
          description: postInfo.description,
          lat: lat,
          lng: lng,
          address: address,
          otherFlag: result
        };
        return db.addPost(requestInput);
      })
      .then(result => {
        res.send({ insertId: result.insertId });
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  }
});

//concat endpoint and location for url
//call api

module.exports = router;
