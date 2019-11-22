const connection = require('../db');
const helpers = require('./helpers');

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
        let queryString = "SELECT categoryId, headline, description, status, resolved, disputed, resolves.id AS resolvesId, disputes.id AS disputesId, address, created_at, upvotes, otherFlag, eventDate, lat, lng, ";
        queryString += "categories.name AS categoryName, contacts.phoneNumber AS phoneNumber, contacts.email AS email, contacts.name AS name, contacts.department AS department, contacts.position AS position";

        if (userId) {
            queryString += ", favorites.id AS favoritesId, promotes.id AS promotesId"
        }

        queryString += " FROM posts ";
        queryString += "LEFT JOIN categories ON posts.categoryId = categories.id ";
        queryString += "LEFT JOIN contacts ON contacts.id = (SELECT contactId FROM categories WHERE id = posts.categoryId) ";

        if (userId) {
            queryString = queryString + "LEFT JOIN favorites ON posts.id = favorites.postId AND favorites.userId = " + userId + " ";
            queryString = queryString + "LEFT JOIN promotes ON posts.id = promotes.postId AND promotes.userId = " + userId + " ";
            queryString = queryString + "LEFT JOIN resolves ON posts.id = resolves.postId AND resolves.userId = " + userId + " ";
            queryString = queryString + "LEFT JOIN disputes ON posts.id = disputes.postId AND disputes.userId = " + userId + " ";
        }

        queryString += "WHERE posts.id = " + postId + ";";

        connection.query(queryString, (err, result) => {
            if (err) {
                reject(err);
            } else {
                let myCount = null;
                let postData = result[0];
                let userMarked;
                if (result[0].status === 'open' || result[0].status === 'disputed') {
                    result[0].count = result[0].resolved;
                    if (result[0].resolvesId !== null) {
                        result[0].userMarked = true;
                    } else {
                        result[0].userMarked = false;
                    }

                } else if (result[0].status === 'resolved') {
                    result[0].count = result[0].disputed;
                    if (result[0].disputesId !== null) {
                        result[0].userMarked = true;
                    } else {
                        result[0].userMarked = false;
                    }
                }
                delete result[0].resolved;
                delete result[0].disputed;
                delete result[0].resolvesId;
                delete result[0].disputesId;
                resolve(result)
            }
        })
    })
}

module.exports = { checkOtherFlag, addPost, getPost };