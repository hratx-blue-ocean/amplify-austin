require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const db = require("../../db/db_interactions");

router.get("/api/main", (req, res) => {
  const userId = req.query.userId;
  const selectBy = req.query.selectBy || null;
  const sortBy = req.query.sortBy || "popularity";
  let categories = "";
  if (req.query.categories) {
    categories =
      req.query.categories !== "" ? req.query.categories.split("/") : "";
  }

  db.mainFilters
    .getPosts(userId, selectBy, sortBy, categories)
    .then(rows => {
      let count = 0;
      let posts = [];

      const formatPost = function() {
        if (count < rows.length) {
          let currentRow = rows[count];
          posts[count] = {
            postId: currentRow.id,
            categoryName: currentRow.name,
            headline: currentRow.headline,
            created_at: currentRow.created_at,
            upvotes: currentRow.upvotes,
            status: currentRow.status,
            resolved: currentRow.resolved,
            otherFlag: currentRow.otherFlag,
            eventDate: currentRow.eventDate,
            canAmplify: !currentRow.promoteId,
            favorited: !!currentRow.favoritesId,
            address: currentRow.address,
            lat: currentRow.lat,
            lng: currentRow.lng
          };

          if (posts[count].categoryName === "Events") {
            posts[count].type = "event";
          } else {
            posts[count].type = "issue";
          }
          count++;
          formatPost();
        } else {
          res.send(posts);
        }
      };
      formatPost();
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
