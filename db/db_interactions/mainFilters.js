const connection = require('../db');

const getPosts = function (userId, selectBy, sortBy, categories) {
    return new Promise((resolve, reject) => {
        let queryString = "SELECT id, headline, categoryId, created_at, eventDate, upvotes, address, status, otherFlag FROM posts "
        let categoryClause = "";
        let orderByClause = "";
        let selectByClause = "";
        let whereClauseCounter = 0;

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
            selectByClause = "id IN (SELECT postId FROM favorites WHERE userId = " + userId + ") ";
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

const getCanAmplify = function (postId, userId) {
    return new Promise((resolve, reject) => {
        const queryString = "SELECT * FROM promotes WHERE postId = " + postId + " AND userId = " + userId + ";";
        connection.query(queryString, (err, value) => {
            if (err) {
                reject(err);
            } else {
                if (value.length === 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        })
    })
}

const getFavorited = function (postId, userId) {
    return new Promise((resolve, reject) => {
        const queryString = "SELECT * FROM favorites WHERE postId = " + postId + " AND userId = " + userId + ";";
        connection.query(queryString, (err, value) => {
            if (err) {
                reject(err);
            } else {
                if (value.length === 0) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            }
        })
    })
}

const getCategoryName = function (categoryId) {
    return new Promise((resolve, reject) => {
        const queryString = "SELECT name FROM categories WHERE id = " + categoryId;
        connection.query(queryString, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value[0].name);
            }
        })
    })
}

module.exports = { getPosts, getCanAmplify, getFavorited, getCategoryName };