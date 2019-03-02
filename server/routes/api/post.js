const router = require('express').Router();
const posts = require("../../controllers/posts.js");


router.get("/test", (req, res) => {
    posts.test((status, message = "ok") => res.status(status).send(message));
});

router.get("/", (req, res) => {
    posts.getAllPosts((status, data = "ok") => res.status(status).send(data));
});

router.put("/", (req, res) => {
    posts.createPost(req.body, (status, data = "ok") => res.status(status).send(data));
});

router.post("/", (req, res) => {
    posts.updatePost(req.body, (status, data = "ok") => res.status(status).send(data));
});

router.delete("/:id", (req, res) => {
    posts.deletePost(req.params.id, (status, data = "ok") => res.status(status).send(data));
});
module.exports = router;