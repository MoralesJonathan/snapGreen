const router = require("express").Router(),
    postRoute = require('./post'),
    loginRoute = require('./login'),
    registerRoute = require('./register');
    storyRoute = require('./story');

router.use("/post", postRoute);
router.use("/story", storyRoute);
router.use("/login", loginRoute);
router.use("/register", registerRoute);


module.exports = router;