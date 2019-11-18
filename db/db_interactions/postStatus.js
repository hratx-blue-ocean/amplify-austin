const connection = require('../db');


//todo: modifyFavorite should not time out for invalid post/user id's
const modifyFavorite = function (userId, postId) {
    return new Promise((resolve, reject) => {
        const testQuery = "SELECT id FROM favorites WHERE userId = " + userId + " AND postId = " + postId + ";";
        //test if user has already favorited this post
        connection.query(testQuery, (err, value) => {
            if (err) {
                reject(err);
            } else {
                //if they already favorited, delete the row
                console.log(value[0])
                if (value[0]) {
                    const deleteQuery = "DELETE FROM favorites WHERE userId = " + userId + " AND postId = " + postId + ";";
                    connection.query(deleteQuery, (err, value) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(`postId ${postId} unfavorited`);
                        }
                    })
                } else {
                    const insertQuery = "INSERT INTO favorites (userId, postId) VALUES (" + userId + "," + postId + ");";
                    connection.query(insertQuery, (err, value) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(`postId ${postId} favorited`);
                        }
                    })
                }
            }
        })
    })
}

//todo: modifyAmplifies should not time out for invalid post/user id's
const modifyAmplifies = function (userId, postId) {
    return new Promise((resolve, reject) => {
        const testQuery = "SELECT id FROM promotes WHERE userId = " + userId + " AND postId = " + postId + ";";
        connection.query(testQuery, (err, value) => {
            if (err) {
                reject(err);
            } else {
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
                                } else {
                                    resolve(`post ${postId} demoted`)
                                }
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
                                } else {
                                    resolve(`post ${postId} promoted`)
                                }
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
                if (value[0]) {
                    const resolvedQuery = "UPDATE posts SET status='resolved' WHERE id=" + postId + ";";
                    connection.query(resolvedQuery, (err, value) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(`post ${postId} marked resolved`);
                        }
                    })
                } else {
                    resolve(`post ${postId} does not exist`)
                }
            }
        })
    })
}

const dispute = function (userId, postId) {
    return new Promise((resolve, reject) => {
        //find post status
        const testQuery = "SELECT status FROM posts WHERE id = " + postId + ";";
        connection.query(testQuery, (err, value) => {
            if (err) {
                reject(err);
            } else {
                //if postId valid, make disputed
                if (value[0]) {
                    const disputedQuery = "UPDATE posts SET status='disputed' WHERE id=" + postId + ";";
                    connection.query(disputedQuery, (err, value) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(`postId ${postId} marked disputed`);
                        }
                    })
                }
                else {
                    resolve(`post ${postId} does not exist`)
                }
            }
        })
    })
}

module.exports = { modifyFavorite, modifyAmplifies, markResolved, dispute };