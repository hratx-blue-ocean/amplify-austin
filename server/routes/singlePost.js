require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const axios = require("axios");
const db = require("../../db/db_interactions");

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
        return db.singlePost.checkOtherFlag(postInfo.categoryName);
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
        return db.singlePost.addPost(requestInput);
      })
      .then(result => {
        res.send({ postId: result.insertId });
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
        return db.singlePost.checkOtherFlag(postInfo.categoryName);
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
        return db.singlePost.addPost(requestInput);
      })
      .then(result => {
        console.log("Here's the thing we posted: " + result.insertId);
        res.send({ insertId: result.insertId });
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  }
});

router.get("/api/issue", (req, res) => {
  let postId = req.query.postId;
  let userId = req.query.userId;

  db.singlePost
    .getPost(postId, userId)
    .then(row => {
      console.log('SERVER SIDE, row = ', row)
      let post = {
        headline: row[0].headline,
        categoryName: row[0].categoryName,
        description: row[0].description,
        status: row[0].status,
        count: row[0].count,
        userMarked: row[0].userMarked,
        address: row[0].address,
        created_at: row[0].created_at,
        amplifyCount: row[0].amplifyCount,
        otherFlag: row[0].otherFlag,
        eventDate: row[0].eventDate,
        isFavorited: !!row[0].favoritesId,
        canAmplify: !row[0].promotesId,
        contacts: [
          {
            phoneNumber: row[0].phoneNumber,
            email: row[0].email,
            name: row[0].name,
            department: row[0].department,
            position: row[0].position
          }
        ],
        lat: row[0].lat,
        lng: row[0].lng
      };

      res.send(post);
      // const categoryId = row[0].categoryId;
      // db.helpers
      //   .getCategoryName(categoryId)
      //   .then(categoryName => {
      //     console.log(categoryName);
      //     post.categoryName = categoryName;
      //     return db.helpers.getCanAmplify(postId, userId);
      //   })
      //   .then(bool => {
      //     post.canAmplify = bool;
      //     return db.helpers.getFavorited(postId, userId);
      //   })
      //   .then(bool => {
      //     post.isFavorited = bool;
      //     return db.helpers.getContacts(categoryId);
      //   })
      //   .then(contacts => {
      //     post.contacts = contacts;
      //     res.send(post);
      //   });
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

//concat endpoint and location for url
//call api

module.exports = router;
