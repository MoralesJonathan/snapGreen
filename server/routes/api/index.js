const router = require("express").Router(),
    postRoute = require('./post'),
    loginRoute = require('./login'),
    registerRoute = require('./register');

router.use("/post", postRoute);
router.use("/login", loginRoute);
router.use("/register", registerRoute);


module.exports = router;