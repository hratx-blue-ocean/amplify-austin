const router = require("express").Router();
const db = require("../../db/db_interactions");

router.get("/api/categories", (req, res) => {
  db.categoryList
    .getCategories()
    .then(results => {
      console.log(results);
      let output = [];
      for (let i = 0; i < results.length; i++) {
        output.push(results[i].name);
      }
      res.send(output);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
