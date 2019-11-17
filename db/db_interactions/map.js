const connection = require("../db");

function getPostCoordinates(categories) {
  return new Promise((resolve, reject) => {
    let queryString = "SELECT id, categoryId, lat, lng FROM posts";
    let categoryClause = "";

    if (categories.length > 0) {
      let categoryOptions = "";
      for (let i = 0; i < categories.length; i++) {
        categoryOptions += "'" + categories[i] + "'";
        if (i < categories.length - 1) {
          categoryOptions += ", ";
        }
      }
      categoryClause =
        " WHERE categoryId IN (SELECT id FROM categories WHERE name IN (" +
        categoryOptions +
        ")) ";
    }

    queryString = queryString + categoryClause + ";";

    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { getPostCoordinates };
