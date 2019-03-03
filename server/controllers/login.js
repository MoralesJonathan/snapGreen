const bcrypt = require('bcrypt'),
    mongodbConnection = require("../dbconfig/connection.js"),
    login = (data, cb) => {
        const { username, password } = data;
        const collection = mongodbConnection.db().collection("login");
        const userCollection = mongodbConnection.db().collection("users");
        collection.findOne({
            username: username.toLowerCase().trim()
        }, function (error, user) {
            if (user !== null && bcrypt.compareSync(password, user.password)) {
                userCollection.findOne({
                    username: user.username
                }, function (err, userInfo) {
                    if (userInfo !== null ) {
                        cb(200, {userInfo});
                    }
                    else cb(400, false)
                })
            }
            else cb(400, false)
        })
    };

module.exports = login;
