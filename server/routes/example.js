require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const axios = require("axios");

//testing catchall /api route

router.get("/api", (req, res) => {
  console.log("anything", req);
  res.send("connected to /api route");
});

// router.post("/api/issue", (req, res) => {
//   const postInfo = req.body;
//   //are we missing long-lag?
//   if (typeof postInfo.location === 'string') {
//     //if missing long-lat, replace address spaces with plus signs and add api key
//     var apiStr = postInfo.location.replace(' ', '+');
//     apiStr += apiStr + process.env.REACT_APP_GOOGLEMAPSAPIKEY
//     //make api get request for atlong
//     axios.get(apiStr)
//       .then((result) => {
//         console.log(result)
//         console.log(result[0].geometry.location)
//         //deconstruct lag & long
//         //make insert query
//         //return postId in body
//       })
//   }
// })

//concat endpoint and location for url
//call api

module.exports = router;
