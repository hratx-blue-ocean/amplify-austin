const connection = require('../db');
const helpers = require('./helpers');

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
                    validateUserId(userId)
                        .then((value) => {
                            if (value === 'valid userId') {
                                validatePostId(postId)
                                    .then((value) => {
                                        if (value === 'valid postId') {
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
        //test userId & postId are valid
        validateUserId(userId)
            .then((value) => {
                if (value === 'invalid userId') {
                    resolve(value);
                } else {
                    return validatePostId(postId)
                }
            })
            .then((value) => {
                if (value === 'invalid postId') {
                    resolve(value);
                } else {
                    //get post details
                    helpers.getRow('posts', postId)
                        .then((value) => {
                            const status = value[0].status;
                            const resolved = value[0].resolved;
                            const creatorId = value[0].creatorId;

                            //test that user has not already marked resolved
                            const query = `SELECT id FROM resolves WHERE userId=${userId} AND postId=${postId};`;
                            helpers.promisedQuery(query)
                                .then((value) => {
                                    //user has already marked a post resolved, do nothing but return status
                                    if (value.length > 0) {
                                        resolve(status)
                                        const queryString = `DELETE FROM resolves WHERE userId = ${userId} AND postId = ${postId}`;
                                        //MAKE A QUERY TO DELETE THE RESOLVE TO ALLOW A USER TO UNDO THEIR RESOLVE

                                        //user has not already marked a post resolved, rest of logic...
                                    } else {
                                        //if not already resolved
                                        if (status !== 'resolved') {
                                            //if user is the post creator OR adding one more resolved would make more than 2 resolveds
                                            if (creatorId == userId || resolved >= 2) {
                                                //mark resolved
                                                helpers.modifyEntry('posts', 'status', "'resolved'", 'id', postId)
                                                    //reset resolved count
                                                    .then((value) => {
                                                        return helpers.modifyEntry('posts', 'resolved', 0, 'id', postId)
                                                    })
                                                    //reset resolve join table for specefic postId
                                                    .then((value) => {
                                                        const resetResolveTbl = `DELETE FROM resolves WHERE postId= ${postId};`;
                                                        return helpers.promisedQuery(resetResolveTbl);
                                                    })
                                                    .then((value) => {
                                                        //get status
                                                        return helpers.selectVal('posts', 'status', 'id', postId, 'status')
                                                    })
                                                    .then((value) => {
                                                        //resolve status
                                                        resolve(value)
                                                    })
                                            } else {
                                                //status wont change, but resolved count needs to be updated & joint table updated
                                                helpers.modifyEntry('posts', 'resolved', resolved + 1, 'id', postId)
                                                    .then((value) => {
                                                        const insertResolveTbl = `INSERT INTO resolves (userId, postId) VALUES (${userId}, ${postId});`;
                                                        return helpers.promisedQuery(insertResolveTbl);
                                                    })
                                                    .then((value) => {
                                                        //resolve status
                                                        return helpers.selectVal('posts', 'status', 'id', postId, 'status')
                                                    })
                                                    .then((value) => {
                                                        //resolve status
                                                        resolve(value)
                                                    })
                                            }
                                        } else {
                                            resolve(status);
                                        }
                                    }
                                })
                        })
                        .catch((err) => {
                            if (err) {
                                reject(err);
                            }
                        })
                }
            })
    })
}

const dispute = function (userId, postId) {
    return new Promise((resolve, reject) => {
        //test userId & postId are valid
        validateUserId(userId)
            .then((value) => {
                if (value === 'invalid userId') {
                    resolve(value);
                } else {
                    return validatePostId(postId)
                }
            })
            .then((value) => {
                if (value === 'invalid postId') {
                    resolve(value);
                } else {
                    //get post details
                    helpers.getRow('posts', postId)
                        .then((value) => {
                            const status = value[0].status;
                            const disputed = value[0].disputed;

                            //test that user has not already marked disputed
                            const query = `SELECT id FROM disputes WHERE userId=${userId} AND postId=${postId};`;
                            helpers.promisedQuery(query)
                                .then((value) => {
                                    //user has already marked a post disputed, do nothing but return status
                                    if (value.length > 0) {
                                        resolve(status)
                                        //user has not already marked a post disputed, rest of logic...
                                    } else {
                                        //if not already disputed
                                        if (status === 'resolved') {
                                            //if adding one more dispute would make more than 2 disputes
                                            if (disputed >= 2) {
                                                //mark disputed
                                                helpers.modifyEntry('posts', 'status', "'disputed'", 'id', postId)
                                                    //reset disputed count
                                                    .then((value) => {
                                                        return helpers.modifyEntry('posts', 'disputed', 0, 'id', postId)
                                                    })
                                                    //reset disputes join table for specefic postId
                                                    .then((value) => {
                                                        const resetDisputesTbl = `DELETE FROM disputes WHERE postId= ${postId};`;
                                                        return helpers.promisedQuery(resetDisputesTbl);
                                                    })
                                                    .then((value) => {
                                                        //get status
                                                        return helpers.selectVal('posts', 'status', 'id', postId, 'status')
                                                    })
                                                    .then((value) => {
                                                        //resolve status
                                                        resolve(value)
                                                    })
                                            } else {
                                                //status wont change, but dispute count needs to be updated & join table updated
                                                helpers.modifyEntry('posts', 'disputed', disputed + 1, 'id', postId)
                                                    .then((value) => {
                                                        const insertDisputesTbl = `INSERT INTO disputes (userId, postId) VALUES (${userId}, ${postId});`;
                                                        return helpers.promisedQuery(insertDisputesTbl);
                                                    })
                                                    .then((value) => {
                                                        //resolve status
                                                        return helpers.selectVal('posts', 'status', 'id', postId, 'status')
                                                    })
                                                    .then((value) => {
                                                        //resolve status
                                                        resolve(value)
                                                    })
                                            }
                                        } else {
                                            resolve(status);
                                        }
                                    }
                                })
                        })
                        .catch((err) => {
                            if (err) {
                                reject(err);
                            }
                        })
                }
            })
    })
}

module.exports = { modifyFavorite, modifyAmplifies, markResolved, dispute };