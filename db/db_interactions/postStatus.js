const connection = require('../db');

const validateUserId = function (userId) {
    return new Promise((resolve, reject) => {
        const validUserId = "SELECT id FROM users WHERE id=" + userId + ";";
        connection.query(validUserId, (err, value) => {
            if (err) {
                reject(err);
            } else {
                if (value[0]) {
                    resolve('valid userId')
                } else {
                    resolve('invalid userId')
                }
            }
        })
    })
}

const validatePostId = function (postId) {
    return new Promise((resolve, reject) => {
        const validPostId = "SELECT id FROM posts WHERE id=" + postId + ";";
        connection.query(validPostId, (err, value) => {
            if (err) {
                reject(err);
            } else {
                if (value[0]) {
                    resolve('valid postId')
                } else {
                    resolve('invalid postId')
                }
            }
        })
    })
}

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
                    //test if valid userid
                    const validUserId = "SELECT id FROM users WHERE id=" + userId + ";";
                    connection.query(validUserId, (err, value) => {
                        if (err) {
                            reject(err);
                        } else {
                            if (value[0]) {
                                //test if valid postId
                                const validPostId = "SELECT id from posts WHERE id=" + postId + ";";
                                connection.query(validPostId, (err, value) => {
                                    if (err) {
                                        reject(err)
                                    } else if (value[0]) {
                                        const insertQuery = "INSERT INTO favorites (userId, postId) VALUES (" + userId + "," + postId + ");";
                                        connection.query(insertQuery, (err, value) => {
                                            if (err) {
                                                reject(err);
                                            } else {
                                                resolve(`postId ${postId} favorited`);
                                            }
                                        })
                                    } else {
                                        resolve('invalid postId')
                                    }
                                })
                            } else {
                                resolve('invalid userId')
                            }
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
                    //test if valid user
                    validateUserId(userId)
                        .then((value) => {
                            if (value === 'valid userId') {
                                //test if valid postId
                                validatePostId(postId)
                                    .then((value) => {
                                        console.log('value = ', value)
                                        if (value === 'valid postId') {
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
                                        else {
                                            resolve('invalid postId');
                                        }
                                    })
                            } else {
                                resolve('invalid userId');
                            }
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