require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const db = require("../../db/db_interactions");

router.get("/api/map", (req, res) => {
  console.log("Hello");
  let categories = "";
  if (req.query.categories) {
    categories =
      req.query.categories !== "" ? req.query.categories.split("/") : "";
  }

  console.log(db.map);

  db.map
    .getPostCoordinates(categories)
    .then(rows => {
      let count = 0;
      let posts = [];

      const formatPost = function() {
        if (count < rows.length) {
          posts[count] = {
            postId: rows[count].id,
            lat: rows[count].lat,
            lng: rows[count].lng
          };
          db.helpers
            .getCategoryName(rows[count].categoryId)
            .then(categoryName => {
              posts[count].category = categoryName.toLowerCase();
              count++;
              formatPost();
            });
        } else {
          res.send(posts);
        }
      };
      formatPost();
    })
    .catch(err => res.send(err));
});

module.exports = router;
