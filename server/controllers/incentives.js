const mongodbConnection = require("../dbconfig/connection.js"),
    incentives = {
        test: cb => {
            mongodbConnection.db().stats(result => {
                cb(200)
            })
        },
        createIncentive: (data, cb) => {
            const collection = mongodbConnection.db().collection("incentives");
            collection.insertOne(data, function (err, result) {
                if (!err) {
                    cb(200, result )
                } else {
                    console.log(err);
                    cb(500, err);
                }
            });
        },
        getAllIncentives: cb => {
            const collection = mongodbConnection.db().collection("incentives");
            collection.find({}).toArray((err, result) => {
                if (!err) {
                    cb(200, result)
                }
                else {
                    cb(500, err);
                }
            });
        },
        getIncentive: (id,cb) => {
            const collection = mongodbConnection.db().collection("incentives");
            collection.findOne({id:id}, (err, result) => {
                if (!err) {
                    cb(200, result)
                }
                else {
                    cb(500, err);
                }
            });
        },
        deleteIncentive: (id, cb) => {
            const collection = mongodbConnection.db().collection("incentives");
            collection.deleteOne({ incentiveId: id }, function (err, result) {
                !err ? cb(200, result) : cb(500, err);
            });
        },
        updateIncentive: (data, cb) => {
            const { id, ...rest } = data
            const collection = mongodbConnection.db().collection("incentives");
            collection.updateOne({ incentiveId: id }, { $set: rest }, function (err, result) {
                !err ? cb(200, result) : cb(500, err);
            });
        }
    };

module.exports = incentives;