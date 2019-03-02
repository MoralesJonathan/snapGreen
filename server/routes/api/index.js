const router = require("express").Router();
const postRoute = require('./post')

router.use("/post", postRoute);

module.exports = router;