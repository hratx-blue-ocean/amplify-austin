const connection = require('../db');

const getPosts = function (userId, selectBy, sortBy, categories) {
    return new Promise((resolve, reject) => {

        let queryString = "SELECT posts.id, headline, categoryId, created_at, eventDate, upvotes, address, status, otherFlag, lat, lng, address, categories.name"

        if (userId) {
            queryString += ", promotes.id AS promoteId, favorites.id AS favoritesId";
        }
        queryString += " FROM posts ";

        let categoryClause = "";
        let orderByClause = "";
        let selectByClause = "";
        let whereClauseCounter = 0;

        const queryString2 = "LEFT JOIN categories ON categoryId = categories.id "
        let queryString3 = "";
        let queryString4 = "";

        if (userId) {
            queryString3 = "LEFT JOIN promotes ON posts.id = promotes.postId AND promotes.userId = " + userId + " ";
            queryString4 = "LEFT JOIN favorites ON posts.id = favorites.postId AND favorites.userId = " + userId + " ";
        }

        queryString = queryString + queryString2 + queryString3 + queryString4;

        if (categories.length > 0) {
            let categoryOptions = "";
            for (let i = 0; i < categories.length; i++) {
                categoryOptions += "\'" + categories[i] + "\'";
                if (i < categories.length - 1) {
                    categoryOptions += ", ";
                }
            }
            categoryClause = "categoryId IN (SELECT id FROM categories WHERE name IN (" + categoryOptions + ")) ";
            whereClauseCounter++;
        }

        if (selectBy === "myPosts") {
            selectByClause = "creatorId = " + userId + " ";
            whereClauseCounter++;
        } else if (selectBy === "favorites") {
            selectByClause = "posts.id IN (SELECT postId FROM favorites WHERE userId = " + userId + ") ";
            whereClauseCounter++;
        }

        if (sortBy === "date") {
            orderByClause = "ORDER BY created_at DESC";
        } else {
            orderByClause = "ORDER BY upvotes DESC";
        }

        if (whereClauseCounter > 0) {
            queryString += "WHERE ";
        }

        queryString += categoryClause;

        if (whereClauseCounter === 2) {
            queryString += "AND ";
        }

        queryString += selectByClause + orderByClause + ";";

        connection.query(queryString, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }
        })
    })
}

module.exports = { getPosts };