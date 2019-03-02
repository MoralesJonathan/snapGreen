const mongodbConnection = require("../dbconfig/connection.js"),
    users = {
        test: cb => {
            mongodbConnection.db().stats(result => {
                cb(200)
            })
        },
        createPost: (data, cb) => {
            const collection = mongodbConnection.db().collection("users");
            collection.insertOne(data, function (err, result) {
                if (!err) {
                    cb(200, result )
                } else {
                    console.log(err);
                    cb(500, err);
                }
            });
        },
        getAllPosts: cb => {
            const collection = mongodbConnection.db().collection("users");
            collection.find({}).toArray((err, result) => {
                if (!err) {
                    cb(200, result)
                }
                else {
                    cb(500, err);
                }
            });
        },
        deletePost: (id, cb) => {
            const collection = mongodbConnection.db().collection("users");
            collection.deleteOne({ postId: id }, function (err, result) {
                !err ? cb(200, result) : cb(500, err);
            });
        },
        updatePost: (data, cb) => {
            const { id, ...rest } = data
            const collection = mongodbConnection.db().collection("users");
            collection.updateOne({ postId: id }, { $set: rest }, function (err, result) {
                !err ? cb(200, result) : cb(500, err);
            });
        }
    };

module.exports = users;