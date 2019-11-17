const connection = require('../db');

const modifyFavorite = function (userId, postId) {
    return new Promise((resolve, reject) => {
        const testQuery = "SELECT id FROM favorites WHERE userId = \'" + userId + "\' AND postId = " + postId + ";";
        //test if user has already favorited this post
        connection.query(testQuery, (err, value) => {
            if (err) {
                reject(err);
            } else {
                //if they already favorited, delete the row
                console.log('value = ', value[0])
                if (value[0]) {
                    const deleteQuery = "DELETE FROM favorites WHERE userId = " + userId + " AND postId = " + postId + ";";
                    connection.query(deleteQuery, (err, value) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(value);
                        }
                    })
                } else {
                    const insertQuery = "INSERT INTO favorites (userId, postId) VALUES (" + userId + "," + postId + ");";
                    connection.query(insertQuery, (err, value) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(value);
                        }
                    })
                }
            }
        })
    })
}

const modifyAmplifies = function (userId, postId) {
    return new Promise((resolve, reject) => {
        const testQuery = "SELECT id FROM promotes WHERE userId = " + userId + " AND postId = " + postId + ";";
        connection.query(testQuery, (err, value) => {
            if (err) {
                reject(err);
            } else {
                // console.log('value = ', value[0])
                if (value[0]) {
                    const query1 = "DELETE FROM promotes WHERE userId=" + userId + " AND postId=" + postId + ";";
                    const query2 = "UPDATE posts SET upvotes=upvotes-1 WHERE id=" + postId + ";";
                    connection.beginTransaction((err) => {
                        if (err) { throw err; }
                        connection.query(query1, (err, value) => {
                            if (err) {
                                connection.rollback(() => { throw err });
                            }
                            connection.query(query2, (err, value) => {
                                if (err) {
                                    connection.rollback(() => { throw err });
                                }
                            })
                            connection.commit((err) => {
                                if (err) {
                                    connection.rollback(() => { throw err })
                                }
                                console.log("upvote transaction success")
                            })
                        })
                    })
                } else {
                    const query1 = "INSERT INTO promotes (userId, postId) VALUES (" + userId + "," + postId + ");";
                    const query2 = "UPDATE posts SET upvotes=upvotes+1 WHERE id=" + postId + ";";
                    connection.beginTransaction((err) => {
                        if (err) { throw err; }
                        connection.query(query1, (err, value) => {
                            if (err) {
                                connection.rollback(() => { throw err });
                            }
                            connection.query(query2, (err, value) => {
                                if (err) {
                                    connection.rollback(() => { throw err });
                                }
                            })
                            connection.commit((err) => {
                                if (err) {
                                    connection.rollback(() => { throw err })
                                }
                                console.log("downvote transaction success")
                            })
                        })
                    })
                }
            }
        })
    })
}

const markResolved = function (userId, postId) {
    return new Promise((resolve, reject) => {
        const testQuery = "SELECT status FROM posts WHERE id = " + postId + ";";
        connection.query(testQuery, (err, value) => {
            if (err) {
                reject(err);
            } else {
                //if they already favorited, delete the row
                console.log('value = ', value[0])
                if (value[0].id !== 'resolved') {
                    const resolvedQuery = "UPDATE posts SET status='resolved' WHERE id=" + postId + ";";
                    connection.query(resolvedQuery, (err, value) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(value);
                        }
                    })
                }
            }
        })
    })
}

module.exports = { modifyFavorite, modifyAmplifies, markResolved };