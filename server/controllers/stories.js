const mongodbConnection = require("../dbconfig/connection.js"),
    stories = {
        test: cb => {
            mongodbConnection.db().stats(result => {
                cb(200)
            })
        },
        createStory: (data, cb) => {
            const collection = mongodbConnection.db().collection("stories");
            collection.insertOne(data, function (err, result) {
                if (!err) {
                    cb(200, result )
                } else {
                    console.log(err);
                    cb(500, err);
                }
            });
        },
        getAllStories: cb => {
            const collection = mongodbConnection.db().collection("stories");
            collection.find({}).toArray((err, result) => {
                if (!err) {
                    cb(200, result)
                }
                else {
                    cb(500, err);
                }
            });
        },
        getStory: (id,cb) => {
            const collection = mongodbConnection.db().collection("stories");
            collection.findOne({id:id}, (err, result) => {
                if (!err) {
                    cb(200, result)
                }
                else {
                    cb(500, err);
                }
            });
        },
        deleteStory: (id, cb) => {
            const collection = mongodbConnection.db().collection("stories");
            collection.deleteOne({ storyId: id }, function (err, result) {
                !err ? cb(200, result) : cb(500, err);
            });
        },
        updateStory: (data, cb) => {
            const { id, ...rest } = data
            const collection = mongodbConnection.db().collection("stories");
            collection.updateOne({ storyId: id }, { $set: rest }, function (err, result) {
                !err ? cb(200, result) : cb(500, err);
            });
        }
    };

module.exports = stories;