require('dotenv').config({ path: '../.env' })
const router = require("express").Router();
const axios = require('axios');
const db = require("../../db/db");

//testing catchall /api route

router.get("/api", (req, res) => {
  res.send("connected to /api route")
})


router.post("/api/issue", (req, res) => {
  console.log(req.body);
  const postInfo = req.body;
  if (typeof postInfo.location === 'string') {
    var apiStr = postInfo.location.replace(/ /g, '+');
    apiStr = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + apiStr + "&key=" + process.env.REACT_APP_GOOGLEMAPSAPIKEY
    //make api get request for atlong
    console.log(apiStr);
    let lat;
    let lng;
    axios.get(apiStr)
      .then((result) => {
        lat = result.data.results[0].geometry.location.lat;
        lng = result.data.results[0].geometry.location.lng;
        console.log(lat);
        return db.checkOtherFlag(postInfo.categoryName)
      })
      .then((result) => {
        console.log("Now we're here!")
        const requestInput = {
          categoryName: postInfo.categoryName,
          creatorId: postInfo.creatorId,
          headline: postInfo.headline,
          description: postInfo.description,
          lat: lat,
          lng: lng,
          address: postInfo.location,
          otherFlag: result
        }
        return db.addPost(requestInput)
      })
      .then((result) => {
        console.log("RESULT: " + result);
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send(err)
      });
  }
})


//concat endpoint and location for url
//call api






module.exports = router;
