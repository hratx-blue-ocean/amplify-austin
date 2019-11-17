require("dotenv").config({ path: "../.env" });
const router = require("express").Router();
const axios = require("axios");
const db = require("../../db/db_interactions");

router.get("/api/main", (req, res) => {
<<<<<<< HEAD
    const userId = req.query.userId;
    const selectBy = req.query.selectBy || null;
    const sortBy = req.query.sortBy || "popularity";
    let categories = "";
    if (req.query.categories) {
        categories = req.query.categories !== "" ? req.query.categories.split("/") : "";
    }


    db.mainFilters.getPosts(userId, selectBy, sortBy, categories)
        .then((rows) => {
            let count = 0;
            let posts = [];

            const formatPost = function () {
                if (count < rows.length) {

                    posts[count] = {
                        postId: rows[count].id,
                        headline: rows[count].headline,
                        created_at: rows[count].created_at,
                        upvotes: rows[count].upvotes,
                        status: rows[count].status,
                        resolved: rows[count].resolved,
                        otherFlag: rows[count].otherFlag,
                        eventDate: rows[count].eventDate,
                    }

                    db.helpers.getCanAmplify(rows[count].id, userId)
                        .then((bool) => {
                            posts[count].canAmplify = bool;
                            return db.helpers.getFavorited(rows[count].id, userId)
                        })
                        .then((bool) => {
                            posts[count].favorited = bool;
                            return db.helpers.getCategoryName(rows[count].categoryId)
                        })
                        .then((categoryName) => {
                            posts[count].categoryName = categoryName;
                            count++;
                            formatPost();
                        })
                } else {
                    res.send(posts);
                }
            }
            formatPost();
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
})

=======
  const userId = req.query.userId;
  console.log(req.query)
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

      const formatPost = function () {
        if (count < rows.length) {
          let currentRow = rows[count];
          posts[count] = {
            postId: currentRow.id,
            headline: currentRow.headline,
            created_at: currentRow.created_at,
            upvotes: currentRow.upvotes,
            status: currentRow.status,
            resolved: currentRow.resolved,
            otherFlag: currentRow.otherFlag,
            eventDate: currentRow.eventDate,
            lat: currentRow.lat,
            lng: currentRow.lng,
          };

          db.helpers
            .getCanAmplify(currentRow.id, userId)
            .then(bool => {
              posts[count].canAmplify = bool;
              return db.helpers.getFavorited(currentRow.id, userId);
            })
            .then(bool => {
              posts[count].favorited = bool;
              return db.helpers.getCategoryName(currentRow.categoryId);
            })
            .then(categoryName => {
              posts[count].categoryName = categoryName;
              count++;
              formatPost();
            });
        } else {
          res.send(posts);
        }
      };
      formatPost();
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});
>>>>>>> a9cab74d6256c9a8af6235d945bf59337f22a7d6

module.exports = router;
