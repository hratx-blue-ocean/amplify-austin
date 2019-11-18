const connection = require('../db');

const checkOtherFlag = function (categoryName) {
    return new Promise((resolve, reject) => {
        connection.query("SELECT id FROM categories WHERE name = ?", [categoryName], (err, value) => {
            if (err) {
                reject(err);
            } else {
                if (value) {
                    resolve(null);
                } else {
                    resolve(categoryName);
                }
            }
        })
    })
}

const addPost = function (post) {
    return new Promise((resolve, reject) => {
        const categoryIdQuery = "(SELECT IFNULL(id, 3) FROM categories WHERE name = \'" + post.categoryName + "\')";
        const queryString1 = "INSERT INTO posts (categoryId, headline, description, created_at, lat, lng, address, upvotes, creatorId, status, disputed, resolved, otherFlag, eventDate) ";
        const queryString2 = "VALUES (" + categoryIdQuery + ", ?, ?, (NOW()), ?, ?, ?, 0, ?, 'open', 0, 0, ?, ?)";
        const queryString = queryString1 + queryString2;
        const options = [post.headline, post.description, post.lat, post.lng, post.address, post.creatorId, post.otherFlag, post.eventDate];
        connection.query(queryString, options, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }
        })
    })
}

const getPost = function (postId, userId) {
    return new Promise((resolve, reject) => {
        const queryString = "SELECT categoryId, headline, description, status, address, created_at, upvotes, otherFlag, eventDate, lat, lng FROM posts WHERE id = " + postId + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports = { checkOtherFlag, addPost, getPost };