const router = require('express').Router();
const stories = require("../../controllers/stories.js");


router.get("/test", (req, res) => {
    stories.test((status, message = "ok") => res.status(status).send(message));
});

router.get("/", (req, res) => {
    stories.getAllStories((status, data = "ok") => res.status(status).send(data));
});

router.get("/:id", (req, res) => {
    stories.getStory(req.params.id, (status, data = "ok") => res.status(status).send(data));
});

router.put("/", (req, res) => {
    stories.createStory(req.body, (status, data = "ok") => res.status(status).send(data));
});

router.post("/", (req, res) => {
    stories.updateStory(req.body, (status, data = "ok") => res.status(status).send(data));
});

router.delete("/:id", (req, res) => {
    stories.deleteStory(req.params.id, (status, data = "ok") => res.status(status).send(data));
});
module.exports = router;